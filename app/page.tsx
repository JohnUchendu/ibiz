import React from "react"
import type { Metadata } from "next";

import Head from "next/head"
import Script from "next/script";
import ToolCard from "@/components/ToolCard";
// import AdSlot from "@/components/AdSlot";
import TestimonialCarousel from "@/components/Testimonial";

// export const metadata: Metadata = {
//   alternates: {
//     canonical: "https://eljardsltdservices.com",
//     languages: {
//       "en-US": "/en-US",
//       "en-GB": "/en-GB",
//     },
//   },
//   openGraph: {
//     title: "Eljards Ltd | Powering Your Home, Business & Drive",
//     description:
//       "From solar installations to car upgrades and business growth, Eljards Ltd is your trusted partner in transformation.",
//     url: "https://eljardsltdservices.com",
//     siteName: "Eljards Ltd Services",
//     images: [
//       {
//         url: "/logos/eljardslogo.png",
//         width: 800,
//         height: 600,
//         alt: "Eljards Ltd Services",
//       },
//     ],
//     locale: "en_NG",
//     type: "website",
//   },
//   title: "Eljards Ltd Services | Solar Energy & Business Consulting in Nigeria",
//   description:
//     "Empowering Nigerians with clean energy,  and strategic business growth. Discover how Eljards Ltd transforms lives and industries.",
//   generator: "",
//   applicationName: " Eljards Ltd Services",
//   referrer: "origin-when-cross-origin",
//   keywords: [
//     "Eljards Ltd Services",
//     "solar energy Nigeria",

//     "business consulting Nigeria",
//     "WiSolar Nigeria",
//   ],
//   authors: [{ name: "ECA" }],
//   creator: " ECA",
//   publisher: " ECA",
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
// };

<Head>
        <title>Business Starter Toolkit - Free Tools for SMEs</title>

        {/* Standard SEO Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Free tools for SMEs to create QR codes, invoices, receipts, letterheads, and more. No signup required, export as PDF." />
        <meta name="keywords" content="business tools, free QR code generator, invoice generator, receipt generator, letterhead maker, SME tools, Nigeria business" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Business Starter Toolkit" />

        {/* Open Graph Meta Tags (for WhatsApp, Facebook, X, etc.) */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Business Starter Toolkit - Free Tools for SMEs" key="og:title" />
        <meta property="og:description" content="Create payment QR codes, invoices, receipts, letterheads, and more for your business. Free, fast, no signup needed." key="og:description" />
        <meta property="og:image" content="https://ibiz.name.ng/logos/logo.png" key="og:image" />
        <meta property="og:image:alt" content="Preview of Business Starter Toolkit tools for SMEs" key="og:image:alt" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:url" content="https://ibiz.name.ng" key="og:url" />
        <meta property="og:site_name" content="Business Starter Toolkit" key="og:site_name" />

        {/* Twitter Card Meta Tags (for X) */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Business Starter Toolkit - Free Tools for SMEs" key="twitter:title" />
        <meta name="twitter:description" content="Free tools for SMEs: QR codes, invoices, receipts, and more. No signup, export as PDF." key="twitter:description" />
        <meta name="twitter:image" content="https://ibiz.name.ng/logos/logo.png" key="twitter:image" />
        <meta name="twitter:image:alt" content="Preview of Business Starter Toolkit tools for SMEs" key="twitter:image:alt" />
        <meta name="twitter:site" content="@jjdagreat" key="twitter:site" />
        <meta name="twitter:creator" content="@jjdagreat" key="twitter:creator" />
      </Head>

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
