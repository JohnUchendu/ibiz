import React from "react";
import type { Metadata } from "next";

import Script from "next/script";
import ToolCard from "@/components/ToolCard";
// import AdSlot from "@/components/AdSlot";
import TestimonialCarousel from "@/components/Testimonial";
import Packages from "@/components/Packages";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ibiz.name.ng."),
  alternates: {
    canonical: "https://www.ibiz.name.ng",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },

  title:
    "Business Starter Toolkit - Free Tool & Digital Services",
  description:
    "Free tools for SMEs to create QR codes, invoices, receipts, letterheads, and more. No signup required, export as PDF.",
  generator: "",
  applicationName: "iBiz Business Suite",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Email to inbox",
    "Email templates",
    "Get more customers with email marketing",
    "business tools",
    "free QR code generator",
    "invoice generator",
    "receipt generator",
    "letterhead maker",
    "SME tools",
    "Nigeria business ",
    "Make sales email list",
  ],
  authors: [{ name: "iBiz Business Suite" }],
  creator: "iBiz Business Suite",
  publisher: "iBiz Business Suite",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function HomePage() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8Q75XKPD1T"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8Q75XKPD1T');
        `}
      </Script>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <section className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            The Business Starter Toolkit – Free tools for SMEs to be
            professional online.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Generate <span className="font-semibold">payment QR codes</span>,{" "}
            <span className="font-semibold">invoices</span>,{" "}
            <span className="font-semibold">receipts</span>,{" "}
            <span className="font-semibold">posters</span> and{" "}
            <span className="font-semibold">ID cards</span> — fast, free, no
            signup required.
          </p>
        </section>

        <Packages />
        {/* <AdSlot /> */}

        {/* Tools Grid */}
        <section className="mt-12">
          <h2 className="sr-only">Available Tools</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* <ToolCard
              title="Business Name Generator"
              desc="Create elegant names for your new business"
              href="/business-name-generator"
            /> */}

            <ToolCard
              title="QR Code Generator"
              desc="Create custom or info QR codes for websites, menus and more"
              href="/qr-code-generator"
            />
            <ToolCard
              title="Invoice Generator"
              desc="Make clean, downloadable PDF invoices in seconds. No Excel needed."
              href="/invoice-generator"
            />
            <ToolCard
              title="Receipt Generator"
              desc="Instant receipts for businesses and freelancers — printable PDFs."
              href="/receipt-generator"
            />
            <ToolCard
              title="Letterhead Maker"
              desc="Design professional company letterheads and export them as PDF or Word documents."
              href="/letterhead-maker"
            />
            <ToolCard
              title="ID Card Design Maker"
              desc="Simple ID cards for staff, churches, schools — upload photo, export PDF."
              href="/id-card-maker"
            />
            <ToolCard
              title="SEO Audit Tool"
              desc="Instantly check your website’s SEO health — metadata, performance, technical SEO & more."
              href="/seo-audit"
            />
            <ToolCard
              title="Domain Checker"
              desc="Quickly check if your business domain is available and secure your online identity."
              href="/domain-checker"
            />
            <ToolCard
              title="Website Speed Test"
              desc="Analyze your site’s speed and performance, with insights to boost conversions."
              href="/website-speed-test"
            />

            <ToolCard
              title="Email Signature Generator"
              desc="Polished signature to gmail, outlook and more"
              href="email-signature"
            />

            <ToolCard
              title="Online Store"
              desc="Make money while you sleep, get paid straight to your bank account"
              href="/website/online-store"
            />
            <ToolCard
              title="Website Builder"
              desc="Get a professional website built for freelancers and business owners. Hosting, SEO & 3 business emails included."
              href="/website"
            />
            <ToolCard
              title="Business Email"
              desc="Create professional custom emails (you@yourbusiness.com) to build trust with clients."
              href="/email"
            />
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-16">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">
            Loved by Businesses ❤️
          </h2>
          <TestimonialCarousel />
        </section>

        {/* SEO Section (optional) */}
        {/* <section className="mt-20 prose max-w-3xl mx-auto text-gray-700">
          <h2 className="text-2xl font-bold">Why these “boring” tools?</h2>
          <p>
            Nigerian SMEs need fast, reliable tools to get paid and look
            professional. These tools are free to use and export to PNG/PDF,
            with no signup or database. Perfect for shops, POS agents, churches,
            schools and events.
          </p>
        </section> */}
      </main>
    </>
  );
}
