// import { NextResponse } from "next/server";
// import QRCode from "qrcode";

// export async function POST(req: Request) {
//   const { mode, businessName, bank, accountNumber, amount, link } = await req.json();

//   // Mode A: Payment Link (best UX)
//   if (mode === "link" && link) {
//     const qrImage = await QRCode.toDataURL(link);
//     return NextResponse.json({ qrImage, payload: link });
//   }

//   // Mode B: Bank transfer info (display text)
//   const safeName = (businessName || "").trim();
//   const safeBank = (bank || "").trim();
//   const safeAcct = (accountNumber || "").trim();
//   const safeAmt = (amount || "").trim();

//   const textPayload =
//     `Business: ${safeName}\nBank: ${safeBank}\nAccount: ${safeAcct}` +
//     (safeAmt ? `\nAmount: ${safeAmt}` : "");

//   const qrImage = await QRCode.toDataURL(textPayload);
//   return NextResponse.json({ qrImage, payload: textPayload });
// }



// import { NextResponse } from "next/server";
// import QRCode from "qrcode";

// import { generateNIBSSQR } from "@/lib/nibss";


// export async function POST(req: Request) {
//   const body = await req.json();
//   const { mode, businessName, bank, accountNumber, amount, link } = body;

//   let payload = "";

//   if (mode === "link" && link) {
//     payload = link.trim();
//   } else if (mode === "bank" && accountNumber && bank) {
//     payload = generateNIBSSQR({
//       businessName,
//       bank,
//       accountNumber,
//       amount,
//     });
//   } else {
//     return NextResponse.json({ error: "Invalid input" }, { status: 400 });
//   }

//   try {
//     const qrImage = await QRCode.toDataURL(payload, { margin: 2, width: 300 });
//     return NextResponse.json({ qrImage, payload });
//   } catch (err) {
//     return NextResponse.json({ error: "Failed to generate QR" }, { status: 500 });
//   }
// }



// // app/api/generate-qr/route.ts
// import { NextResponse } from "next/server";
// import QRCode from "qrcode";

// import { generateNIBSSQR } from "@/lib/nibss";  // keep this for when you do have merchantId

// export async function POST(req: Request) {
//   try {
//     const { mode, businessName, bank, accountNumber, amount, link, merchantId } = await req.json();

//     let payload = "";

//     if (mode === "link" && link?.trim()) {
//       payload = link.trim();
//     } else if (mode === "bank" && accountNumber && bank) {
//       if (merchantId?.trim()) {
//         // Proper NIBSS/EMVCo QR (requires valid merchantId)
//         payload = generateNIBSSQR({
//           merchantId: merchantId.trim(),
//           amount: (amount || "").toString(),
//         });
//       } else {
//         // Fallback: human-readable bank details
//         payload =
//           `Pay to: ${businessName || "N/A"}\n` +
//           `Bank: ${bank}\n` +
//           `Account: ${accountNumber}` +
//           (amount ? `\nAmount: ₦${amount}` : "");
//         // Alternative: point to a hosted page you control, e.g.
//         // payload = `https://yourdomain.com/pay?bank=${encodeURIComponent(bank)}&acct=${encodeURIComponent(accountNumber)}&amount=${encodeURIComponent(amount||"")}`;
//       }
//     } else {
//       return NextResponse.json({ error: "Invalid input" }, { status: 400 });
//     }

//     const qrImage = await QRCode.toDataURL(payload, { margin: 2, width: 300 });
//     return NextResponse.json({ qrImage, payload });
//   } catch (e) {
//     return NextResponse.json({ error: "Failed to generate QR" }, { status: 500 });
//   }
// }






// app/api/generate-qr/route.ts
import { NextResponse } from "next/server";
import QRCode from "qrcode";
import { generateNqrOffline } from "@/lib/nibss";

type Body = {
  mode: "link" | "bank";
  businessName?: string;
  bank?: string;
  accountNumber?: string;
  amount?: string;
  link?: string;
  merchantCity?: string;
};

export async function POST(req: Request) {
  try {
    const body: Body = await req.json();
    const { mode, businessName = "", bank = "", accountNumber = "", amount = "", link = "", merchantCity = "Lagos" } = body;

    let payload = "";

    if (mode === "link") {
      if (!link.trim()) return NextResponse.json({ error: "Missing link" }, { status: 400 });
      payload = link.trim();
    } else if (mode === "bank") {
      if (!bank || !accountNumber) {
        return NextResponse.json({ error: "Missing bank or account number" }, { status: 400 });
      }
      // OFFLINE NQR/EMVCo-style payload (no merchant creds needed)
      payload = generateNqrOffline({
        businessName,
        bankName: bank,
        accountNumber,
        amount,
        merchantCity,
      });
    } else {
      return NextResponse.json({ error: "Invalid mode" }, { status: 400 });
    }

    const qrImage = await QRCode.toDataURL(payload, { margin: 2, width: 300 });
    return NextResponse.json({ qrImage, payload });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed to generate QR" }, { status: 500 });
  }
}
