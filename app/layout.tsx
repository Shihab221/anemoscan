
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import GoogleAnalyticsWrapper from "../components/GoogleAnalyticsWrapper";
import { Montserrat } from 'next/font/google';
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({ subsets: ['latin'],weight: ["100", "300", "400", "700", "900"], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: "App Analytics Dashboard",
  description: "Track your app visits and downloads",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}>
        
        
        {/* Main content */}
        <main>
          <Navbar />
          {children}
          <GoogleAnalyticsWrapper />
        </main>
      </body>
    </html>
  );
}