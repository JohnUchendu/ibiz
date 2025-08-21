// # SEO Audit Tool – Next.js (App Router)

// A production-ready starter that audits a URL for on-page SEO and basic technical SEO. It includes:

// * API endpoint: `app/api/seo-audit/route.ts` (server—no CORS issues)
// * UI page: `app/seo-audit/page.tsx` (form + results)
// * Checks: title & meta description lengths, canonical, robots meta, headings map, image alts, links, Open Graph/Twitter tags, structured data, hreflang, HTTP vs HTTPS, status code, TTFB, page size, robots.txt & sitemap.xml presence, security headers, and basic duplicate content signals.
// * Output: a normalized score (0–100), pass/warn/fail per rule, and actionable tips.

// ## 1) Install deps

// ```bash
// pnpm add zod cheerio lodash.escape
// # or: npm i zod cheerio lodash.escape
// ```

// > Uses native `fetch` on the server. No extra HTTP client needed.

// ---

// ## 2) API — `app/api/seo-audit/route.ts`


// app/api/seo-audit/route.ts


import { NextResponse } from "next/server";
import * as cheerio from "cheerio";
import { z } from "zod";

const Input = z.object({ url: z.string().url() });

// Helper: safe fetch with timing
async function timedFetch(url: string, init?: RequestInit) {
  const start = Date.now();
  const res = await fetch(url, { redirect: "follow", ...init });
  const ttfb = Date.now() - start; // ms to first byte (approx)
  return { res, ttfb } as const;
}

function truncate(str: string, n = 300) {
  return str.length > n ? str.slice(0, n) + "…" : str;
}

function lengthScore(val: number, min: number, max: number) {
  if (val === 0) return 0;
  if (val >= min && val <= max) return 1;
  // distance-based soft penalty
  const over = Math.min(Math.abs(val - (val < min ? min : max)) / max, 1);
  return Math.max(0, 1 - over);
}

