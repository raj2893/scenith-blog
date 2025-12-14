"use client";  // ← ADD THIS AT THE VERY TOP!

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../../styles/globals.css';
import { useEffect } from "react";  // ← ADD THIS IMPORT

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    // ← Add this useEffect here
      useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        // Optional: Cleanup on unmount
        return () => {
          document.body.removeChild(script);
        };
      }, []);
  return (
    <html lang="en">
    <head>
       {/* Add PayPal SDK here when ready */}
        <script
           src="https://www.paypal.com/sdk/js?client-id=AU5s5mURZtELeP8zAjhdLdbBa_whfAtrHPUm5_TQGWGBGMKIoT7eBkEaAmPhhpGSH3ZoKxprtHWbFTJm&currency=USD"
           async
        ></script>
     </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}