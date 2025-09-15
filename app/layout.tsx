import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// ✅ GA + trackers
import Script from "next/script";
import Analytics from "@/components/Analytics";
import DownloadTracker from "@/components/DownloadTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-montserrat",
});

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
      <head>
        {/* ✅ Google Analytics base scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MKPBP09807"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MKPBP09807', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />

        {/* ✅ Track page views + apk downloads */}
        <Analytics />
        <DownloadTracker />

        <main>{children}</main>
      </body>
    </html>
  );
}
