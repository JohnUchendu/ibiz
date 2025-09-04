"use client";

import PromoBanner from "@/components/PromoBanner";
import PromoPopup from "@/components/PromoPopUp";
import TestimonialCarousel from "@/components/Testimonial";
import { useState } from "react";

export default function DomainChecker() {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | {
    available: boolean;
    domain: string;
  }>(null);

  const checkDomain = async () => {
    if (!domain) return;
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(`/api/check-domain?domain=${domain}`);
      const data = await res.json();

      if (data.error) {
        alert(data.error);
      } else {
        setResult({ available: data.available, domain: data.domain });
      }
    } catch (err) {
      console.error("Error checking domain", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-6">
          Claim your brand, protect your identity and secure digital real estate
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Check, secure, and own premium domains before someone else does.
        </p>

        {/* Input + Button */}
        <div className="max-w-lg mx-auto bg-white shadow rounded-2xl p-6 space-y-4">
          <input
            type="text"
            placeholder="Enter your domain (e.g. mybusiness.com)"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring focus:border-blue-400"
          />

          <button
            onClick={checkDomain}
            disabled={loading}
            className="w-full bg-blue-600 text-white font-medium px-4 py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Checking..." : "Check Availability"}
          </button>

          {result && (
            <div
              className={`p-4 rounded-lg text-center font-semibold ${
                result.available
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {result.available
                ? `🎉 Great news! ${result.domain} is available.`
                : `❌ Sorry, ${result.domain} is already taken.`}
            </div>
          )}
        </div>

        {/* ✅ Upsell CTA (only shows after check) */}
        {result && (
          <div className="mt-6 bg-white shadow-md rounded-xl p-5 border text-center">
            <p className="text-lg font-medium text-gray-800 mb-3">
              {result.available
                ? "You’ve already taken the first step — bring it to life with a professional business website."
                : "Even if your first choice is taken, you can still secure your online presence with a professional business website."}
            </p>
            <a
              href="/website" // 👈 link to your service page
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Launch your website today
            </a>
          </div>
        )}

        <TestimonialCarousel />
      </main>

      {/* Optional Promo Stuff */}
      {/* <PromoBanner /> */}
      {/* <PromoPopup /> */}
    </div>
  );
}
