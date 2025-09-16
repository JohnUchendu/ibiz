
// import React from 'react';

// const plans = [
//   {
//     id: "starter",
//     title: "Starter",
//     priceYearly: 148997,
//     description: "Perfect for new businesses starting online.",
//     features: [
//       "Up to 5 website pages",
//       "Ready-to-use design template",
//       "Works on mobile and desktop",
//       "Basic SEO tools",
//       "Free .com.ng domain",
//       "Contact form and Google Maps",
//       "Email support",
//     ],
//     cta: "https://paystack.shop/pay/4eb06jjya1",
//     tag: "Most Affordable",
//   },
//   {
//     id: "growth",
//     title: "Growth",
//     priceYearly: 389997,
//     description: "Great for growing businesses needing more features.",
//     features: [
//       "Up to 50 website pages",
//       "Ready-to-use design template",
//       "Works on mobile and desktop",
//       "Advanced SEO tools",
//       "Free .com.ng domain",
//       "Contact form and Google Maps",
//       "Email support",
//       "Connect to Google Analytics",
//       "Accept payments online",
//       "2 months priority support",
//     ],
//     cta: "https://paystack.shop/pay/qr7h68pw54",
//     tag: "Best Value",
//   },
//   {
//     id: "premium",
//     title: "Premium",
//     priceYearly: 1999997,
//     description: "Advanced features for large businesses.",
//     features: [
//       "Unlimited website pages",
//       "Custom website design",
//       "Full brand identity (logo, colors, fonts)",
//       "Online store with unlimited products",
//       "Advanced SEO and marketing tools",
//       "Connect to Google Analytics",
//       "Accept payments online",
//       "CRM integration (e.g., HubSpot, Zoho)",
//       "Automated email marketing",
//       "High-speed hosting and security",
//       "24/7 priority support",
//       "Dedicated account manager",
//       "Custom mobile app",
//       "Training for your team",
//     ],
//     cta: "https://paystack.shop/pay/a6w2rjbrt6",
//     tag: "Best for Enterprises",
//   },
// ];

// export default function PricingPlans() {
//   return (
//     <>
//       <section className="max-w-7xl mx-auto px-6 py-12">
//         <main className="min-h-screen flex flex-col">
//           <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-blue-50 to-white">
//             <h2 className="text-4xl font-bold mb-4">
//               Launch Your Professional Website
//               <span className="text-blue-600"> for Free</span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mb-6">
//               Build a stunning website with our expert support.
//             </p>
//             <a href="#contact">
//               <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700">
//                 Contact Support
//               </button>
//             </a>
//           </section>
//         </main>

//         <div className="mb-8">
//           <h2 className="text-3xl font-extrabold">Pricing Plans</h2>
//           <p className="mt-1 text-gray-500">
//             Choose a plan that fits your needs — all plans are fast and SEO-friendly.
//           </p>
//         </div>

//         <div className="grid gap-6 md:grid-cols-3">
//           {plans.map((plan) => {
//             const isPremium = plan.id === "premium";
//             return (
//               <article
//                 key={plan.id}
//                 className={`relative rounded-2xl p-6 border ${
//                   isPremium
//                     ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white shadow-2xl scale-105"
//                     : "bg-white"
//                 }`}
//               >
//                 {isPremium && (
//                   <div className="absolute -top-3 right-4 bg-amber-500 text-slate-900 px-3 py-1 text-xs rounded-xl font-semibold">
//                     Premium
//                   </div>
//                 )}
//                 <header className="mb-4">
//                   <h3
//                     className={`text-xl font-bold ${
//                       isPremium ? "text-white" : "text-slate-900"
//                     }`}
//                   >
//                     {plan.title}
//                   </h3>
//                   <p
//                     className={`text-sm mt-1 ${
//                       isPremium ? "text-amber-100" : "text-slate-600"
//                     }`}
//                   >
//                     {plan.description}
//                   </p>
//                 </header>
//                 <div className="mb-6 flex items-baseline gap-3">
//                   <span
//                     className={`text-3xl font-extrabold ${
//                       isPremium ? "text-white" : "text-slate-900"
//                     }`}
//                   >
//                     ₦{plan.priceYearly.toLocaleString()}
//                   </span>
//                   <span
//                     className={`text-sm ${
//                       isPremium ? "text-amber-100" : "text-slate-500"
//                     }`}
//                   >
//                     / year
//                   </span>
//                 </div>
//                 <ul className="mb-6 space-y-3">
//                   {plan.features.map((feature) => (
//                     <li
//                       key={feature}
//                       className={`text-sm leading-snug ${
//                         isPremium ? "text-amber-50" : "text-slate-700"
//                       }`}
//                     >
//                       • {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="mt-auto">
//                   <a
//                     href={plan.cta}
//                     className={`inline-block w-full text-center font-semibold py-3 rounded-lg ${
//                       isPremium
//                         ? "bg-amber-400 text-slate-900 hover:bg-amber-300"
//                         : "bg-slate-900 text-white hover:opacity-95"
//                     }`}
//                     data-plan-id={plan.id}
//                   >
//                     Get Started
//                   </a>
//                   <div className="mt-4 text-xs text-slate-500">
//                     <strong>Tag:</strong> <span className="ml-1">{plan.tag}</span>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>

