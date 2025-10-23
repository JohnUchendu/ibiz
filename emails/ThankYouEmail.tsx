import * as React from 'react';
import { Html, Head, Body, Text, Section, Container, Button, Tailwind } from '@react-email/components';

interface ThankYouEmailProps {
  name: string;
  projectType: 'corporate' | 'ecommerce';
  company?: string;
  email: string;
}

const ThankYouEmail: React.FC<ThankYouEmailProps> = ({ name, projectType, company, email }) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className="font-sans text-gray-800">
        <Container className="max-w-2xl mx-auto p-5">
          <Section className="text-center py-5">
            <Text className="text-2xl font-bold text-blue-600">Thank You, {name}!</Text>
          </Section>
          <Section>
            <Text className="text-base leading-6">
              We're thrilled you've reached out about your {projectType.toLowerCase()} project at {company || 'your company'}.
            </Text>
            <Text className="text-base leading-6">
              One of our experts will review your details and get back to you within 24-48 hours with a personalized plan and quote.
            </Text>
            <Text className="text-base leading-6">
              In the meantime, check out our <a href="https://yourdomain.com/pricing" className="text-blue-600">pricing plans</a>.
            </Text>
          </Section>
          <Section className="text-center py-5">
            <Button
              href="https://yourdomain.com/contact"
              className="bg-blue-600 text-white py-3 px-6 rounded-md text-base hover:bg-blue-700"
            >
              Reply to This Message
            </Button>
          </Section>
          <Section>
            <Text className="text-sm text-gray-500 text-center">
              Best regards,<br />
              The {projectType === 'corporate' ? 'Business Websites' : 'Online Stores'} Team<br />
              <a href="mailto:info@ibiz.name.ng" className="text-blue-600">info@ibiz.name.ng</a> | <a href="https://ibiz.name.ng" className="text-blue-600">ibiz.name.ng</a>
            </Text>
            <Text className="text-sm text-gray-500 text-center mt-4">
              Don’t want to receive these emails?{' '}
              <a href={`https://yourdomain.com/api/unsubscribe?email=${encodeURIComponent(email)}`} className="text-blue-600 underline">
                Unsubscribe here
              </a>.
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ThankYouEmail;