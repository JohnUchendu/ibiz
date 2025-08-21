"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function PricingPlans() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

 

  const emailPlans = [
    {
      id: "starter-email",
      title: "Starter Email",
      priceMonthly: 19,
      priceYearly: 199,
      description: "Professional business email for individuals and freelancers.",
      features: [
        "1 custom business email (you@yourdomain.com)",
        "5GB mailbox storage",
        "Basic spam protection",
        "Webmail & mobile access",
        "1 month support",
      ],
      cta: "https://paystack.com/pay/PAYSTACK_LINK_EMAIL_STARTER",
      tag: "Most affordable",
    },
    {
      id: "growth-email",
      title: "Growth Email",
      priceMonthly: 49,
      priceYearly: 499,
      description: "Email suite for growing teams and businesses.",
      features: [
        "Up to 10 custom business emails",
        "30GB mailbox storage per user",
        "Advanced spam & malware protection",
        "Calendar & contact sync",
        "Shared team inbox & collaboration tools",
        "Priority support",
      ],
      cta: "https://paystack.com/pay/PAYSTACK_LINK_EMAIL_GROWTH",
      tag: "Team favorite",
    },
    {
      id: "premium-email",
      title: "Premium Email",
      priceMonthly: 199,
      priceYearly: 1999,
      description: "Enterprise-grade secure email & productivity suite.",
      features: [
        "Unlimited custom business emails",
        "100GB mailbox storage per user",
        "AI-powered spam & phishing protection",
        "Video meetings & chat integration",
        "File storage & document collaboration",
        "Admin console with advanced controls",
        "24/7 priority SLA support",
      ],
      cta: "https://paystack.com/pay/PAYSTACK_LINK_EMAIL_PREMIUM",
      tag: "All-in enterprise",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 space-y-16">
     <main className="min-h-screen flex flex-col">
        {/* Hero */}
        <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-blue-50 to-white">
          <h2 className="text-4xl font-bold mb-4">
           Credible Communication{" "}
            <span className="text-blue-600">for Free</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mb-6">
           Branded email addresses that builds trust and authority{" "}
          
          </p>
          <a href="#contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contact Support
            </Button>
          </a>
        </section>
      </main>

      {/* Business Email Plans */}
      <div>
        <h2 className="text-3xl font-extrabold mb-8">Business Email Plans</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {emailPlans.map((plan) => {
            const isPremium = plan.id === "premium-email";
            const price = billing === "monthly" ? plan.priceMonthly : plan.priceYearly;

            return (
              <article key={plan.id} className={`relative rounded-2xl p-6 border ${isPremium ? "bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white shadow-2xl scale-105" : "bg-white"}`}>
                {isPremium && (
                  <div className="absolute -top-3 right-4 bg-indigo-400 text-slate-900 px-3 py-1 text-xs rounded-xl font-semibold">Premium</div>
                )}

                <header className="mb-4">
                  <h3 className={`text-xl font-bold ${isPremium ? "text-white" : "text-slate-900"}`}>{plan.title}</h3>
                  <p className={`text-sm mt-1 ${isPremium ? "text-indigo-100" : "text-slate-600"}`}>{plan.description}</p>
                </header>

                <div className="mb-6 flex items-baseline gap-3">
                  <span className={`text-3xl font-extrabold ${isPremium ? "text-white" : "text-slate-900"}`}>${price}</span>
                  <span className={`text-sm ${isPremium ? "text-indigo-100" : "text-slate-500"}`}>/ {billing === "monthly" ? "month" : "year"}</span>
                </div>

                <ul className="mb-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className={`text-sm leading-snug ${isPremium ? "text-indigo-50" : "text-slate-700"}`}>
                      • {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a href={plan.cta} className={`inline-block w-full text-center font-semibold py-3 rounded-lg ${isPremium ? "bg-indigo-400 text-slate-900 hover:bg-indigo-300" : "bg-slate-900 text-white hover:opacity-95"}`} data-plan-id={plan.id}>
                    Pay with Paystack
                  </a>

                  <div className="mt-4 text-xs text-slate-500">
                    <strong>Tag:</strong> <span className="ml-1">{plan.tag}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
