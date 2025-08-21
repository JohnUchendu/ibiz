import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // const count = await prisma.visitor.count();
    // return NextResponse.json({ count });
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
