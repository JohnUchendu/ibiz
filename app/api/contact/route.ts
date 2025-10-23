import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import ThankYouEmail from '@/emails/ThankYouEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactRequestBody {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: 'corporate' | 'ecommerce';
  budget?: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactRequestBody = await req.json();
    const { name, email, phone, company, projectType, budget, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Send automated response email
    await resend.emails.send({
      from: 'Welcome from John@mail.ibiz.name.ng', // Replace with your verified sender
      to: [email],
      subject: "Thanks for Reaching Out – We're Excited to Help!",
      react: ThankYouEmail({ name, projectType, company, email }),
    });

    // Optional: Log submission (e.g., to Sanity or console)
    console.log('Contact form submitted:', { name, email, projectType, budget });

    return NextResponse.json({ success: true, message: 'Form submitted and email sent!' }, { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}