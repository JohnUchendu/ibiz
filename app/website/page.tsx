"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import EcommercePlan from "@/components/Ecommerce";
import TestimonialCarousel from "@/components/Testimonial";

export default function PricingPlans() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      id: "starter",
      title: "Starter",
      priceMonthly: 11_997,
      priceYearly: 148_997,
      description: "Affordable site for new businesses and freelancers.",
      features: [
        "Up to 5 pages (Home, About, Services, Contact, Blog)",
        "Pre-designed template site, quick launch, minimal edits included.",
        "Responsive design with pre-built template",
        "Basic SEO & meta tags",
        "Free .com.ng domain",
        "Contact form + Google Maps",
        "24/7 email support",
      ],
      cta: "https://paystack.shop/pay/4eb06jjya1",
      tag: "Most affordable",
    },
    {
      id: "growth",
      title: "Growth",
      priceMonthly: 31_997,
      priceYearly: 389_997,
      description: "Best value — conversion-focused site for growing brands.",
      features: [
        "Up to 5 pages (Home, About, Services, Blog, Contact)",
        "Everything in starter",
        "On-page SEO & sitemap",
        "Performance optimization",
        "Google Analytics + Tag setup",
        "Payment integration (Paystack / Flutterwave)",
        "2 months priority support",
      ],
      cta: "https://paystack.shop/pay/qr7h68pw54",
      tag: "Affordable & popular",
    },
    {
      id: "premium",
      title: "Premium",
      priceMonthly: 166_667,
      priceYearly: 1_999_997,
      description: "Enterprise-grade — white glove delivery, growth focused.",
      features: [
        "Custom website design tailored to your brand (unlimited pages)",
        "Everything in growth",
        "Full brand identity kit (logo, colors, typography)",
        "Headless CMS + powerful admin dashboard",
        "Ecommerce store with unlimited products, bookings, or memberships",
        "Advanced SEO (technical, on-page, schema markup)",
        "Conversion Rate Optimization (CRO) + A/B testing setup",
        "Full blog system with content scheduling & AI content suggestions",
        "Integration with CRM (HubSpot, Zoho, Salesforce)",
        "Custom API & webhook integrations",
        "Automated email marketing setup (Mailchimp, ConvertKit, etc.)",
        "High-speed hosting setup (VPS/Cloudflare CDN)",
        "Performance & security hardening (SSL, firewall, backups)",
        "Priority SLA (24/7 support, 4-hour response time)",
        "Dedicated developer for 30 days post-launch",
        "Training & onboarding for your staff (video + docs)",
        "Quarterly growth & SEO strategy sessions",
        "Lifetime access to premium templates & updates",
        "Custom mobile app (basic iOS & Android wrapper for your site)",
      ],
      cta: "https://paystack.shop/pay/a6w2rjbrt6",
      tag: "All-in, white glove",
    },
  ];

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <main className="min-h-screen flex flex-col">
          {/* Hero */}
          <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-blue-50 to-white">
            <h2 className="text-4xl font-bold mb-4">
              Effortless brand showcase | High-converting website
              <span className="text-blue-600"> for Free</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mb-6">
              Launch polished professional websites with a developer
            </p>
            <a href="#contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contact Support
              </Button>
            </a>
          </section>
        </main>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold">Pricing plans</h2>
            <p className="mt-1 text-muted-foreground">
              Pick a plan that suits your stage — all plans are built with speed
              & SEO in mind.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-muted/50 p-1 rounded-full">
            <span
              className={`px-3 py-1 rounded-full cursor-pointer ${
                billing === "monthly" ? "bg-white shadow" : ""
              }`}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </span>
            <span
              className={`px-3 py-1 rounded-full cursor-pointer ${
                billing === "yearly" ? "bg-white shadow" : ""
              }`}
              onClick={() => setBilling("yearly")}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const isPremium = plan.id === "premium";
            const price =
              billing === "monthly" ? plan.priceMonthly : plan.priceYearly;

            return (
              <article
                key={plan.id}
                className={`relative rounded-2xl p-6 border ${
                  isPremium
                    ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white shadow-2xl scale-105"
                    : "bg-white"
                }`}
              >
                {isPremium && (
                  <div className="absolute -top-3 right-4 bg-amber-500 text-slate-900 px-3 py-1 text-xs rounded-xl font-semibold">
                    Premium
                  </div>
                )}

                <header className="mb-4">
                  <h3
                    className={`text-xl font-bold ${
                      isPremium ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {plan.title}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${
                      isPremium ? "text-amber-100" : "text-slate-600"
                    }`}
                  >
                    {plan.description}
                  </p>
                </header>

                <div className="mb-6 flex items-baseline gap-3">
                  <span
                    className={`text-3xl font-extrabold ${
                      isPremium ? "text-white" : "text-slate-900"
                    }`}
                  >
                    ₦{price.toLocaleString()}
                  </span>
                  <span
                    className={`text-sm ${
                      isPremium ? "text-amber-100" : "text-slate-500"
                    }`}
                  >
                    / {billing === "monthly" ? "month" : "year"}
                  </span>
                </div>

                <ul className="mb-6 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`text-sm leading-snug ${
                        isPremium ? "text-amber-50" : "text-slate-700"
                      }`}
                    >
                      • {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href={plan.cta}
                    className={`inline-block w-full text-center font-semibold py-3 rounded-lg ${
                      isPremium
                        ? "bg-amber-400 text-slate-900 hover:bg-amber-300"
                        : "bg-slate-900 text-white hover:opacity-95"
                    }`}
                    data-plan-id={plan.id}
                  >
                    Get yours
                  </a>

                  {/* <p className="text-xs mt-3 text-slate-500">
                  Replace the PAYSTACK link placeholder with your Paystack payment link for this plan.
                </p> */}

                  <div className="mt-4 text-xs text-slate-500">
                    <strong>Tag:</strong>{" "}
                    <span className="ml-1">{plan.tag}</span>
                  </div>
                </div>
              </article>
            );
          })}

          <EcommercePlan />
        </div>

        {/* <div className="mt-8 text-sm text-slate-500">
        <strong>How to use:</strong> Import this component into your page.tsx and drop it where you'd like the pricing section to appear. Replace the `https://paystack.com/pay/PAYSTACK_LINK_*` URLs with the actual Paystack hosted payment link for each plan.
      </div> */}

        {/* Contact */}
        <section id="contact" className="px-6 py-16 bg-gray-100 text-center">
          <h3 className="text-2xl font-bold mb-4">Contact Support</h3>
          <p className="text-gray-600 mb-6">
            Ready for your free website? Reach out to our support team now.
          </p>
          <a href="mailto:support@yourdomain.com">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Email Us
            </Button>
          </a>
        </section>

        <div className="mt-12 text-center text-sm text-gray-500">
          Trusted by startups & small businesses — 24/7 support included
        </div>
      </section>
<TestimonialCarousel/>
    </>
  );
}
