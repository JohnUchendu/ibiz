"use client";

import { useEffect } from "react";

export default function VisitorTracker() {
  useEffect(() => {
    let visitorId = localStorage.getItem("visitorId");

    // If no ID, generate and store in browser
    if (!visitorId) {
      visitorId = crypto.randomUUID();
      localStorage.setItem("visitorId", visitorId);
    }

    // Send to API
    fetch("/api/track-visitor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ visitorId }),
    });
  }, []);

  return null;
}
