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


"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function EcommercePlan() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  const plans = [
    {
      id: "starter",
      title: "Starter",
      priceMonthly: 9_897,
      priceYearly: 199_897,
      description:
        "Basic ecommerce website for small shops & individuals starting online.",
      features: [
        "10 ready-to-use ecommerce templates",
        "Add up to 100 products",
        "Secure online payment integration",
        "Inventory management & stock tracking",
        "Customer accounts & order history",
        "Email notifications for orders",
        "SEO & meta tags for products",
        "Google Analytics integration",
        "Social media integration (Instagram, Facebook)",
        "Custom domain setup (www.yourstore.com)",
      ],
      cta: "https://paystack.shop/pay/-fthfp5xd1",
      tag: "Best for SME's",
    },
    {
      id: "growth",
      title: "Growth",
      priceMonthly: 32_574, // double starter monthly
      priceYearly: 390_897, // double starter yearly
      description:
        "For growing businesses that need advanced tools & automation.",
      features: [
        // Starter features + 2 extra
        "10 ready-to-use ecommerce templates",
        "Add up to 100 products",
        "Secure online payment integration",
        "Inventory management & stock tracking",
        "Customer accounts & order history",
        "Email notifications for orders",
        "SEO & meta tags for products",
        "Google Analytics integration",
        "Social media integration (Instagram, Facebook)",
        "Custom domain setup (www.yourstore.com)",
        // Extra features
        "Discount codes & promo management",
        "Abandoned cart recovery",
      ],
      cta: "https://paystack.shop/pay/xx66olsqa4",
      tag: "Best for scaling",
    },
    {
      id: "pro",
      title: "Pro",
      priceMonthly: 207_574, // approx (2.5M / 12 months)
      priceYearly: 2_490_897,
      description:
        "Enterprise-grade online store with full customization & automation.",
      features: [
        "20+ premium ecommerce templates + custom design",
        "Unlimited products, categories & variations",
        "Multiple secure payment gateways",
        "Advanced inventory management & warehouse syncing",
        "Customer loyalty & referral program",
        "Automated email + SMS marketing campaigns",
        "AI-powered product recommendations",
        "Advanced SEO with schema markup",
        "Analytics dashboard & custom reports",
        "Multi-vendor support (marketplace setup)",
        "Mobile app integration (iOS & Android ready)",
        "24/7 live chat & priority support",
        "Custom domain & free SSL certificates",
        "Dedicated account manager",
      ],
      cta: "https://paystack.shop/pay/2mfonnc2wc",
      tag: "Best for enterprises",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Billing toggle */}
      <div className="flex items-center justify-center mb-10">
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

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => {
          const price =
            billing === "monthly" ? plan.priceMonthly : plan.priceYearly;

          return (
            <article
              key={plan.id}
              className="relative rounded-2xl p-6 border bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white shadow-2xl"
            >
              <div className="absolute -top-3 right-4 bg-amber-400 text-slate-900 px-3 py-1 text-xs rounded-xl font-semibold">
                {plan.tag}
              </div>

              <header className="mb-4 text-center">
                <h3 className="text-2xl font-bold">{plan.title}</h3>
                <p className="text-sm mt-1 text-amber-100">
                  {plan.description}
                </p>
              </header>

              <div className="mb-6 flex items-baseline justify-center gap-3">
                <span className="text-3xl font-extrabold">
                  ₦{price.toLocaleString()}
                </span>
                <span className="text-sm text-amber-100">
                  / {billing === "monthly" ? "month" : "year"}
                </span>
              </div>

              <ul className="mb-6 space-y-2 text-amber-50">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm leading-snug">
                    • {f}
                  </li>
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
              </div>
            </article>
          );
        })}
      </div>
{/* Contact */}
        <section id="contact" className="px-6 py-16 bg-gray-100 text-center">
          <h3 className="text-2xl font-bold mb-4">Contact Support</h3>
          <p className="text-gray-600 mb-6">
            Ready for your free website? Reach out to our support team now.
          </p>
          <a href="mailto:support@ibiz.name.ng" id="contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Email Us
            </Button>
          </a>
        </section>

    </section>
  );
}
