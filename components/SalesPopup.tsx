"use client";

import { useEffect, useState } from "react";

interface SaleNotification {
  state: string;
  occupation: string;
  plan: "Website Starter" | "Business Email";
}

export default function SalePopup({ sale }: { sale: SaleNotification }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sale) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 4000); // Hide after 4s
      return () => clearTimeout(timer);
    }
  }, [sale]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg border border-gray-200 rounded-lg px-4 py-3 animate-slide-in">
      <p className="text-sm text-gray-800">
        🎉 Someone from <span className="font-semibold">{sale.state}</span> working as{" "}
        <span className="font-semibold">{sale.occupation}</span> just bought the{" "}
        <span className="font-semibold">{sale.plan}</span> plan!
      </p>
    </div>
  );
}
