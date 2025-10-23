import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ReactElement } from 'react';
import ThankYouEmail from '@/emails/ThankYouEmail';
import AdminNotificationEmail from '@/emails/AdminNotificationEmail';

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

// Basic input sanitization
const sanitizeInput = (input: string): string => {
  return input.replace(/[<>{}]/g, '').trim();
};

export async function POST(req: NextRequest) {
  try {
    const body: ContactRequestBody = await req.json();
    const { name, email, phone, company, projectType, budget, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }
    if (!['corporate', 'ecommerce'].includes(projectType)) {
      return NextResponse.json({ error: 'Invalid project type' }, { status: 400 });
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Sanitize inputs
    const sanitizedBody = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: phone ? sanitizeInput(phone) : undefined,
      company: company ? sanitizeInput(company) : undefined,
      projectType,
      budget: budget ? sanitizeInput(budget) : undefined,
      message: sanitizeInput(message),
    };

    // Send automated response to user
    await resend.emails.send({
      from: 'John from iBiz <response@mail.ibiz.name.ng>', // Replace with your verified sender
      to: [sanitizedBody.email],
      subject: "Thanks for Reaching Out – We're Excited to Help!",
      react: ThankYouEmail(sanitizedBody) as ReactElement,
    });

    // Send notification to admin
    await resend.emails.send({
      from: 'iBiz Contact <contact@mail.ibiz.name.ng>',
      to: ['info@ibiz.name.ng'],
      subject: 'New Contact Form Submission',
      react: AdminNotificationEmail(sanitizedBody) as ReactElement,
    });

    // Log submission
    console.log('Contact form submitted:', sanitizedBody);

    return NextResponse.json({ success: true, message: 'Form submitted and emails sent!' }, { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}