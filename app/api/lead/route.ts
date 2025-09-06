import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, names } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "No email provided" }, { status: 400 });
  }

  await fetch(process.env.GSHEET_WEBHOOK_URL as string, {
    method: "POST",
    body: JSON.stringify({ email, names }),
    headers: { "Content-Type": "application/json" },
  });

  return NextResponse.json({ success: true });
}
