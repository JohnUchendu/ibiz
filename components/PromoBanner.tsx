"use client";

import React from "react";
import { useRouter } from "next/navigation";

const PromoBanner: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8 my-6 text-center shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
        Build Your Online Presence Today!
      </h2>
      <p className="text-blue-800 mb-4 md:mb-6">
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
      <p className="mt-4 text-sm text-blue-700">
        Perfect for freelancers, online shops, and small businesses.
      </p>
    </div>
  );
};

export default PromoBanner;
