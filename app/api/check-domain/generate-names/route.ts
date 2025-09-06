import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // make sure this is in .env.local
});

export async function POST(req: Request) {
  try {
    const { keyword } = await req.json();

    if (!keyword) {
      return NextResponse.json({ error: "Keyword is required" }, { status: 400 });
    }

    // 🔮 Ask AI for business names
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini", // fast + cheap
      messages: [
        {
          role: "system",
          content: "You are a business name generator. Generate short, brandable business names.",
        },
        {
          role: "user",
          content: `Generate 10 unique business names based on the keyword: "${keyword}". Return them as a plain list.`,
        },
      ],
    });

    const text = completion.choices[0].message?.content ?? "";
    const names = text
      .split("\n")
      .map((n) => n.replace(/^\d+[\).\s-]*/, "").trim()) // remove numbering
      .filter((n) => n.length > 0);

    return NextResponse.json({ names });
  } catch (err: any) {
    console.error("AI error:", err.message);
    return NextResponse.json({ error: "Failed to generate names" }, { status: 500 });
  }
}
