// ## 3) UI — `app/seo-audit/page.tsx`

// ```tsx
// app/seo-audit/page.tsx
"use client";
import { useState } from "react";
import { z } from "zod";

const Schema = z.object({
  url: z.string().url("Enter a valid URL, e.g. https://example.com"),
});

type Check = {
  id: string;
  label: string;
  status: "pass" | "warn" | "fail";
  advice?: string;
  details?: any;
};

type Result = {
  ok: boolean;
  url: string;
  status: number;
  score: number;
  checks: Check[];
  summary: any;
};

export default function Page() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function runAudit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const parsed = Schema.safeParse({ url });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message || "Invalid URL");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/seo-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Audit failed");
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-6">
       Maximize visibility, data-driven growth.
      </h1>
      <p className="text-center text-gray-600 mb-8">
       Actionable SEO audits to grow your business reach and revenue
      </p>
      <div className="min-h-screen bg-neutral-50 text-neutral-900 p-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <header className="space-y-2">
            <h1 className="text-3xl font-bold">SEO Audit Tool</h1>
            <p className="text-sm text-neutral-600">
              Quick on-page & technical checks. Paste a URL and run.
            </p>
          </header>

          <form onSubmit={runAudit} className="flex gap-3">
            <input
              type="url"
              placeholder="https://your-site.com/page"
              className="flex-1 rounded-2xl border border-neutral-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-2xl px-5 py-3 bg-black text-white shadow disabled:opacity-60"
            >
              {loading ? "Auditing…" : "Run audit"}
            </button>
          </form>

          {error && (
            <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          {result && (
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-1 space-y-4">
                <div className="rounded-2xl bg-white p-4 shadow">
                  <div className="text-sm text-neutral-500">Overall score</div>
                  <div className="text-5xl font-extrabold">{result.score}</div>
                  <div className="text-xs text-neutral-500 mt-2">URL</div>
                  <div className="text-sm break-all">{result.url}</div>
                  <div className="text-xs text-neutral-500 mt-2">Status</div>
                  <div className="text-sm">{result.status}</div>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow space-y-2">
                  <h3 className="font-semibold">Key summary</h3>
                  <ul className="text-sm space-y-1">
                    <li>
                      <strong>Title:</strong> {result.summary.title || "—"}
                    </li>
                    <li>
                      <strong>Meta desc:</strong>{" "}
                      {result.summary.metaDesc || "—"}
                    </li>
                    <li>
                      <strong>Canonical:</strong>{" "}
                      {result.summary.canonical || "—"}
                    </li>
                    <li>
                      <strong>TTFB:</strong> {result.summary.ttfb} ms
                    </li>
                    <li>
                      <strong>Word count:</strong> {result.summary.wordCount}
                    </li>
                    <li>
                      <strong>Images alt:</strong>{" "}
                      {result.summary.images.total -
                        result.summary.images.missingAlt}
                      /{result.summary.images.total}
                    </li>
                    <li>
                      <strong>Links:</strong> {result.summary.links.total}{" "}
                      (nofollow {result.summary.links.nofollow})
                    </li>
                    <li>
                      <strong>robots.txt:</strong>{" "}
                      {result.summary.robotsOk ? "Yes" : "No"}
                    </li>
                    <li>
                      <strong>sitemap.xml:</strong>{" "}
                      {result.summary.sitemapOk ? "Yes" : "No"}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:col-span-2 space-y-4">
                <div className="rounded-2xl bg-white p-4 shadow">
                  <h3 className="font-semibold mb-2">Checks</h3>
                  <div className="divide-y">
                    {result.checks.map((c) => (
                      <div key={c.id} className="py-3 flex items-start gap-3">
                        <span
                          className={
                            {
                              pass: "inline-flex h-2 w-2 rounded-full bg-green-500 mt-2",
                              warn: "inline-flex h-2 w-2 rounded-full bg-yellow-500 mt-2",
                              fail: "inline-flex h-2 w-2 rounded-full bg-red-500 mt-2",
                            }[c.status]
                          }
                          aria-label={c.status}
                        />
                        <div>
                          <div className="font-medium">{c.label}</div>
                          {c.advice && (
                            <div className="text-sm text-neutral-600">
                              {c.advice}
                            </div>
                          )}
                          {c.details && (
                            <details className="text-xs text-neutral-500 mt-1">
                              <summary className="cursor-pointer">
                                Details
                              </summary>
                              <pre className="whitespace-pre-wrap break-all">
                                {JSON.stringify(c.details, null, 2)}
                              </pre>
                            </details>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow">
                  <h3 className="font-semibold mb-2">What next?</h3>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-neutral-700">
                    <li>
                      Fix fails first, then warnings that have the biggest
                      impact (titles, meta, H1, content, speed).
                    </li>
                    <li>
                      Add sitemap entries for all indexable pages and reference
                      it in robots.txt.
                    </li>
                    <li>
                      Implement caching, compression, and a CDN to improve TTFB
                      and asset delivery.
                    </li>
                    <li>
                      Consider adding Core Web Vitals monitoring (e.g.,
                      Lighthouse CI or RUM) in CI/CD.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