//         <section id="contact" className="px-6 py-16 bg-gray-100 text-center">
//           <h3 className="text-2xl font-bold mb-4">Contact Support</h3>
//           <p className="text-gray-600 mb-6">
//             Ready to start your website? Contact our support team today.
//           </p>
//           <a href="mailto:support@ibiz.name.ng">
//             <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700">
//               Email Us
//             </button>
//           </a>
//         </section>

//         <div className="mt-12 text-center text-sm text-gray-500">
//           Trusted by startups & small businesses — 24/7 support included
//         </div>
//       </section>
//     </>
//   );
// }


import TestimonialCarousel from '@/components/Testimonial';
import React from 'react';

const plans = [
  {
    id: "starter",
    title: "Starter",
    priceYearly: 148997,
    description: "Perfect for new businesses starting online.",
    features: [
      "5-page website",
      "Professional design template",
      "Mobile-friendly",
      "Basic SEO setup",
      "Free .com.ng domain",
    ],
    cta: "https://paystack.shop/pay/4eb06jjya1",
    tag: "Most Affordable",
  },
  {
    id: "growth",
    title: "Growth",
    priceYearly: 389997,
    description: "Great for businesses ready to grow online.",
    features: [
      "Up to 20 pages",
      "Professional design template",
      "Mobile-friendly",
      "Advanced SEO tools",
      "Free .com.ng domain",
      "Online payments",
      "Priority support",
    ],
    cta: "https://paystack.shop/pay/qr7h68pw54",
    tag: "Best Value",
  },
  {
    id: "premium",
    title: "Premium",
    priceYearly: 1999997,
    description: "Advanced solution for large businesses.",
    features: [
      "Unlimited pages",
      "Custom website design",
      "Online store setup",
      "Advanced SEO & marketing",
      "Free domain & hosting",
      "24/7 priority support",
      "Dedicated account manager",
      "Custom mobile app (basic iOS & Andriod wrapper for your site)",
    ],
    cta: "https://paystack.shop/pay/a6w2rjbrt6",
    tag: "Best for Enterprises",
  },
];

export default function PricingPlans() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <main className="min-h-screen flex flex-col">
          <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-blue-50 to-white">
            <h2 className="text-4xl font-bold mb-4">
              Launch Your Professional Website
              <span className="text-blue-600"> for Free</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mb-6">
              Build a stunning website with our expert support.
            </p>
            <a href="#contact">
              <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700">
                Contact Support
              </button>
            </a>
          </section>
        </main>

        <div className="mb-8">
          <h2 className="text-3xl font-extrabold">Pricing Plans</h2>
          <p className="mt-1 text-gray-500">
            Choose a plan that fits your needs — all plans are fast and SEO-friendly.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const isPremium = plan.id === "premium";
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
                    ₦{plan.priceYearly.toLocaleString()}
                  </span>
                  <span
                    className={`text-sm ${
                      isPremium ? "text-amber-100" : "text-slate-500"
                    }`}
                  >
                    / year
                  </span>
                </div>
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`text-sm leading-snug ${
                        isPremium ? "text-amber-50" : "text-slate-700"
                      }`}
                    >
                      • {feature}
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
                    Get Started
                  </a>
                  <div className="mt-4 text-xs text-slate-500">
                    <strong>Tag:</strong> <span className="ml-1">{plan.tag}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <section id="contact" className="px-6 py-16 bg-gray-100 text-center">
          <h3 className="text-2xl font-bold mb-4">Contact Support</h3>
          <p className="text-gray-600 mb-6">
            Ready to start your website? Contact our support team today.
          </p>
          <a href="mailto:support@ibiz.name.ng">
            <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700">
              Email Us
            </button>
          </a>
        </section>

        <div className="mt-12 text-center text-sm text-gray-500">
          Trusted by startups & businesses — 24/7 support included
        </div>
        <TestimonialCarousel />
      </section>
    </>
  );
}