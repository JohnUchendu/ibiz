


// app/api/check-domain/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const domain = searchParams.get("domain");

  if (!domain) {
    return NextResponse.json({ error: "Domain is required" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://api.api-ninjas.com/v1/whois?domain=${domain}`,
      {
        headers: {
          "X-Api-Key": process.env.API_NINJAS_KEY || "",
        },
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error("API Ninjas error:", res.status, text);
      return NextResponse.json({ error: text }, { status: res.status });
    }

    const data = await res.json();

    // ✅ improved detection
    const isRegistered =
      !!data.registrar ||
      !!data.expiration_date ||
      (Array.isArray(data.name_servers) && data.name_servers.length > 0);

    return NextResponse.json({
      domain,
      available: !isRegistered,
      registrar: data.registrar,
      expiration_date: data.expiration_date,
    });
  } catch (error: any) {
    console.error("Domain check error:", error.message);
    return NextResponse.json(
      { error: "Failed to check domain" },
      { status: 500 }
    );
  }
}
