// import { NextResponse } from "next/server";
// import { sendAlert } from "@/lib/mailer";

// const WEBSITES = [
//   { url: "https://kkubaniandco.com", email: "johncnd195@gmail.com" },
// //   { url: "https://yourbiz.com", email: "you@example.com" },
// ];

// export async function GET() {
//   for (const site of WEBSITES) {
//     try {
//       const res = await fetch(site.url, { method: "GET" });
//       if (!res.ok) {
//         await sendAlert(site.email, site.url);
//       }
//     } catch (err) {
//       await sendAlert(site.email, site.url);
//     }
//   }

//   return NextResponse.json({ status: "checked" });
// }


import { NextResponse } from "next/server";
import { sendAlert } from "@/lib/mailer";

export async function POST(req: Request) {
  const { url, email } = await req.json();

  try {
    const res = await fetch(url, { method: "GET" });

    if (!res.ok) {
      await sendAlert(email, url);
      return NextResponse.json({ message: `❌ ${url} is DOWN. Alert sent.` });
    }

    return NextResponse.json({ message: `✅ ${url} is UP.` });

  } catch (error) {
    await sendAlert(email, url);
    return NextResponse.json({ message: `❌ ${url} is DOWN. Alert sent.` });
  }
}
