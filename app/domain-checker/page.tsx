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
      // --- Replace this with a real API ---
      // Example using API Ninjas:
      // const res = await fetch(`/api/check-domain?domain=${domain}`);
      // const data = await res.json();

      await new Promise((r) => setTimeout(r, 1200)); // mock delay
      const available = Math.random() > 0.5; // mock result

      setResult({ available, domain });
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
        <TestimonialCarousel/>
      </main>
      <PromoBanner/>
      <PromoPopup/>
    </div>
  );
}