function passWarnFail(ok: boolean | number, warn = false) {
  if (typeof ok === "number") {
    return ok >= 0.8 ? "pass" : ok >= 0.5 ? "warn" : "fail";
  }
  return ok ? "pass" : warn ? "warn" : "fail";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { url } = Input.parse(body);

    // Normalize URL
    const u = new URL(url);
    if (!u.protocol.startsWith("http")) u.protocol = "https:";

    // Fetch page
    const { res, ttfb } = await timedFetch(u.toString(), {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; SEOAuditBot/1.0; +https://example.com/bot)",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      // Avoid caching between runs during dev
      cache: "no-store",
    });

    const status = res.status;
    const headers = Object.fromEntries(res.headers.entries());
    const isHtml = (headers["content-type"] || "").includes("text/html");

    let html = "";
    if (isHtml) html = await res.text();

    // Pull first 200KB to estimate size if streaming; here content-length may exist
    const contentLength = Number(headers["content-length"]) || html.length;

    // Load DOM
    const $ = cheerio.load(html || "");

    // METADATA
    const title = truncate($("title").first().text().trim(), 1000);
    const metaDesc = $("meta[name='description']").attr("content")?.trim() || "";
    const robotsMeta = $("meta[name='robots']").attr("content")?.toLowerCase() || "";
    const canonical = $("link[rel='canonical']").attr("href") || "";

    // SOCIAL TAGS
    const ogTitle = $("meta[property='og:title']").attr("content") || "";
    const ogDesc = $("meta[property='og:description']").attr("content") || "";
    const ogImage = $("meta[property='og:image']").attr("content") || "";
    const twCard = $("meta[name='twitter:card']").attr("content") || "";

    // HEADINGS
    const h1 = $("h1").map((_, el) => $(el).text().trim()).get();
    const headings = ["h1","h2","h3","h4","h5","h6"].map(tag => ({
      tag,
      items: $(tag).map((_, el) => $(el).text().trim()).get(),
    }));

    // LINKS & IMAGES
    const links = $("a[href]").map((_, el) => ({
      href: $(el).attr("href") || "",
      rel: ($(el).attr("rel") || "").toLowerCase(),
      text: $(el).text().trim(),
    })).get();

    const imgs = $("img").map((_, el) => ({
      src: $(el).attr("src") || "",
      alt: $(el).attr("alt") || "",
    })).get();

    // STRUCTURED DATA
    const ldJsonBlocks = $("script[type='application/ld+json']").map((_, el) => $(el).text()).get();

    // HREFLANG
    const hreflangs = $("link[rel='alternate'][hreflang]")
      .map((_, el) => ({ hreflang: $(el).attr("hreflang"), href: $(el).attr("href") }))
      .get();

    // BASIC CONTENT MEASURES
    const textContent = $("body").text().replace(/\s+/g, " ").trim();
    const wordCount = textContent ? textContent.split(/\s+/).length : 0;

    // SECURITY HEADERS
    const securityHeaders = [
      "content-security-policy",
      "x-content-type-options",
      "x-frame-options",
      "referrer-policy",
      "strict-transport-security",
      "permissions-policy",
    ].reduce((acc, h) => ({ ...acc, [h]: headers[h] || "" }), {} as Record<string,string>);

    // robots.txt & sitemap.xml
    const origin = `${u.protocol}//${u.host}`;
    const robotsUrl = `${origin}/robots.txt`;
    const sitemapUrl = `${origin}/sitemap.xml`;

    const [robotsRes, sitemapRes] = await Promise.all([
      fetch(robotsUrl, { cache: "no-store" }).catch(() => null),
      fetch(sitemapUrl, { cache: "no-store" }).catch(() => null),
    ]);

    const robotsOk = !!robotsRes && robotsRes.ok;
    const sitemapOk = !!sitemapRes && sitemapRes.ok;

    // Scoring
    const checks: Array<{ id: string; label: string; status: "pass"|"warn"|"fail"; details?: any; advice?: string; weight: number; }> = [];

    function addCheck(id: string, label: string, ok: boolean | number, advice: string, details?: any, weight = 1) {
      checks.push({ id, label, status: passWarnFail(ok), advice, details, weight });
    }

    addCheck(
      "status",
      `HTTP status ${status}`,
      status >= 200 && status < 300 ? 1 : status >= 300 && status < 400 ? 0.6 : 0,
      "Ensure the page returns 200 OK and avoid unnecessary redirects.",
      { status }
    );

    addCheck(
      "https",
      "HTTPS in use",
      u.protocol === "https:",
      "Serve the site over HTTPS and redirect all HTTP to HTTPS.",
      { protocol: u.protocol }
    );

    addCheck(
      "title",
      `Title length (${title.length})`,
      lengthScore(title.length, 30, 60),
      "Aim for a descriptive, unique title of roughly 30–60 characters.",
      { title }
    );

    addCheck(
      "meta_description",
      `Meta description length (${metaDesc.length})`,
      lengthScore(metaDesc.length, 70, 160),
      "Write a compelling meta description around 70–160 characters.",
      { metaDesc }
    );

    addCheck(
      "canonical",
      "Canonical link present",
      !!canonical,
      "Add <link rel=\"canonical\"> to define the preferred URL and prevent duplicates.",
      { canonical }
    );

    addCheck(
      "robots_meta",
      "Robots meta allows indexing",
      !(robotsMeta.includes("noindex") || robotsMeta.includes("nofollow")),
      "Remove unintended noindex/nofollow directives on indexable pages.",
      { robotsMeta }
    );

    addCheck(
      "h1_count",
      `Single H1 (${h1.length})`,
      h1.length === 1 ? 1 : h1.length === 0 ? 0 : 0.5,
      "Use exactly one clear H1 per page.",
      { h1 }
    );

    const imgsMissingAlt = imgs.filter(i => !i.alt?.trim()).length;
    addCheck(
      "img_alt",
      `Images with alt text (${imgs.length - imgsMissingAlt}/${imgs.length})`,
      imgs.length === 0 ? 1 : (imgs.length - imgsMissingAlt) / Math.max(imgs.length, 1),
      "Provide descriptive alt text for images to aid accessibility and SEO.",
      { imgsMissingAlt, total: imgs.length }
    );

    const nofollowLinks = links.filter(l => l.rel.includes("nofollow")).length;
    addCheck(
      "links",
      `Links total (${links.length}) & rel usage`,
      links.length > 0 ? 1 : 0.4,
      "Ensure internal linking is present. Use rel=nofollow for untrusted external links.",
      { total: links.length, nofollow: nofollowLinks }
    );

    addCheck(
      "og_tags",
      "Open Graph tags present",
      !!ogTitle && !!ogDesc,
      "Add og:title and og:description for better social sharing.",
      { ogTitle, ogDesc, ogImage }
    );

    addCheck(
      "twitter_tags",
      "Twitter card tag present",
      !!twCard,
      "Add <meta name=\"twitter:card\" content=\"summary_large_image\">.",
      { twCard }
    );

    addCheck(
      "structured_data",
      "Structured data (LD+JSON)",
      ldJsonBlocks.length > 0,
      "Include relevant schema.org structured data for rich results.",
      { blocks: ldJsonBlocks.length }
    );

    addCheck(
      "hreflang",
      "Hreflang tags (if multilingual)",
      hreflangs.length > 0 ? 1 : 0.6,
      "Add hreflang annotations for language/region variants.",
      { hreflangs }
    );

    addCheck(
      "word_count",
      `Body word count (${wordCount})`,
      wordCount >= 300 ? (wordCount >= 800 ? 1 : 0.8) : wordCount === 0 ? 0 : 0.4,
      "Ensure sufficient, original content that satisfies search intent.",
      { wordCount }
    );

    addCheck(
      "ttfb",
      `TTFB ~${ttfb}ms`,
      ttfb < 600 ? (ttfb < 300 ? 1 : 0.8) : 0.4,
      "Speed up server response (TTFB < 300–600ms). Use caching/CDN.",
      { ttfb }
    );

    addCheck(
      "page_size",
      `Approx page size (${contentLength} bytes)`,
      contentLength <= 150_000 ? 1 : contentLength <= 600_000 ? 0.7 : 0.3,
      "Keep critical HTML small; defer heavy assets.",
      { contentLength }
    );

    addCheck(
      "robots_txt",
      "robots.txt available",
      robotsOk,
      "Provide a robots.txt at /robots.txt to control crawler access.",
      { robotsUrl, ok: robotsOk }
    );

    addCheck(
      "sitemap_xml",
      "sitemap.xml available",
      sitemapOk,
      "Expose an XML sitemap and reference it in robots.txt.",
      { sitemapUrl, ok: sitemapOk }
    );

    const secHdrScore = Object.values(securityHeaders).filter(Boolean).length / 6;
    addCheck(
      "security_headers",
      "Security headers set",
      secHdrScore,
      "Set CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.",
      { securityHeaders }
    );

    // Duplicate content hint (very rough): identical og:title & <title>, og:desc & meta desc
    const dupSignals = [
      ogTitle && title && ogTitle.trim() === title.trim(),
      ogDesc && metaDesc && ogDesc.trim() === metaDesc.trim(),
    ].filter(Boolean).length;
    addCheck(
      "dup_signals",
      "Duplicate meta signals",
      dupSignals === 0 ? 1 : dupSignals === 1 ? 0.7 : 0.4,
      "Vary Open Graph vs HTML meta to avoid redundancy.",
      { dupSignals }
    );

    // Score
    const totalWeight = checks.reduce((s, c) => s + c.weight, 0);
    const raw = checks.reduce((s, c) => s + (c.status === "pass" ? 1 : c.status === "warn" ? 0.6 : 0.2) * c.weight, 0);
    const score = Math.round((raw / totalWeight) * 100);

    return NextResponse.json({
      ok: true,
      url: u.toString(),
      status,
      isHtml,
      headers,
      score,
      summary: {
        title,
        metaDesc,
        robotsMeta,
        canonical,
        ogTitle,
        ogDesc,
        ogImage,
        twCard,
        h1,
        wordCount,
        images: { total: imgs.length, missingAlt: imgsMissingAlt },
        links: { total: links.length, nofollow: nofollowLinks },
        hreflangs,
        securityHeaders,
        robotsOk,
        sitemapOk,
        ttfb,
        contentLength,
      },
      checks,
    });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Invalid request" }, { status: 400 });
  }
}



// ## 4) Add route & page

// * Create the files exactly as shown.
// * Ensure Tailwind is set up (already in your projects). If not, run `npx tailwindcss init -p` and include the standard Next.js content globs.

// **Tailwind config content globs** (if needed):

// ```js
// // tailwind.config.js
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: { extend: {} },
//   plugins: [],
// };
// ```

// ---

// ## 5) Optional: Enhance

// * Add a sitemap crawler (depth 1–2) to batch-audit pages.
// * Persist results in a DB (e.g., Prisma + Postgres) to show historical scores.
// * Add export to CSV/PDF, shareable report links, and email delivery.
// * Plug into Lighthouse CI for lab performance metrics.

// ---

// ## 6) Quick usage

// * Start dev: `pnpm dev` (or `npm run dev`).
// * Visit `/seo-audit`, enter a full URL, run audit.

// That’s it—ship it 🚀
