// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";

// export default function EcommercePlan() {
//   const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

//   const plan =

//     {
//       id: "Online-Store-starer",
//       title: "Online Store Starter",  
//       priceMonthly: 9_897,
//       priceYearly: 199_897,
//     description: "All-in-one online store for cafes, clothing brands & small businesses.",
//     features: [
//       "20 ready-to-use ecommerce templates + custom template option",
//       "Unlimited products, categories & variations",
//       "Secure online payment integration ",
//       "Inventory management & stock tracking",
//       "Customer accounts & order history",
//       "Email notifications for orders",
//       "Advanced SEO & meta tags for products",
//       "Google Analytics & conversion tracking",
//       "Social media integration (Instagram, Facebook)",
//       "Secure online store",
//      "Live chat, customer support",
//       "Custom domain setup (www.yourstore.com)",
//     ],
//     cta: "https://paystack.shop/pay/-fthfp5xd1",
//     tag: "Best for growing brands", 
//   };

//   const price = billing === "monthly" ? plan.priceMonthly : plan.priceYearly;

//   return (
//     <section className="max-w-4xl mx-auto px-6 py-12">
//       <div className="flex items-center justify-center mb-6">
//         <div className="flex items-center gap-3 bg-muted/50 p-1 rounded-full">
//           <span
//             className={`px-3 py-1 rounded-full cursor-pointer ${
//               billing === "monthly" ? "bg-white shadow" : ""
//             }`}
//             onClick={() => setBilling("monthly")}
//           >
//             Monthly
//           </span>
//           <span
//             className={`px-3 py-1 rounded-full cursor-pointer ${
//               billing === "yearly" ? "bg-white shadow" : ""
//             }`}
//             onClick={() => setBilling("yearly")}
//           >
//             Yearly
//           </span>
//         </div>
//       </div>

//       <article className="relative rounded-2xl p-6 border bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white shadow-2xl">
//         <div className="absolute -top-3 right-4 bg-amber-400 text-slate-900 px-3 py-1 text-xs rounded-xl font-semibold">
//           Premium
//         </div>

//         <header className="mb-4 text-center">
//           <h3 className="text-2xl font-bold">{plan.title}</h3>
//           <p className="text-sm mt-1 text-amber-100">{plan.description}</p>
//         </header>

//         <div className="mb-6 flex items-baseline justify-center gap-3">
//           <span className="text-3xl font-extrabold">₦{price.toLocaleString()}</span>
//           <span className="text-sm text-amber-100">/ {billing === "monthly" ? "month" : "year"}</span>
//         </div>

//         <ul className="mb-6 space-y-2 text-amber-50">
//           {plan.features.map((f) => (
//             <li key={f} className="text-sm leading-snug">• {f}</li>
//           ))}
//         </ul>

//         <div className="text-center mt-4">
//           <a
//             href={plan.cta}
//             className="inline-block w-full md:w-auto text-center font-semibold py-3 px-6 rounded-lg bg-amber-400 text-slate-900 hover:bg-amber-300"
//             data-plan-id={plan.id}
//           >
//            Get yours
//           </a>
//           <div className="mt-2 text-xs text-amber-100">
//             <strong>Tag:</strong> {plan.tag}
//           </div>
//         </div>
//       </article>
//     </section>
//   );
// }

import React from 'react';

const plans = [
  {
    id: "starter",
    title: "Starter",
    priceYearly: 199897,
    description: "Perfect for small shops starting an online store.",
    features: [
      "Secure SSL & hosting",
      "Mobile friendly online shop",
      "Simple dashboard to manage orders & products",
      "Up to 20 products",
      "Accept local payments (Paystack, flutterwave, Opay)",
      "Free Business email",
      "Ready-to-launch modern design",
    ],
    cta: "https://paystack.shop/pay/-fthfp5xd1",
    tag: "Best for Small Businesses",
  },
  {
    id: "growth",
    title: "Growth",
    priceYearly: 390897,
    description: "Recommended for businesses ready to grow online.",
    features: [
      "Everything in Starter Store",
      "Unlimited products",
      "Custom design to match your brand",
      "Advanced payment options",
      "Whatsapp chat integration",
      "SEO optimization",
      "Discount & coupon codes ",
      "Priority support ",
    ],
    cta: "https://paystack.shop/pay/xx66olsqa4",
    tag: "Recommended",
  },
  {
    id: "pro",
    title: "Pro",
    priceYearly: 2490897,
    description: "For established brands & serious scale",
    features: [
      "Everything in Growth Store",
      "Bespoke store design froms scratch",
      "Custom dashboard & reporting",
      "Multi-currency & international payments",
      "Advanced marketing integrations (email, social, remarketing)",
      "Dedicated support & maintenance",
      "Speed & security optimization",
    ],
    cta: "https://paystack.shop/pay/2mfonnc2wc",
    tag: "Best for Large Businesses",
  },
];

export default function Pricing() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className="relative rounded-2xl p-6 border bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white shadow-2xl"
          >
            <div className="absolute -top-3 right-4 bg-amber-400 text-slate-900 px-3 py-1 text-xs rounded-xl font-semibold">
              {plan.tag}
            </div>
            <header className="mb-4 text-center">
              <h3 className="text-2xl font-bold">{plan.title}</h3>
              <p className="text-sm mt-1 text-amber-100">{plan.description}</p>
            </header>
            <div className="mb-6 flex items-baseline justify-center gap-3">
              <span className="text-3xl font-extrabold">₦{plan.priceYearly.toLocaleString()}</span>
              <span className="text-sm text-amber-100">/ year</span>
            </div>
            <ul className="mb-6 space-y-2 text-amber-50">
              {plan.features.map((feature) => (
                <li key={feature} className="text-sm leading-snug">• {feature}</li>
              ))}
            </ul>
            <div className="text-center mt-4">
              <a
                href={plan.cta}
                className="inline-block w-full md:w-auto text-center font-semibold py-3 px-6 rounded-lg bg-amber-400 text-slate-900 hover:bg-amber-300"
                data-plan-id={plan.id}
              >
                Get Started
              </a>
            </div>
          </article>
        ))}
      </div>
      <section className="px-6 py-16 bg-gray-100 text-center">
        <h3 className="text-2xl font-bold mb-4">Contact Support</h3>
        <p className="text-gray-600 mb-6">Ready for your online store? Reach out to our support team.</p>
        <a
          href="mailto:support@ibiz.name.ng"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700"
        >
          Email Us
        </a>
      </section>
    </section>
  );
}