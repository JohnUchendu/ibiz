// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";

// export default function MarketingEmailPlans() {
//   const [contacts, setContacts] = useState<number>(1000);

//   const exchangeRate = 1550; // 1 USD = 1550 NGN

//   const marketingTiers = {
//     1000: {
//       title: "Starter Marketing",
//       features: [
//         "Yes Ticket Support",
//         "1 Audience",
//         "1 Domain",
//         "No Marketing Analytics",
//         "No Dedicated IPs",
//       ],
//       priceUSD: 40,
//       cta: "https://paystack.com/pay/dummy_1000",
//       tag: "Starter",
//     },
//     5000: {
//       title: "Pro Marketing",
//       features: [
//         "Slack & Ticket Support",
//         "Unlimited Audiences",
//         "Unlimited Domains",
//         "Marketing Analytics",
//         "No Dedicated IP (with add-on)",
//       ],
//       priceUSD: 150,
//       cta: "https://paystack.com/pay/dummy_5000",
//       tag: "Pro",
//     },
//     10000: {
//       title: "Pro Marketing",
//       features: [
//         "Slack & Ticket Support",
//         "Unlimited Audiences",
//         "Unlimited Domains",
//         "Marketing Analytics",
//         "No Dedicated IP (with add-on)",
//       ],
//       priceUSD: 80,
//       cta: "https://paystack.com/pay/dummy_10000",
//       tag: "Pro",
//     },
//     25000: {
//       title: "Pro Marketing",
//       features: [
//         "Slack & Ticket Support",
//         "Unlimited Audiences",
//         "Unlimited Domains",
//         "Marketing Analytics",
//         "No Dedicated IP (with add-on)",
//       ],
//       priceUSD: 180,
//       cta: "https://paystack.com/pay/dummy_25000",
//       tag: "Pro",
//     },
//     50000: {
//       title: "Pro Marketing",
//       features: [
//         "Slack & Ticket Support",
//         "Unlimited Audiences",
//         "Unlimited Domains",
//         "Marketing Analytics",
//         "No Dedicated IP (with add-on)",
//       ],
//       priceUSD: 250,
//       cta: "https://paystack.com/pay/dummy_50000",
//       tag: "Pro",
//     },
//     100000: {
//       title: "Pro Marketing",
//       features: [
//         "Slack & Ticket Support",
//         "Unlimited Audiences",
//         "Unlimited Domains",
//         "Marketing Analytics",
//         "No Dedicated IP (with add-on)",
//       ],
//       priceUSD: 450,
//       cta: "https://paystack.com/pay/dummy_100000",
//       tag: "Pro",
//     },
//     150000: {
//       title: "Pro Marketing",
//       features: [
//         "Slack & Ticket Support",
//         "Unlimited Audiences",
//         "Unlimited Domains",
//         "Marketing Analytics",
//         "No Dedicated IP (with add-on)",
//       ],
//       priceUSD: 650,
//       cta: "https://paystack.com/pay/dummy_150000",
//       tag: "Pro",
//     },
//     200000: {
//       title: "Enterprise Marketing",
//       features: [
//         "Priority Support",
//         "Unlimited Audiences",
//         "Unlimited Domains",
//         "Marketing Analytics",
//         "Dedicated IPs included",
//       ],
//       priceUSD: 0, // Custom pricing
//       cta: "https://paystack.com/pay/dummy_200000",
//       tag: "Enterprise",
//     },
//   };

//   const milestones = [1000, 5000, 10000, 25000, 50000, 100000, 150000, 200000];

//   const currentTier = marketingTiers[contacts];

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-12">
//       <h2 className="text-3xl font-extrabold mb-8 text-center">
//         Marketing Email Plans
//       </h2>

//       {/* Slider */}
//       <div className="mb-8">
//         <input
//           type="range"
//           min={0}
//           max={milestones.length - 1}
//           step={1}
//           value={milestones.indexOf(contacts)}
//           onChange={(e) => setContacts(milestones[parseInt(e.target.value)])}
//           className="w-full accent-purple-600"
//         />
//         <div className="flex justify-between text-sm mt-2">
//           {milestones.map((m) => (
//             <span
//               key={m}
//               className={`${
//                 m === contacts ? "font-bold text-purple-700" : "text-gray-400"
//               }`}
//             >
//               {m.toLocaleString()}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Cards */}
//       <div className="grid gap-6 md:grid-cols-3">
//         {/* Starter 1000 */}
//         <article className="rounded-2xl p-6 border bg-white">
//           <header className="mb-4">
//             <h3 className="text-xl font-bold">{marketingTiers[1000].title}</h3>
//           </header>

