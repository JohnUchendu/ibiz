// "use client";
// import { useState } from "react";

// export default function UptimeMonitor() {
//   const [status, setStatus] = useState("");

//   async function checkNow() {
//     const res = await fetch("/api/check-uptime");
//     const data = await res.json();
//     setStatus(data.status);
//   }

//   return (
//     <div className="p-8">
//       <h1 className="text-xl font-bold mb-4">Website Uptime Monitor</h1>
//       <button 
//         onClick={checkNow} 
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Run Check
//       </button>
//       <p className="mt-4">{status}</p>
//     </div>
//   );
// }


"use client";
import { useState } from "react";

export default function UptimeMonitor() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  async function checkNow() {
    const res = await fetch("/api/check-uptime", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, email }),
    });
    const data = await res.json();
    setStatus(data.message);
  }

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Website Uptime Monitor</h1>

      <input
        type="text"
        placeholder="Enter website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />

      <button
        onClick={checkNow}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Run Check
      </button>

      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}
