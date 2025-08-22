// Place these snippets into your Next.js project.
// File A: app/speed-test/page.tsx  (Next.js App Router)

"use client";

import PromoBanner from "@/components/PromoBanner";
import PromoPopup from "@/components/PromoPopUp";
import React, { useState } from "react";

type Result = {
  url: string;
  status: number;
  ttfbMs: number;
  totalMs: number;
  sizeBytes: number;
  timestamp: string;
  error?: string;
};

export default function SpeedTestPage() {
  const [url, setUrl] = useState("https://");
  const [running, setRunning] = useState(false);
  const [results, setResults] = useState<Result[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function runTest(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    if (!url || !/^https?:\/\//i.test(url)) {
      setError("Enter a valid URL starting with http:// or https://");
      return;
    }
    setRunning(true);
    try {
      const res = await fetch("/api/speed-test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Server error");
      } else {
        const result: Result = {
          url,
          status: data.status,
          ttfbMs: Math.round(data.ttfbMs),
          totalMs: Math.round(data.totalMs),
          sizeBytes: data.sizeBytes,
          timestamp: new Date().toISOString(),
        };
        setResults((prev) => [result, ...prev].slice(0, 20));
      }
    } catch (err: any) {
      setError(err?.message || String(err));
    } finally {
      setRunning(false);
    }
  }

  function downloadCSV() {
    if (results.length === 0) return;
    const header = [
      "url",
      "status",
      "ttfbMs",
      "totalMs",
      "sizeBytes",
      "timestamp",
    ];
    const rows = results.map((r) =>
      [r.url, r.status, r.ttfbMs, r.totalMs, r.sizeBytes, r.timestamp].join(",")
    );
    const csv = [header.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const urlBlob = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = urlBlob;
    a.download = "speed-test-results.csv";
    a.click();
    URL.revokeObjectURL(urlBlob);
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Website Speed Test</h1>

      <form onSubmit={runTest} className="flex gap-2">
        <input
          className="flex-1 border rounded px-3 py-2"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
        />
        <button
          className="px-4 py-2 rounded bg-slate-800 text-white disabled:opacity-50"
          disabled={running}
        >
          {running ? "Testing..." : "Run Test"}
        </button>
      </form>

      {error && <div className="mt-3 text-red-600">{error}</div>}

      <section className="mt-6">
        <h2 className="font-semibold">Recent results</h2>
        <div className="mt-3 space-y-3">
          {results.length === 0 && (
            <div className="text-sm text-slate-600">
              No tests yet — try one above.
            </div>
          )}
          {results.map((r, idx) => (
            <div key={idx} className="p-3 border rounded">
              <div className="flex justify-between items-baseline">
                <div className="font-medium truncate max-w-[60%]">{r.url}</div>
                <div className="text-sm text-slate-500">
                  {new Date(r.timestamp).toLocaleString()}
                </div>
              </div>

              <div className="mt-2 grid grid-cols-3 gap-3 text-sm">
                <div>
                  <div className="text-xs text-slate-500">Status</div>
                  <div>{r.status}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">TTFB</div>
                  <div>{r.ttfbMs} ms</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Total</div>
                  <div>{r.totalMs} ms</div>
                </div>
              </div>

              <div className="mt-3">
                <div className="text-xs text-slate-500">Payload size</div>
                <div>{(r.sizeBytes / 1024).toFixed(2)} KB</div>
              </div>

              <div className="mt-3 h-3 bg-slate-100 rounded overflow-hidden">
                {/* Simple bar visual: totalMs influences width but capped for readability */}
                <div
                  style={{ width: Math.min(100, r.totalMs / 20) + "%" }}
                  className="h-full rounded bg-slate-700 transition-all"
                  title={`${r.totalMs} ms total`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <button
            className="px-3 py-2 border rounded"
            onClick={() => setResults([])}
          >
            Clear
          </button>
          <button
            className="px-3 py-2 border rounded"
            onClick={downloadCSV}
            disabled={results.length === 0}
          >
            Export CSV
          </button>
        </div>
      </section>
      {/* 
      <section className="mt-8 text-xs text-slate-500">
        <p>This tool runs the request on the server (via <code>/api/speed-test</code>) to avoid browser CORS limitations and to measure response timings such as TTFB and total download time.</p>
        <p className="mt-2">Server &amp; API implementation (place as <code>pages/api/speed-test.ts</code> or <code>app/api/speed-test/route.ts</code> depending on your Next.js setup). See the code block included below.</p>
      </section> */}

      <PromoBanner />
      <PromoPopup />
    </main>
  );
}

// NOTES & DEPLOYMENT
// 1) If you use Next.js App Router, create an API route at app/api/speed-test/route.ts following the same handler logic.
// 2) Server must have network egress enabled. On Vercel, keep an eye on cold-starts and execution time limits; consider using a small server (or an Edge function with shorter timeouts if you prefer).
// 3) This simple implementation measures TTFB (time until headers received) and total download time as seen by the server. For deeper Lighthouse-like metrics, integrate PageSpeed Insights API or run Puppeteer on the server to capture paint/layout metrics.
// 4) Security: in production, restrict which target hosts can be requested (avoid internal IP ranges), and rate-limit the endpoint.

// End of file
