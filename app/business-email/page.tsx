"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import PromoBanner from "@/components/PromoBanner";

export default function BusinessEmailPlans() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const emailPlans = [
    {
      id: "starter-email",
      title: "Starter Email",
      priceMonthly: 5_897,
      priceYearly: 64_970,
      description:
        "Professional business email for individuals and freelancers.",
      features: [
        "5custom business email (you@yourdomain.com)",
        "5GB mailbox storage",
        "Basic spam protection",
        "Webmail & mobile access",
        "1 month support",
      ],
      cta: "https://paystack.shop/pay/l2561uo9au",
      tag: "Most affordable",
    },
    {
      id: "growth-email",
      title: "Growth Email",
      priceMonthly: 8_897,
      priceYearly: 107_997,
      description: "Email suite for growing teams and businesses.",
      features: [
        "Up to 10 custom business emails",
        "30GB mailbox storage per user",
        "Advanced spam & malware protection",
        "Calendar & contact sync",
        "Shared team inbox & collaboration tools",
        "Priority support",
      ],
      cta: "https://paystack.shop/pay/0th0ry0u0h",
      tag: "Team favorite",
    },
    {
      id: "premium-email",
      title: "Premium Email",
      priceMonthly: 14_897,
      priceYearly: 180_997,
      description: "Enterprise-grade secure email & productivity suite.",
      features: [
        "Everything in growth",
        "Unlimited custom business emails",
        "100GB mailbox storage per user",
        "AI-powered spam & phishing protection",
        "Video meetings & chat integration",
        "File storage & document collaboration",
        "Admin console with advanced controls",
        "24/7 priority SLA support",
        "IMAP, SMTP, POP",
      ],
      cta: "https://paystack.com/pay/PAYSTACK_LINK_EMAIL_PREMIUM",
      tag: "All-in enterprise",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-4xl font-bold mb-4">
          Credible Communication <span className="text-blue-600">for Free</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-6">
          Branded email addresses that build trust and authority
        </p>
        <a href="#contact">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Contact Support
          </Button>
        </a>
      </section>

      {/* Billing Toggle */}
      <div className="flex items-center justify-center mb-8">
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

      {/* Business Email Plans */}
      <div>
        <h2 className="text-3xl font-extrabold mb-8 text-center">
          Business Email Plans
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {emailPlans.map((plan) => {
            const isPremium = plan.id === "premium-email";
            const price =
              billing === "monthly" ? plan.priceMonthly : plan.priceYearly;

            return (
              <article
                key={plan.id}
                className={`relative rounded-2xl p-6 border ${
                  isPremium
                    ? "bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white shadow-2xl scale-105"
                    : "bg-white"
                }`}
              >
                {isPremium && (
                  <div className="absolute -top-3 right-4 bg-indigo-400 text-slate-900 px-3 py-1 text-xs rounded-xl font-semibold">
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
                      isPremium ? "text-indigo-100" : "text-slate-600"
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
                      isPremium ? "text-indigo-100" : "text-slate-500"
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
                        isPremium ? "text-indigo-50" : "text-slate-700"
                      }`}
                    >
                      • {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto text-center">
                  <a
                    href={plan.cta}
                    className={`inline-block w-full text-center font-semibold py-3 rounded-lg ${
                      isPremium
                        ? "bg-indigo-400 text-slate-900 hover:bg-indigo-300"
                        : "bg-slate-900 text-white hover:opacity-95"
                    }`}
                    data-plan-id={plan.id}
                  >
                    Get yours
                  </a>

                  <div className="mt-2 text-xs text-slate-500">
                    <strong>Tag:</strong> {plan.tag}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <PromoBanner />

      {/* Contact Section */}
      <section id="contact" className="px-6 py-16 bg-gray-100 text-center">
        <h3 className="text-2xl font-bold mb-4">Contact Support</h3>
        <p className="text-gray-600 mb-6">
          Ready for your business email? Reach out to our support team now.
        </p>
        <a href="mailto:support@yourdomain.com">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Email Us
          </Button>
        </a>
      </section>
    </section>
  );
}
