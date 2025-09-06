"use client";
import { useState, useEffect } from "react";

export default function NameResults({ names }: { names: string[] }) {
  const [availability, setAvailability] = useState<{ [key: string]: string }>({});

  async function checkDomain(name: string) {
    const res = await fetch(`/api/check-domain?domain=${name.toLowerCase()}.com`);
    const data = await res.json();
    setAvailability(prev => ({ ...prev, [name]: data?.registryData ? "Taken" : "Available" }));
  }

  useEffect(() => {
    names.forEach((n) => checkDomain(n));
  }, [names]);

  return (
    <div className="grid gap-3 mt-4">
      {names.map((name) => (
        <div key={name} className="p-4 border rounded flex justify-between items-center">
          <span>{name}.com</span>
          <span className={availability[name] === "Available" ? "text-green-600" : "text-red-600"}>
            {availability[name] || "Checking..."}
          </span>
          <button className="bg-black text-white px-3 py-1 rounded">Get Email</button>
          <button className="bg-blue-600 text-white px-3 py-1 rounded">Launch Website</button>
        </div>
      ))}
    </div>
  );
}
