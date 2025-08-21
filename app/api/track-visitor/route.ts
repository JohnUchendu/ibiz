import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { visitorId } = await req.json();

    // If first time visitor, create record
    const existing = await prisma.visitor.findUnique({ where: { id: visitorId } });

    if (!existing) {
      await prisma.visitor.create({
        data: { id: visitorId },
      });
    } else {
      // Update returning visitor stats
      await prisma.visitor.update({
        where: { id: visitorId },
        data: { visits: { increment: 1 } },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Visitor tracking error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
