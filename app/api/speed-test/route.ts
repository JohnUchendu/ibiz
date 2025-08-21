// // pages/api/speed-test.ts (Node.js / Next.js API route - TypeScript)

// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if(req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
//   try{
//     const { url } = req.body ?? {};
//     if(!url || !/^https?:\/\//i.test(url)) return res.status(400).json({ error: 'Invalid url' });

//     // Protect against abuse
//     const ALLOWED_SCHEMES = ['http:', 'https:'];
//     try{ new URL(url); } catch(e){ return res.status(400).json({ error: 'Invalid URL' }); }

//     const controller = new AbortController();
//     const timeout = setTimeout(()=> controller.abort(), 15000);

//     const start = Date.now();
//     const fetchRes = await fetch(url, { method: 'GET', signal: controller.signal });
//     const ttfbMs = Date.now() - start;

//     const arr = await fetchRes.arrayBuffer();
//     const totalMs = Date.now() - start;
//     clearTimeout(timeout);

//     const sizeBytes = arr.byteLength;

//     return res.status(200).json({ status: fetchRes.status, ttfbMs, totalMs, sizeBytes });
//   }catch(err: any){
//     if(err.name === 'AbortError') return res.status(504).json({ error: 'Request timed out' });
//     return res.status(500).json({ error: err?.message || 'Unknown error' });
//   }
// }


// app/api/speed-test/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    if (!url || !/^https?:\/\//i.test(url)) {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    // Validate URL object
    try {
      new URL(url);
    } catch {
      return NextResponse.json({ error: "Invalid URL format" }, { status: 400 });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const start = Date.now();
    const fetchRes = await fetch(url, { method: "GET", signal: controller.signal });
    const ttfbMs = Date.now() - start;

    const arr = await fetchRes.arrayBuffer();
    const totalMs = Date.now() - start;
    clearTimeout(timeout);

    const sizeBytes = arr.byteLength;

    return NextResponse.json({
      status: fetchRes.status,
      ttfbMs,
      totalMs,
      sizeBytes,
    });
  } catch (err: any) {
    if (err.name === "AbortError") {
      return NextResponse.json({ error: "Request timed out" }, { status: 504 });
    }
    return NextResponse.json({ error: err?.message || "Unknown error" }, { status: 500 });
  }
}
