"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const PromoPopup: React.FC = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  // Show popup 15 seconds after page load
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 90000099000);
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-md w-full relative animate-fadeIn">
        {/* Close button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2 text-center">
          Build Your Online Presence Today!
        </h2>
        <p className="text-blue-800 mb-4 text-center">
          Freelancers, businesses, and shops can now get a professional website and business email in minutes.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={() => router.push("/website-builder")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Build a Website
          </button>
          <button
            onClick={() => router.push("/business-email")}
            className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Get Business Email
          </button>
        </div>

        <p className="mt-4 text-sm text-blue-700 text-center">
          Perfect for freelancers, online shops, and small businesses.
        </p>
      </div>
    </div>
  );
};

export default PromoPopup;