//           <div className="mb-6 flex items-baseline gap-3">
//             <span className="text-3xl font-extrabold">
//               ₦{(marketingTiers[1000].priceUSD * exchangeRate).toLocaleString()}
//             </span>
//             <span className="text-sm">/ per month</span>
//           </div>

//           <ul className="mb-6 space-y-3 text-sm text-slate-700">
//             {marketingTiers[1000].features.map((f) => (
//               <li key={f}>• {f}</li>
//             ))}
//           </ul>

//           <a
//             href={marketingTiers[1000].cta}
//             className="inline-block w-full text-center font-semibold py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
//           >
//             Pay ₦{(marketingTiers[1000].priceUSD * exchangeRate).toLocaleString()}
//           </a>
//         </article>

//         {/* Pro Marketing 5000-150000 */}
//         <article className="rounded-2xl p-6 border bg-white">
//           <header className="mb-4">
//             <h3 className="text-xl font-bold">{currentTier.title}</h3>
//           </header>

//           <div className="mb-6 flex items-baseline gap-3">
//             <span className="text-3xl font-extrabold">
//               {currentTier.priceUSD
//                 ? `₦${(currentTier.priceUSD * exchangeRate).toLocaleString()}`
//                 : "Custom"}
//             </span>
//             <span className="text-sm">/ per year</span>
//           </div>

//           <ul className="mb-6 space-y-3 text-sm text-slate-700">
//             {currentTier.features.map((f) => (
//               <li key={f}>• {f}</li>
//             ))}
//           </ul>

//           <a
//             href={currentTier.cta}
//             className="inline-block w-full text-center font-semibold py-3 rounded-lg bg-purple-500 text-white hover:bg-purple-600"
//           >
//             {currentTier.priceUSD
//               ? `Pay ₦${(currentTier.priceUSD * exchangeRate).toLocaleString()}`
//               : "Contact for Pricing"}
//           </a>
//         </article>

//         {/* Enterprise 200000 */}
//         <article className="rounded-2xl p-6 border bg-white">
//           <header className="mb-4">
//             <h3 className="text-xl font-bold">
//               {marketingTiers[200000].title}
//             </h3>
//           </header>

//           <div className="mb-6 flex items-baseline gap-3">
//             <span className="text-3xl font-extrabold">Custom</span>
//             <span className="text-sm">/ per year</span>
//           </div>

//           <ul className="mb-6 space-y-3 text-sm text-slate-700">
//             {marketingTiers[200000].features.map((f) => (
//               <li key={f}>• {f}</li>
//             ))}
//           </ul>

