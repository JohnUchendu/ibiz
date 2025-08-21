import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const domain = searchParams.get("domain");

  if (!domain) {
    return NextResponse.json({ error: "Domain is required" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://api.api-ninjas.com/v1/domainlookup?domain=${domain}`, {
      headers: {
        "X-Api-Key": process.env.API_NINJAS_KEY || "", // store your key in .env
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch domain info");
    }

    const data = await res.json();

    // API Ninjas returns an object with "is_registered"
    return NextResponse.json({
      domain,
      available: !data.is_registered, // true if not registered
    });
  } catch (error: any) {
    console.error("Domain check error:", error.message);
    return NextResponse.json({ error: "Failed to check domain" }, { status: 500 });
  }
}
