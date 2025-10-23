import * as React from 'react';
import { Html, Head, Body, Text, Section, Container, Tailwind } from '@react-email/components';

interface AdminNotificationEmailProps {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: 'corporate' | 'ecommerce';
  budget?: string;
  message: string;
}

const AdminNotificationEmail: React.FC<AdminNotificationEmailProps> = ({
  name,
  email,
  phone,
  company,
  projectType,
  budget,
  message,
}) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className="bg-gray-50 font-sans text-gray-800">
        <Container className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <Section className="text-center py-6">
            <Text className="text-3xl font-bold text-blue-600">New Contact Form Submission</Text>
          </Section>
          <Section className="py-4">
            <Text className="text-base leading-7"><strong>Name:</strong> {name}</Text>
            <Text className="text-base leading-7"><strong>Email:</strong> {email}</Text>
            {phone && <Text className="text-base leading-7"><strong>Phone:</strong> {phone}</Text>}
            {company && <Text className="text-base leading-7"><strong>Company:</strong> {company}</Text>}
            <Text className="text-base leading-7"><strong>Project Type:</strong> {projectType === 'corporate' ? 'Business Website' : 'Online Store'}</Text>
            {budget && <Text className="text-base leading-7"><strong>Budget:</strong> {budget}</Text>}
            <Text className="text-base leading-7"><strong>Message:</strong> {message}</Text>
          </Section>
          <Section className="text-center border-t border-gray-200 pt-4">
            <Text className="text-sm text-gray-500">
              iBiz Contact Form Submission<br />
              <a href="https://ibiz.name.ng" className="text-blue-600 hover:underline">ibiz.name.ng</a>
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default AdminNotificationEmail;