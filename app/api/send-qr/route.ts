// import { NextRequest, NextResponse } from 'next/server';
// import { Resend } from 'resend';
// import { QREmail } from '@/emails/QREmail';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: NextRequest) {
//   try {
//     const { email, url, qrDataUrl } = await req.json();

//     // Send QR email
//     await resend.emails.send({
//       from: 'tools@mail.ibiz.name.ng',
//       to: [email],
//       subject: 'Your Free iBiz QR Code – Boost Your US Business!',
//       react: QREmail({ url, qrDataUrl }), // Pass props correctly
//     });

//     // Add to contacts (get audienceId from Resend dashboard)
//     await resend.contacts.create({
//       email,
//       unsubscribed: false,
//       audienceId: '39bdb6d1-013c-40d4-a799-51f8f23ff5a1', // Replace with your Resend audience ID
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error('Resend error:', error);
//     return NextResponse.json({ error: 'Failed to send QR' }, { status: 500 });
//   }
// }


// import { NextRequest, NextResponse } from 'next/server';
// import { Resend } from 'resend';
// import { QREmail } from '@/emails/QREmail';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: NextRequest) {
//   try {
//     const { email, url, qrDataUrl } = await req.json();

//     // Validate qrDataUrl
//     if (!qrDataUrl.startsWith('data:image/png;base64,')) {
//       throw new Error('Invalid QR code data URL');
//     }

//     // Send QR email
//     await resend.emails.send({
//       from: 'tools@mail.ibiz.name.ng', // Updated to subdomain
//       to: [email],
//       subject: 'Your Free iBiz QR Code – Boost Your Business!',
//       react: QREmail({ url, qrDataUrl }),
//     });

//     // Add to contacts
//     await resend.contacts.create({
//       email,
//       unsubscribed: false,
//       audienceId: 'YOUR_AUDIENCE_ID', // Your Resend audience ID
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error('Resend error:', error);
//     return NextResponse.json({ error: 'Failed to send QR' }, { status: 500 });
//   }
// }
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { QREmail } from '@/emails/QREmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, url, qrBase64 } = await req.json();

    // Validate base64
    if (!qrBase64) {
      throw new Error('Invalid QR code data');
    }

    // Send email with QR attachment
    await resend.emails.send({
      from: 'tools@mail.ibiz.name.ng',
      to: [email],
      subject: 'Your Free iBiz QR Code – Boost Your Business!',
      react: QREmail({ url }),
      attachments: [
        {
          filename: 'qr-code.png',
          content: qrBase64,
          contentType: 'image/png',
        },
      ],
    });

    // Add to contacts
    await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: '39bdb6d1-013c-40d4-a799-51f8f23ff5a1', // Your Resend audience ID
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send QR' }, { status: 500 });
  }
}