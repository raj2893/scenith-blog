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
        <link
          href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe&family=Amatic+SC:wght@400;700&family=Arimo:ital,wght@0,400;0,700;1,400;1,700&family=Barriecito&family=Barrio&family=Birthstone&family=Bungee+Hairline&family=Butcherman&family=Carlito:ital,wght@0,400;0,700;1,400;1,700&family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Doto:wght@900&family=Fascinate+Inline&family=Freckle+Face&family=Fredericka+the+Great&family=Gelasio:ital,wght@0,400;0,700;1,400;1,700&family=Imperial+Script&family=Kings&family=Kirang+Haerang&family=Lavishly+Yours&family=Lexend+Giga:wght@400;700;900&family=Montserrat+Alternates:wght@500;900&family=Mountains+of+Christmas:wght@400;700&family=Noto+Sans+Mono:wght@400;700&family=Poiret+One&family=Rampart+One&family=Rubik+Wet+Paint&family=Tangerine:wght@400;700&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&family=Yesteryear&display=swap"
          rel="stylesheet"
        />        
     </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}