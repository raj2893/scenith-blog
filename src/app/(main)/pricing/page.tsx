"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { motion } from 'framer-motion';
import { API_BASE_URL } from '../../config';
import '../../../../styles/pricing.css';
import { FaTimes } from 'react-icons/fa';

interface PricingPlan {
  name: string;
  role: 'BASIC' | 'CREATOR' | 'STUDIO';
  price: number;
  currency: string;
  features: string[];
  ttsLimit: number;
  popular?: boolean;
  symbol?: string;
}

interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  picture: string | null;
  googleAuth: boolean;
  role: string;
}

export default function PricingPage() {
  const router = useRouter();
  const [currentPlan, setCurrentPlan] = useState<'BASIC' | 'CREATOR' | 'STUDIO'>('BASIC');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isIndianUser, setIsIndianUser] = useState<boolean | null>(null);
  const [isPricingReady, setIsPricingReady] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsLoggedIn(false);
        return;
      }

      try {
        const res = await axios.get(`${API_BASE_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCurrentPlan(res.data.role || 'BASIC');
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Error fetching user:', error);
        setIsLoggedIn(false);
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    if (!showLoginModal) return;

    const initializeGoogleSignIn = () => {
      if (window.google && window.google.accounts) {
        window.google.accounts.id.initialize({
          client_id: '397321320139-tpd310sq9j8rdngqd9kdmhgegco52b3g.apps.googleusercontent.com',
          callback: handleGoogleLogin,
        });
        const buttonElement = document.getElementById('googleSignInButtonPricing');
        if (buttonElement) {
          window.google.accounts.id.renderButton(buttonElement, {
            theme: 'outline',
            size: 'large',
            width: 300,
          });
        }
      } else {
        setTimeout(initializeGoogleSignIn, 100);
      }
    };

    initializeGoogleSignIn();
  }, [showLoginModal]);

  useEffect(() => {
    const detectCountry = async () => {
      try {
        // Using ipapi.co (free, no key needed for basic use)
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const countryCode = data.country_code;
        setIsIndianUser(countryCode === 'IN');
      } catch (err) {
        console.error('Geo detection failed, defaulting to international');
        setIsIndianUser(false); // fallback to USD
      } finally {
        setIsPricingReady(true); // ← Mark pricing as ready (success or fallback)
      }
    };

    detectCountry();
  }, []);

  const handleUpgrade = async (plan: PricingPlan) => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }

    if (plan.role === 'BASIC' || plan.role === currentPlan) {
      return;
    }

    setLoading(plan.role);

    try {
      // Step 1: Create order on backend
      const orderResponse = await axios.post(
        `${API_BASE_URL}/api/payments/create-order`,
        {
          planType: plan.role,
          amount: plan.price,
          currency: plan.currency
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }
      );

      const {
        internalOrderId,
        gatewayOrderId,
        keyId,
        gateway
      } = orderResponse.data;

      if (gateway === 'razorpay') {
        // Load Razorpay script if not already loaded
        if (!document.getElementById('razorpay-script')) {
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.id = 'razorpay-script';
          document.body.appendChild(script);
        }

        const options = {
          key: keyId,
          amount: plan.price * 100, // paise
          currency: 'INR',
          order_id: gatewayOrderId,
          name: 'Scenith',
          description: `Upgrade to ${plan.name}`,
          handler: async function (response: any) {
            try {
              // Verify payment on backend
              await axios.post(
                `${API_BASE_URL}/api/payments/verify-razorpay`,
                {
                  internalOrderId,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature
                },
                {
                  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                }
              );

              alert(`🎉 Successfully upgraded to ${plan.name}!`);
              setCurrentPlan(plan.role);
              router.push('/tools/ai-voice-generation');
            } catch (err: any) {
              console.error('Verification failed:', err);
              alert('Payment verification failed. Please contact support.');
            }
          },
          prefill: {
            email: userProfile?.email || '',
            name: userProfile ? `${userProfile.firstName} ${userProfile.lastName}`.trim() : ''
          },
          theme: {
            color: '#667eea'
          }
        };

        // @ts-ignore - Razorpay type not available
        const rzp = new window.Razorpay(options);
        rzp.open();
      }  else if (gateway === 'paypal') {
          // Create a container for PayPal buttons if not already present
          let paypalContainer = document.getElementById('paypal-button-container');
          if (!paypalContainer) {
            paypalContainer = document.createElement('div');
            paypalContainer.id = 'paypal-button-container';
            paypalContainer.style.position = 'fixed';
            paypalContainer.style.top = '50%';
            paypalContainer.style.left = '50%';
            paypalContainer.style.transform = 'translate(-50%, -50%)';
            paypalContainer.style.zIndex = '1000';
            paypalContainer.style.background = 'white';
            paypalContainer.style.padding = '20px';
            paypalContainer.style.borderRadius = '12px';
            paypalContainer.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
            document.body.appendChild(paypalContainer);
          }

          // Clear any previous buttons
          paypalContainer.innerHTML = '';

          // Render PayPal Buttons
          // @ts-ignore - paypal is global from SDK
          paypal.Buttons({
            createOrder: () => {
              return gatewayOrderId;  // Use the order ID created by backend
            },
            onApprove: async (data: any, actions: any) => {
              try {
                // Capture payment on backend
                const captureResponse = await axios.post(
                  `${API_BASE_URL}/api/payments/capture-paypal`,
                  {
                    internalOrderId,
                    paypalOrderId: data.orderID
                  },
                  {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                  }
                );

                if (captureResponse.data.status === 'SUCCESS') {
                  alert(`🎉 Successfully upgraded to ${plan.name} via PayPal!`);
                  setCurrentPlan(plan.role);
                  router.push('/tools/ai-voice-generation');
                } else {
                  alert('Payment capture failed. Please try again.');
                }
              } catch (err: any) {
                console.error('PayPal capture error:', err);
                alert('Error capturing payment: ' + (err.response?.data || 'Unknown error'));
              } finally {
                // Remove container after success/fail
                if (paypalContainer) {
                  document.body.removeChild(paypalContainer);
                }
              }
            },
            onCancel: () => {
              alert('Payment cancelled.');
              if (paypalContainer) {
                document.body.removeChild(paypalContainer);
              }
            },
            onError: (err: any) => {
              console.error('PayPal error:', err);
              alert('PayPal error occurred.');
              if (paypalContainer) {
                document.body.removeChild(paypalContainer);
              }
            }
          }).render('#paypal-button-container');
        }

    } catch (error: any) {
      console.error('Payment error:', error);
      alert('Error: ' + (error.response?.data || error.message));
    } finally {
      setLoading(null);
    }
  };

  const handleLogin = async (formData: { email: string; password: string }) => {
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, formData);
      const { token } = response.data;
      localStorage.setItem('token', token);

      // Fetch user profile
      const profileRes = await axios.get(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const fullName = profileRes.data.name || '';
      const nameParts = fullName.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

      setUserProfile({
        email: profileRes.data.email || '',
        firstName,
        lastName,
        picture: profileRes.data.picture || null,
        googleAuth: profileRes.data.googleAuth || false,
        role: profileRes.data.role || 'BASIC',
      });

      setCurrentPlan(profileRes.data.role || 'BASIC');
      setIsLoggedIn(true);
      setShowLoginModal(false);
    } catch (error: any) {
      setLoginError(error.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleGoogleLogin = async (credentialResponse: any) => {
    setLoginError(null);
    setIsLoggingIn(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/google`, {
        token: credentialResponse.credential,
      });
      const { token } = response.data;
      localStorage.setItem('token', token);

      const profileRes = await axios.get(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const fullName = profileRes.data.name || '';
      const nameParts = fullName.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

      setUserProfile({
        email: profileRes.data.email || '',
        firstName,
        lastName,
        picture: profileRes.data.picture || null,
        googleAuth: true,
        role: profileRes.data.role || 'BASIC',
      });

      setCurrentPlan(profileRes.data.role || 'BASIC');
      setIsLoggedIn(true);
      setShowLoginModal(false);
    } catch (error: any) {
      setLoginError(error.response?.data?.message || 'Google login failed');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const getPlans = (): PricingPlan[] => {
    if (isIndianUser === null) {
      // Show skeleton/loading or fallback during detection
      return [
        {
          name: 'Basic',
          role: 'BASIC',
          price: 0,
          currency: 'FREE',
          ttsLimit: 5000,
          features: ['5,000 Characters/month', '30+ AI Voices in multiple languages']
        },
        {
          name: 'Creator',
          role: 'CREATOR',
          price: 0,
          currency: 'LOADING',
          ttsLimit: 50000,
          popular: true,
          features: ['50,000 Characters/month', 'All Premium AI Voices']
        },
        {
          name: 'Studio',
          role: 'STUDIO',
          price: 0,
          currency: 'LOADING',
          ttsLimit: 150000,
          features: ['1,50,000 Characters/month', 'All Premium AI Voices']
        }
      ];
    }

    const creatorPrice = isIndianUser ? 499 : 15;
    const studioPrice = isIndianUser ? 1299 : 25;
    const currency = isIndianUser ? 'INR' : 'USD';
    const symbol = isIndianUser ? '₹' : '$';

    return [
      {
        name: 'Basic',
        role: 'BASIC',
        price: 0,
        currency: 'FREE',
        ttsLimit: 5000,
        features: ['5,000 Characters/month', '30+ AI Voices in multiple languages']
      },
      {
        name: 'Creator',
        role: 'CREATOR',
        price: creatorPrice,
        currency: currency,
        symbol: symbol, // we'll use this in UI
        ttsLimit: 50000,
        popular: true,
        features: ['50,000 Characters/month', 'All Premium AI Voices']
      },
      {
        name: 'Studio',
        role: 'STUDIO',
        price: studioPrice,
        currency: currency,
        symbol: symbol,
        ttsLimit: 150000,
        features: ['1,50,000 Characters/month', 'All Premium AI Voices']
      }
    ];
  };

  return (
    <div className="pricing-page">
    {!isPricingReady ? (
      <div className="pricing-loading">
        <div className="spinner-large"></div>
        <p>Loading your personalized pricing...</p>
      </div>
    ) : (
      <>
        <section className="pricing-hero">
          <h1>Simple, Transparent Pricing</h1>
          <p>Choose the plan that fits your needs</p>
        </section>

      <div className="pricing-grid">
        {getPlans().map((plan) => (
          <motion.div
            key={plan.role}
            className={`pricing-card ${plan.popular ? 'popular' : ''} ${
              currentPlan === plan.role ? 'current' : ''
            }`}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            {currentPlan === plan.role && <div className="current-badge">Current Plan</div>}
            {currentPlan === 'STUDIO' && plan.role === 'CREATOR' && (
              <div className="downgrade-blocked-badge">Downgrade Not Available</div>
            )}

            <h2>{plan.name}</h2>
            <div className="price">
              {plan.price === 0 ? (
                'FREE'
              ) : plan.currency === 'LOADING' ? (
                <span>Loading price...</span>
              ) : (
                <>
                  <span className="currency">{plan.symbol}</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/month</span>
                </>
              )}
            </div>

            <ul className="features">
              {plan.features.map((feature, index) => (
                <li key={index}>✅ {feature}</li>
              ))}
            </ul>

            <button
              className="upgrade-button"
              onClick={() => handleUpgrade(plan)}
              disabled={
                loading !== null ||
                plan.role === 'BASIC' ||
                plan.role === currentPlan ||
                (currentPlan === 'STUDIO' && plan.role === 'CREATOR')
              }
            >
              {loading === plan.role
                ? 'Processing...'
                : plan.role === currentPlan
                  ? 'Current Plan'
                  : (currentPlan === 'STUDIO' && plan.role === 'CREATOR')
                    ? 'Downgrade Not Allowed'
                    : plan.role === 'BASIC'
                      ? 'Free Forever'
                      : 'Upgrade Now'
              }
            </button>
          </motion.div>
        ))}
      </div>
      </>
    )}
      {showLoginModal && (
        <div className="modal-overlay">
          <motion.div
            className="login-modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="modal-close-button"
              onClick={() => setShowLoginModal(false)}
              aria-label="Close login modal"
            >
              <FaTimes />
            </button>
            <div className="auth-container">
              <div className="auth-header">
                <h1>SCENITH</h1>
                <p>Login to Continue</p>
              </div>

              {isLoggingIn && (
                <div className="loading-overlay">
                  <div className="spinner" />
                  <p>Logging in...</p>
                </div>
              )}

              {loginError && <div className="error-message">{loginError}</div>}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  handleLogin({
                    email: formData.get('email') as string,
                    password: formData.get('password') as string,
                  });
                }}
                className="auth-form"
              >
                <div className="auth-input-label">
                  <input
                    type="email"
                    name="email"
                    placeholder=" "
                    className="auth-input"
                    required
                    disabled={isLoggingIn}
                  />
                  <span>Email</span>
                </div>
                <div className="auth-input-label">
                  <input
                    type="password"
                    name="password"
                    placeholder=" "
                    className="auth-input"
                    required
                    disabled={isLoggingIn}
                  />
                  <span>Password</span>
                </div>
                <button type="submit" className="cta-button auth-button" disabled={isLoggingIn}>
                  {isLoggingIn ? 'Logging in...' : 'Login'}
                </button>
              </form>

              <div className="divider">OR</div>
              <div id="googleSignInButtonPricing" className="google-button"></div>

              <p className="auth-link">
                New to SCENITH? <a href="/register">Sign up</a>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}