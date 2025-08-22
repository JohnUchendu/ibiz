"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function EcommercePlan() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  const plan = {
    id: "ecommerce-pro",
    title: "Ecommerce Pro",
    priceMonthly: 9_897,
    priceYearly: 199_897,
    description: "All-in-one online store for cafes, clothing brands & small businesses.",
    features: [
      "20 ready-to-use ecommerce templates + custom template option",
      "Unlimited products, categories & variations",
      "Secure online payment integration (Paystack & Flutterwave)",
      "Mobile-responsive design for all devices",
      "Inventory management & stock tracking",
      "Discounts, coupons, and gift card setup",
      "Shipping & tax configuration",
      "Customer accounts & order history",
      "Email notifications for orders & shipping",
      "Advanced SEO & meta tags for products",
      "Google Analytics & conversion tracking",
      "Blog & content management system",
      "Basic social media integration (Instagram, Facebook shop)",
      "Fast cloud hosting with SSL certificate",
      "Priority email support (3 months)",
      "Custom domain setup",
    ],
    cta: "https://paystack.shop/pay/-fthfp5xd1",
    tag: "Best for growing brands",
  };

  const price = billing === "monthly" ? plan.priceMonthly : plan.priceYearly;

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex items-center justify-center mb-6">
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

      <article className="relative rounded-2xl p-6 border bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white shadow-2xl">
        <div className="absolute -top-3 right-4 bg-amber-400 text-slate-900 px-3 py-1 text-xs rounded-xl font-semibold">
          Premium
        </div>

        <header className="mb-4 text-center">
          <h3 className="text-2xl font-bold">{plan.title}</h3>
          <p className="text-sm mt-1 text-amber-100">{plan.description}</p>
        </header>

        <div className="mb-6 flex items-baseline justify-center gap-3">
          <span className="text-3xl font-extrabold">₦{price.toLocaleString()}</span>
          <span className="text-sm text-amber-100">/ {billing === "monthly" ? "month" : "year"}</span>
        </div>

        <ul className="mb-6 space-y-2 text-amber-50">
          {plan.features.map((f) => (
            <li key={f} className="text-sm leading-snug">• {f}</li>
          ))}
        </ul>

        <div className="text-center mt-4">
          <a
            href={plan.cta}
            className="inline-block w-full md:w-auto text-center font-semibold py-3 px-6 rounded-lg bg-amber-400 text-slate-900 hover:bg-amber-300"
            data-plan-id={plan.id}
          >
           Get yours
          </a>
          <div className="mt-2 text-xs text-amber-100">
            <strong>Tag:</strong> {plan.tag}
          </div>
        </div>
      </article>
    </section>
  );
}
