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
  originalPrice?: number;
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

interface IndividualPlan {
  name: string;
  planType: 'AI_VOICE_PRO' | 'AI_SUBTITLE_PRO' | 'AI_SPEED_PRO';
  price: number;
  originalPrice?: number;
  currency: string;
  features: string[];
  symbol?: string;
  service: string; // e.g., "AI Voice Generation"
}

export default function PricingPageClient() {
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
  const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState<'individual' | 'bundle'>('individual');
  const [isPaymentInProgress, setIsPaymentInProgress] = useState(false);

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
      const handleBeforeUnload = (e: BeforeUnloadEvent) => {
        if (isPaymentInProgress) {
          e.preventDefault();
          e.returnValue = 'Payment is in progress. Closing this tab may affect your transaction. Are you sure you want to leave?';
          return e.returnValue;
        }
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, [isPaymentInProgress]);
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
    modal: {
      ondismiss: function() {
        setIsPaymentInProgress(false);
        setLoading(null);
      }
    },
    handler: async function (response: any) {
      setIsPaymentInProgress(true);
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

        setIsPaymentInProgress(false);
        alert(`🎉 Successfully upgraded to ${plan.name}!`);
        setCurrentPlan(plan.role);
        router.push('/tools/ai-voice-generation');
      } catch (err: any) {
        console.error('Verification failed:', err);
        setIsPaymentInProgress(false);
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
  } else if (gateway === 'paypal') {
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
              setIsPaymentInProgress(true);
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

                setIsPaymentInProgress(false);
                if (captureResponse.data.status === 'SUCCESS') {
                  alert(`🎉 Successfully upgraded to ${plan.name} via PayPal!`);
                  setCurrentPlan(plan.role);
                  router.push('/tools/ai-voice-generation');
                } else {
                  alert('Payment capture failed. Please try again.');
                }
              } catch (err: any) {
                console.error('PayPal capture error:', err);
                setIsPaymentInProgress(false);
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
        setIsPaymentInProgress(false);
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
      return [
        {
          name: 'Basic',
          role: 'BASIC',
          price: 0,
          currency: 'FREE',
          ttsLimit: 3500,
          features: [
            '3,500 Characters/month',
            '699 Characters/day',
            '250 Characters per request',
            '30+ AI Voices in multiple languages',
            '5 Subtitle videos/month',
            '5 Speed videos/month',
            '5 minutes per video',
            'Up to 720p quality',
            'Basic support',
            'Commercial use allowed'
          ]
        },
        {
          name: 'Creator',
          role: 'CREATOR',
          price: 0,
          currency: 'LOADING',
          ttsLimit: 60000,
          popular: true,
          features: [
            '60,000 Characters/month',
            '15,000 Characters/day',
            '3,500 Characters per request',
            'All Premium AI Voices',
            '45 Subtitle videos/month',
            '45 Speed videos/month',
            '30 minutes per video',
            'Up to 1440p quality',
            '400 AI Images/month (15/day)',
            '2 images per request (896x1152)',
            'Elements & Templates (Coming Soon)',
            'Priority support',
            'Commercial use allowed'
          ]
        },
        {
          name: 'Studio',
          role: 'STUDIO',
          price: 0,
          currency: 'LOADING',
          ttsLimit: 200000,
          features: [
            '200,000 Characters/month',
            'Unlimited daily usage',
            '5,000 Characters per request',
            'All Premium AI Voices',
            'Unlimited Subtitle videos/month',
            'Unlimited Speed videos/month',
            'Unlimited video length',
            'Up to 4K quality',
            '900 AI Images/month (30/day)',
            '4 images per request (1024x1024)',
            'Elements & Templates (Coming Soon)',
            'Dedicated support',
            'Commercial use allowed'
          ]
        }
      ];
    }

// Final prices AFTER 25% discount
const creatorPrice = isIndianUser ? 349 : 9;
const studioPrice = isIndianUser ? 749 : 19;

// Calculate original prices BEFORE discount (final price is 75% of original, so original = final / 0.75)
const originalCreatorPrice = Math.round(creatorPrice / 0.75);
const originalStudioPrice = Math.round(studioPrice / 0.75);

    const currency = isIndianUser ? 'INR' : 'USD';
    const symbol = isIndianUser ? '₹' : '$';

    return [
      {
        name: 'Basic',
        role: 'BASIC',
        price: 0,
        currency: 'FREE',
        ttsLimit: 3500,
        features: [
          '3,500 Characters/month',
          '699 Characters/day',
          '250 Characters per request',
          '30+ AI Voices in multiple languages',
          '5 Subtitle videos/month',
          '5 Speed videos/month',
          '5 minutes per video',
          'Up to 720p quality',
          'Basic support',
          'Commercial use allowed'
        ]
      },
      {
        name: 'Creator',
        role: 'CREATOR',
        price: creatorPrice,
        originalPrice: originalCreatorPrice,
        currency: currency,
        symbol: symbol,
        ttsLimit: 60000,
        popular: true,
        features: [
          '60,000 Characters/month',
          '15,000 Characters/day',
          '3,500 Characters per request',
          'All Premium AI Voices',
          '45 Subtitle videos/month',
          '45 Speed videos/month',
          '30 minutes per video',
          'Up to 1440p quality',
          '400 AI Images/month (15/day)',
          '2 images per request (896x1152)',
          'Elements & Templates (Coming Soon)',
          'Priority support',
          'Commercial use allowed'
        ]
      },
      {
        name: 'Studio',
        role: 'STUDIO',
        price: studioPrice,
        originalPrice: originalStudioPrice,
        currency: currency,
        symbol: symbol,
        ttsLimit: 200000,
        features: [
          '200,000 Characters/month',
          'Unlimited daily usage',
          '5,000 Characters per request',
          'All Premium AI Voices',
          'Unlimited Subtitle videos/month',
          'Unlimited Speed videos/month',
          'Unlimited video length',
          'Up to 4K quality',
          '900 AI Images/month (30/day)',
          '4 images per request (1024x1024)',
          'Elements & Templates (Coming Soon)',
          'Dedicated support',
          'Commercial use allowed'
        ]
      }
    ];
  };  

  const getIndividualPlans = (): IndividualPlan[] => {
    if (isIndianUser === null) {
      return [
        {
          name: 'AI Voice Pro',
          planType: 'AI_VOICE_PRO',
          price: 0,
          currency: 'LOADING',
          service: 'AI Voice Generation',
          features: [
            '50,000 Characters/month',
            '10,000 Characters/day',
            '2,500 Characters per request',
            'All Premium AI Voices',
            'Priority support'
          ]
        },
        {
          name: 'AI Subtitle Pro',
          planType: 'AI_SUBTITLE_PRO',
          price: 0,
          currency: 'LOADING',
          service: 'AI Subtitle Generation',
          features: [
            '30 videos/month',
            '20 minutes per video',
            'Up to 1440p quality',
            'Word-level timing',
            'Custom styling'
          ]
        },
        {
          name: 'AI Speed Pro',
          planType: 'AI_SPEED_PRO',
          price: 0,
          currency: 'LOADING',
          service: 'Video Speed Control',
          features: [
            '30 videos/month',
            '20 minutes per video',
            'Up to 1440p quality',
            '0.5x - 15x speed range',
            'Audio pitch correction'
          ]
        }
      ];
    }
  
    const currency = isIndianUser ? 'INR' : 'USD';
    const symbol = isIndianUser ? '₹' : '$';
  
   // Final prices after 25% discount
   const voicePrice = isIndianUser ? 199 : 5;
   const subtitlePrice = isIndianUser ? 199 : 5;
   const speedPrice = isIndianUser ? 199 : 5;

   // Calculate original prices by adding 25% (original = price / 0.75)
   const voiceOriginal = Math.round(voicePrice / 0.75);
   const subtitleOriginal = Math.round(subtitlePrice / 0.75);
   const speedOriginal = Math.round(speedPrice / 0.75);

    return [
      {
        name: 'AI Voice Pro',
        planType: 'AI_VOICE_PRO',
        price: voicePrice,
        originalPrice: voiceOriginal,
        currency: currency,
        symbol: symbol,
        service: 'AI Voice Generation',
        features: [
          '50,000 Characters/month',
          '10,000 Characters/day',
          '2,500 Characters per request',
          'All Premium AI Voices',
          'Priority support',
          'Commercial use allowed'
        ]
      },
      {
        name: 'AI Subtitle Pro',
        planType: 'AI_SUBTITLE_PRO',
        price: subtitlePrice,
        originalPrice: subtitleOriginal,
        currency: currency,
        symbol: symbol,
        service: 'AI Subtitle Generation',
        features: [
          '30 videos/month',
          '20 minutes per video',
          'Up to 1440p quality',
          'Word-level timing',
          'Custom styling',
          'Commercial use allowed'
        ]
      },
      {
        name: 'AI Speed Pro',
        planType: 'AI_SPEED_PRO',
        price: speedPrice,
        originalPrice: speedOriginal,
        currency: currency,
        symbol: symbol,
        service: 'Video Speed Control',
        features: [
          '30 videos/month',
          '20 minutes per video',
          'Up to 1440p quality',
          '0.5x - 15x speed range',
          'Audio pitch correction',
          'Commercial use allowed'
        ]
      }
    ];
  };  

  const handleIndividualPlanUpgrade = async (plan: IndividualPlan) => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
  
    setLoading(plan.planType);
  
    try {
      const orderResponse = await axios.post(
        `${API_BASE_URL}/api/payments/create-order`,
        {
          planType: plan.planType, // AI_VOICE_PRO, AI_SUBTITLE_PRO, or AI_SPEED_PRO
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
          description: `${plan.name} - ${plan.service}`,
          modal: {
            ondismiss: function() {
              setIsPaymentInProgress(false);
              setLoading(null);
            }
          },
          handler: async function (response: any) {
            setIsPaymentInProgress(true);
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

              setIsPaymentInProgress(false);
              alert(`🎉 Successfully purchased ${plan.name}!`);
              router.push('/tools/ai-voice-generation');
            } catch (err: any) {
              console.error('Verification failed:', err);
              setIsPaymentInProgress(false);
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

        // @ts-ignore
        const rzp = new window.Razorpay(options);
        rzp.open();
        } else if (gateway === 'paypal') {
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
  
        paypalContainer.innerHTML = '';
  
        // @ts-ignore
        paypal.Buttons({
          createOrder: () => gatewayOrderId,
          onApprove: async (data: any, actions: any) => {
            setIsPaymentInProgress(true);
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

              setIsPaymentInProgress(false);
              if (captureResponse.data.status === 'SUCCESS') {
                alert(`🎉 Successfully purchased ${plan.name} via PayPal!`);
                // Don't set currentPlan for individual plans - they don't affect the main role
                router.push('/tools/ai-voice-generation');
              } else {
                alert('Payment capture failed. Please try again.');
              }
            } catch (err: any) {
              console.error('PayPal capture error:', err);
              setIsPaymentInProgress(false);
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
          setIsPaymentInProgress(false);
          alert('Error: ' + (error.response?.data || error.message));
        } finally {
          setLoading(null);
        }
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
                <div className="discount-banner">
                  <span className="discount-text">25% OFF</span>
                  <span className="limited-offer">Limited Time Offer!</span>
                </div>
                <p>Choose the plan that fits your needs</p>

                {/* Section Tabs */}
                <div className="section-tabs" style={{ marginTop: '30px' }}>
                  <button
                    className={`section-tab ${activeSection === 'individual' ? 'active' : ''}`}
                    onClick={() => setActiveSection('individual')}
                  >
                    <span className="tab-icon">💎</span>
                    Individual Plans
                  </button>
                  <button
                    className={`section-tab ${activeSection === 'bundle' ? 'active' : ''}`}
                    onClick={() => setActiveSection('bundle')}
                  >
                    <span className="tab-icon">📦</span>
                    Bundle Plans
                  </button>
                </div>
              </section>
      {activeSection === 'bundle' && (
              <div className="pricing-grid">
        {getPlans().map((plan) => {
          const planIcons = {
            BASIC: (
              <svg className="plan-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" stroke="url(#gradient1)" strokeWidth="3" fill="none"/>
                <path d="M32 16v16l11 6.5" stroke="url(#gradient1)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient1" x1="0" y1="0" x2="64" y2="64">
                    <stop offset="0%" stopColor="#667eea"/>
                    <stop offset="100%" stopColor="#764ba2"/>
                  </linearGradient>
                </defs>
              </svg>
            ),
            CREATOR: (
              <svg className="plan-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 8l8 16h16l-13 12 5 16-16-10-16 10 5-16-13-12h16z" fill="url(#gradient2)"/>
                <defs>
                  <linearGradient id="gradient2" x1="0" y1="0" x2="64" y2="64">
                    <stop offset="0%" stopColor="#667eea"/>
                    <stop offset="100%" stopColor="#764ba2"/>
                  </linearGradient>
                </defs>
              </svg>
            ),
            STUDIO: (
              <svg className="plan-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20h40v32H12z" stroke="url(#gradient3)" strokeWidth="3" fill="none"/>
                <circle cx="22" cy="30" r="3" fill="url(#gradient3)"/>
                <circle cx="32" cy="30" r="3" fill="url(#gradient3)"/>
                <circle cx="42" cy="30" r="3" fill="url(#gradient3)"/>
                <path d="M20 42h24" stroke="url(#gradient3)" strokeWidth="3" strokeLinecap="round"/>
                <path d="M32 12l-6 8h12z" fill="url(#gradient3)"/>
                <defs>
                  <linearGradient id="gradient3" x1="0" y1="0" x2="64" y2="64">
                    <stop offset="0%" stopColor="#667eea"/>
                    <stop offset="100%" stopColor="#764ba2"/>
                  </linearGradient>
                </defs>
              </svg>
            )
          };
        
          return (
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
        
              {/* SVG Icon */}
              <div className="plan-icon-wrapper">
                {planIcons[plan.role]}
              </div>
            
              <h2>{plan.name}</h2>
              <div className="plan-subtitle">{plan.role} PLAN</div>
            
             <div className="price">
               {plan.currency === 'LOADING' ? (
                 <span className="loading-text">Loading...</span>
               ) : plan.price === 0 ? (
                 <span className="free-price">FREE</span>
               ) : (
                 <div className="price-main-row">
                   {plan.originalPrice ? (
                     <span className="original-price">
                       {plan.symbol}
                       {plan.originalPrice}
                       <span className="slash-period"> /mo</span>
                     </span>
                   ) : null}

                   <span className="current-price">
                     {plan.symbol}
                     {plan.price}
                     <span className="slash-period"> /mo</span>
                   </span>

                 </div>
               )}
             </div>
              <div className="price-description">
                {plan.price === 0 ? 'Forever free' : (
                  <>
                    <span className="savings-badge">Save 25%</span>
                  </>
                )}
              </div>
              
              <ul className="features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
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
          );
        })}
      </div>
       )}

      {/* Individual Service Plans */}
      {/* Individual Service Plans */}
            {activeSection === 'individual' && (
              <section className="individual-plans-section">
        <h2>Or Choose Individual Services</h2>
        <p className="section-subtitle">Get exactly what you need without committing to a full bundle</p>
        
        <div className="individual-plans-grid">
          {getIndividualPlans().map((plan) => (
            <motion.div
              key={plan.planType}
              className="individual-plan-card"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="service-label">{plan.service}</div>
              <h3>{plan.name}</h3>
              
              <div className="price">
                {plan.currency === 'LOADING' ? (
                  <span className="loading-text">Loading...</span>
                ) : plan.price === 0 ? (
                  <span className="free-price">FREE</span>
                ) : (
                  <div className="price-main-row">
                    {plan.originalPrice ? (
                      <span className="original-price">
                        {plan.symbol}
                        {plan.originalPrice}
                        <span className="slash-period"> /mo</span>
                      </span>
                    ) : null}

                    <span className="current-price">
                      {plan.symbol}
                      {plan.price}
                      <span className="slash-period"> /mo</span>
                    </span>


                  </div>
                )}
              </div>
              <div className="price-description">
                <span className="savings-badge">Save 25%</span>
              </div>
              
              <ul className="features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              
              <button
                className="upgrade-button"
                onClick={() => handleIndividualPlanUpgrade(plan)}
                disabled={loading !== null}
              >
                {loading === plan.planType ? 'Processing...' : 'Purchase Now'}
              </button>
            </motion.div>
          ))}
        </div>
      </section>
            )}

      {/* FAQ Section */}
      <section className="pricing-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>What is AI voice generation?</h3>
            <p>AI voice generation uses advanced text-to-speech technology to convert written text into natural-sounding speech. Scenith offers 30+ premium AI voices in multiple languages for various use cases including content creation, e-learning, podcasts, and commercial projects.</p>
          </div>
          <div className="faq-item">
            <h3>Can I upgrade or downgrade my plan?</h3>
            <p>Yes! You can upgrade your plan at any time. Upgrades take effect immediately. Note that downgrades from Studio to Creator are not available to maintain service quality. All plans are billed monthly with no long-term commitments.</p>
          </div>
          <div className="faq-item">
            <h3>What happens if I exceed my character limit?</h3>
            <p>Your daily and monthly character limits are tracked separately. If you reach your daily limit, you can continue the next day. If you exceed your monthly limit, you'll need to upgrade to a higher tier or wait until your plan renews.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer refunds?</h3>
            <p>No. We do not offer refund on our paid plans.</p>
          </div>
          <div className="faq-item">
            <h3>Can I use the voices for commercial projects?</h3>
            <p>All our plans allow you to use generated voices for commercial projects including YouTube videos, podcasts, advertisements, and e-learning content.</p>
          </div>
          <div className="faq-item">
            <h3>Which payment methods do you accept?</h3>
            <p>We accept all major payment methods through Razorpay (for India) and PayPal (international). This includes credit cards, debit cards, UPI, net banking, and digital wallets for secure transactions.</p>
          </div>
        </div>
      </section>
            
      {/* Comparison Table */}
      <section className="pricing-comparison">
        <h2>Detailed Plan Comparison</h2>
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Basic</th>
                <th>Creator</th>
                <th>Studio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly Characters (AI Voice)</td>
                <td>3,500</td>
                <td>60,000</td>
                <td>200,000</td>
              </tr>
              <tr>
                <td>Daily Character Limit (AI Voice)</td>
                <td>699</td>
                <td>15,000</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Max Characters per Request</td>
                <td>250</td>
                <td>3,500</td>
                <td>5,000</td>
              </tr>
              <tr>
                <td>Subtitle Videos/Month</td>
                <td>5 videos</td>
                <td>45 videos</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Max Video Length (Subtitle)</td>
                <td>5 minutes</td>
                <td>30 minutes</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Speed Videos/Month</td>
                <td>5 videos</td>
                <td>45 videos</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Max Video Length (Speed)</td>
                <td>5 minutes</td>
                <td>30 minutes</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Max Video Quality</td>
                <td>720p</td>
                <td>1440p</td>
                <td>4K</td>
              </tr>
              <tr>
                <td>AI Voice Library</td>
                <td>30+ voices</td>
                <td>All premium voices</td>
                <td>All premium voices</td>
              </tr>
              <tr>
                <td>Commercial Use</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Priority Support</td>
                <td>✗</td>
                <td>✓</td>
                <td>✓ Dedicated</td>
              </tr>
              <tr>
                <td>Elements & Templates</td>
                <td>✗</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>API Access</td>
                <td>✗</td>
                <td>✗</td>
                <td>Coming Soon</td>
              </tr>
            </tbody>            
          </table>
        </div>
      </section>
            
      {/* Use Cases */}
      <section className="pricing-use-cases">
        <h2>Perfect for Every Creator</h2>
        <div className="use-cases-grid">
          <div className="use-case-card">
            <div className="use-case-icon">🎙️</div>
            <h3>Content Creators</h3>
            <p>Generate professional voiceovers for YouTube videos, social media content, and podcasts. Our AI voices bring your scripts to life with natural intonation and emotion.</p>
          </div>
          <div className="use-case-card">
            <div className="use-case-icon">📚</div>
            <h3>E-Learning Professionals</h3>
            <p>Create engaging educational content with consistent, clear narration. Perfect for online courses, tutorials, and training materials in multiple languages.</p>
          </div>
          <div className="use-case-card">
            <div className="use-case-icon">📱</div>
            <h3>App Developers</h3>
            <p>Integrate natural-sounding voices into your applications, games, and interactive experiences. Scale your voice content without recording studios.</p>
          </div>
          <div className="use-case-card">
            <div className="use-case-icon">📢</div>
            <h3>Marketing Teams</h3>
            <p>Produce advertisements, explainer videos, and promotional content quickly. Test multiple voice styles to find the perfect brand voice.</p>
          </div>
        </div>
      </section>
            
      {/* Trust Indicators */}
      <section className="pricing-trust">
        <h2>Why Choose Scenith?</h2>
        <div className="trust-grid">
          <div className="trust-item">
            <div className="trust-icon">🔒</div>
            <h3>Secure Payments</h3>
            <p>Bank-grade encryption with Razorpay and PayPal</p>
          </div>
          <div className="trust-item">
            <div className="trust-icon">⚡</div>
            <h3>Instant Access</h3>
            <p>Start generating voices immediately after upgrade</p>
          </div>
          <div className="trust-item">
            <div className="trust-icon">🌍</div>
            <h3>Global Support</h3>
            <p>30+ languages and regional voice options</p>
          </div>
          <div className="trust-item">
            <div className="trust-icon">💯</div>
            <h3>Quality Guaranteed</h3>
            <p>Premium AI voices with natural intonation</p>
          </div>
        </div>
      </section>      
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