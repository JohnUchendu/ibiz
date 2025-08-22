import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import { SessionProvider } from "next-auth/react";
import PromoPopup from "@/components/PromoPopUp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iBiz | Elite Business Solutions",
  description:
    "iBiz delivers refined, world-class business tools crafted for leaders who demand excellence, exclusivity, and lasting impact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
     
      <Nav /><br/><br/><br/><br/>
      <html lang="en">
        {/* NOTE: Add your AdSense script here after approval */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXX" crossOrigin="anonymous"></script> */}
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          
          {children}
        </body>
      </html>
      <PromoPopup/>
      <Footer />
    </>
  );
}
