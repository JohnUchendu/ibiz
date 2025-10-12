"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const packages = [
  {
    id: 1,
    name: "Launch Package",
    price: "₦100,000 – ₦300,000",
    description: "For small businesses and startups who want to go online fast.",
    features: [
      "1–3 page corporate website",
      "Business email setup (yourname@yourcompany.com)",
      "Basic SEO for Google visibility",
      "Access to free tools: Invoice Generator, QR Code, Receipt Maker",
      "Fast 5-day delivery",
      "1-month support",
    ],
    tagline: "We help you launch online — fast, simple, and branded to your name.",
    cta: "Start with Launch",
  },
  {
    id: 2,
    name: "Growth Automation Package",
    price: "₦400,000 – ₦1,500,000",
    description: "For growing businesses that need systems and marketing automation.",
    features: [
      "Corporate website + admin dashboard",
      "Client / Order management system",
      "Email marketing setup",
      "Advanced SEO optimization",
      "Access to premium tools: Invoice Generator, Receipt System, SEO Audit",
      "Analytics dashboard",
      "2-month priority support",
    ],
    tagline: "We connect your website, marketing, and automation — so your business runs while you sleep.",
    cta: "Scale with Growth",
  },
  {
    id: 3,
    name: "Enterprise Suite",
    price: "₦3M – ₦5.4M+",
    description: "For companies ready to transform into a full digital ecosystem.",
    features: [
      "Corporate website + e-commerce + admin dashboard",
      "Email marketing + automation workflows",
      "SEO strategy & content optimization",
      "Custom internal tools (Invoice / Receipt / SEO Audit / QR Generator)",
      "Performance analytics dashboard",
      "Dedicated technical support",
    ],
    tagline: "We turn your brand into a system — automated, measurable, and client-ready.",
    cta: "Go Enterprise",
  },
];

const Packages = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight"
        >
          iBiz Packages
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Build, automate & grow your business with flexible plans for every stage — 
          from launching your brand to scaling your systems.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white shadow-xl rounded-2xl p-8 text-left border hover:border-blue-600 transition"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {pkg.name}
              </h3>
              <p className="text-gray-900 font-bold mb-3">{pkg.price}</p>
              <p className="text-gray-700 mb-5">{pkg.description}</p>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">.</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm italic text-gray-500 mb-4">{pkg.tagline}</p>
             <Link href="mailto:info@ibiz.name.ng" >
              <button className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition">
                {pkg.cta}
              </button>
             </Link>
              
            </motion.div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto text-center">
          <h4 className="text-xl font-semibold mb-3">Add-Ons & Tools</h4>
          <p className="text-gray-600 mb-4">
            Need one tool? You can also order them individually.
          </p>
          <ul className="text-gray-700 space-y-1">
            <li>• Invoice Generator (₦30k – ₦100k)</li>
            <li>• SEO Audit Tool (₦50k – ₦250k)</li>
            <li>• QR Code Generator (₦20k – ₦50k)</li>
            <li>• Receipt Maker (₦30k – ₦70k)</li>
            <li>• Business Email Setup (₦25k – ₦90k)</li>
          </ul>
          <p className="mt-6 text-sm text-gray-500">
            Each tool is branded to your business and ready in less than 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Packages;
