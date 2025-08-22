import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const business = await prisma.business.create({
    data: {
      name: "Demo Business",
      email: "demo@business.com",
    },
  });

  await prisma.invoice.createMany({
    data: [
      { businessId: business.id, amount: 100 },
      { businessId: business.id, amount: 250 },
    ],
  });

  await prisma.marketingAsset.create({
    data: {
      businessId: business.id,
      type: "LOGO",
      name: "Demo Logo",
      fileUrl: "",
    },
  });
}

main().finally(() => prisma.$disconnect());
