import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { InvoiceEmail } from '@/emails/InvoiceEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, clientName, pdfBase64 } = await req.json();

    // Validate base64
    if (!pdfBase64) {
      throw new Error('Invalid PDF data');
    }

    // Send email with PDF attachment
    await resend.emails.send({
      from: 'tools@mail.ibiz.name.ng',
      to: [email],
      subject: 'Your Free iBiz Invoice – Boost Your US Business!',
      react: InvoiceEmail({ clientName }),
      attachments: [
        {
          filename: 'invoice.pdf',
          content: pdfBase64,
          contentType: 'application/pdf',
        },
      ],
    });

    // Add to contacts (Resend prevents duplicates by email)
    await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: '39bdb6d1-013c-40d4-a799-51f8f23ff5a1', // Your Resend audience ID
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send invoice' }, { status: 500 });
  }
}