//           <a
//             href={marketingTiers[200000].cta}
//             className="inline-block w-full text-center font-semibold py-3 rounded-lg bg-purple-400 text-white hover:bg-purple-500"
//           >
//             Contact for Pricing
//           </a>
//         </article>
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function MarketingEmailPlans() {
  const [contacts, setContacts] = useState<number>(1000);
  const exchangeRate = 1500; // 1 USD = 1500 NGN

  const marketingTiers = {
    1000: {
      title: "Starter Marketing",
      features: [
        "Simple Ticket Support",
        "1 basic customer list",
        "Send from your own brand - 1 domain",
        "No Marketing Analytics",
        "Shared sending system",
      ],
      priceUSD: 11,
      cta: "https://paystack.com/pay/dummy_1000",
      tag: "Starter",
    },
    5000: {
      title: "Pro Marketing",
      features: [
        "Priority Ticket Support",
        "Unlimited Audiences",
        "Unlimited Domains",
        "Marketing Analytics",
        "No Dedicated IP (with add-on)",
      ],
      priceUSD: 40,
      cta: "https://paystack.com/pay/dummy_5000",
      tag: "Pro",
    },
    10000: {
      title: "Pro Marketing",
      features: [
       "Priority Ticket Support",
        "Unlimited Audiences",
        "Unlimited Domains",
        "Marketing Analytics",
        "No Dedicated IP (with add-on)",
      ],
      priceUSD: 80,
      cta: "https://paystack.com/pay/dummy_10000",
      tag: "Pro",
    },
    25000: {
      title: "Pro Marketing",
      features: [
       "Priority Ticket Support",
        "Unlimited Audiences",
        "Unlimited Domains",
        "Marketing Analytics",
        "No Dedicated IP (with add-on)",
      ],
      priceUSD: 180,
      cta: "https://paystack.com/pay/dummy_25000",
      tag: "Pro",
    },
    50000: {
      title: "Pro Marketing",
      features: [
       "Priority Ticket Support",
        "Unlimited Audiences",
        "Unlimited Domains",
        "Marketing Analytics",
        "No Dedicated IP (with add-on)",
      ],
      priceUSD: 250,
      cta: "https://paystack.com/pay/dummy_50000",
      tag: "Pro",
    },
    100000: {
      title: "Pro Marketing",
      features: [
        "Priority Ticket Support",
        "Unlimited Audiences",
        "Unlimited Domains",
        "Marketing Analytics",
        "No Dedicated IP (with add-on)",
      ],
      priceUSD: 450,
      cta: "https://paystack.com/pay/dummy_100000",
      tag: "Pro",
    },
    150000: {
      title: "Pro Marketing",
      features: [
       "Priority Ticket Support",
        "Unlimited Audiences",
        "Unlimited Domains",
        "Marketing Analytics",
        "No Dedicated IP (with add-on)",
      ],
      priceUSD: 650,
      cta: "https://paystack.com/pay/dummy_150000",
      tag: "Pro",
    },
    200000: {
      title: "Enterprise Marketing",
      features: [
        "Priority Ticket Support",
        "Unlimited Audiences",
        "Unlimited Domains",
        "Marketing Analytics",
        "No Dedicated IP (with add-on)",
      ],
      priceUSD: 0, // Custom pricing
      cta: "https://paystack.com/pay/dummy_200000",
      tag: "Enterprise",
    },
  };

  const milestones = [
    1000, 5000, 10000, 25000, 50000, 100000, 150000, 200000,
  ];

  const getTier = (tier: number) =>
    marketingTiers[tier as keyof typeof marketingTiers];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-extrabold mb-8 text-center">
        Marketing Email Plans<span className="text-xs">Contacts per plan</span>
      </h2>


      {/* Slider */}
      <div className="mb-8">
        <input
          type="range"
          min={0}
          max={milestones.length - 1}
          step={1}
          value={milestones.indexOf(contacts)}
          onChange={(e) =>
            setContacts(milestones[parseInt(e.target.value)])
          }
          className="w-full accent-slate-900 "
        />
        <div className="flex justify-between text-sm mt-2">
          {milestones.map((m) => (
            <span
              key={m}
              className={`${
                m === contacts ? "font-bold text-slate-900" : "text-gray-400"
              } text-[7.5px] md:text-2x`}
            >
              {m.toLocaleString()}
            </span>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Starter */}
        <Card tier={getTier(1000)} exchangeRate={exchangeRate} />
        {/* Pro Marketing */}
        <Card tier={getTier(contacts >= 5000 && contacts <= 150000 ? contacts : 5000)} exchangeRate={exchangeRate} />
        {/* Enterprise */}
        <Card tier={getTier(200000)} exchangeRate={exchangeRate} />
      </div>
    </section>
  );
}

function Card({
  tier,
  exchangeRate,
}: {
  tier: { title: string; features: string[]; priceUSD: number; cta: string; tag: string };
  exchangeRate: number;
}) {
  return (
    <article className="rounded-2xl p-6 border bg-white">
      <header className="mb-4">
        <h3 className="text-xl font-bold">{tier.title}</h3>
      </header>

      <div className="mb-6 flex items-baseline gap-3">
        <span className="text-3xl font-extrabold">
          {tier.priceUSD
            ? `₦${(tier.priceUSD * exchangeRate).toLocaleString()}`
            : "Custom"}
        </span>
        <span className="text-sm">{tier.priceUSD ? "/ per month" : ""}</span>
      </div>

      <ul className="mb-6 space-y-3 text-sm text-slate-700">
        {tier.features.map((f: string) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>

      <a
        href={tier.cta}
        className="inline-block w-full text-center font-semibold py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800"
      >
        {tier.priceUSD
          ? `Get yours `
        //   ? `Get yours ₦${(tier.priceUSD * exchangeRate).toLocaleString()}`
          : "Contact for Pricing"}
      </a>
    </article>
  );
}
