import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../../styles/globals.css';
import Navbar from '../app/components/Navbar'; // Adjust path based on your file structure
import Footer from '../app/components/Footer'; // Adjust path based on your file structure

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Scenith',
    template: '%s | Scenith'
  },
  description: 'Professional video editing platform',
  icons: {
    icon: '/scenith.ico',
  },  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar pageType="blogs" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}