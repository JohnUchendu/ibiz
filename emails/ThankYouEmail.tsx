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
      <Body className="bg-gray-50 font-sans text-gray-800">
        <Container className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <Section className="text-center py-6">
            <Text className="text-3xl font-bold text-blue-600">Thank You, {name}!</Text>
            <Text className="text-lg text-gray-600 mt-2">
              We're excited about your {projectType === 'corporate' ? 'Business Website' : 'Online Store'} project{company ? ` at ${company}` : ''}.
            </Text>
          </Section>
          <Section className="py-4">
            <Text className="text-base leading-7">
              Our team will review your submission and reach out within 24-48 hours with a tailored plan and quote.
            </Text>
            <Text className="text-base leading-7">
              Want to explore more? Check out our{' '}
              <a href="https://ibiz.name.ng/pricing" className="text-blue-600 hover:underline">
                pricing plans
              </a>{' '}
              or browse our{' '}
              <a href="https://ibiz.name.ng/portfolio" className="text-blue-600 hover:underline">
                portfolio
              </a>.
            </Text>
          </Section>
          <Section className="text-center py-6">
            <Button
              href="mailto:info@ibiz.name.ng?subject=Re:%20Contact%20Form%20Submission"
              className="bg-blue-600 text-white py-3 px-8 rounded-full text-base font-semibold hover:bg-blue-700"
            >
              Reply to Us
            </Button>
          </Section>
          <Section className="text-center border-t border-gray-200 pt-4">
            <Text className="text-sm text-gray-500">
              Best regards,<br />
              The iBiz {projectType === 'corporate' ? 'Business Websites' : 'Online Stores'} Team<br />
              <a href="mailto:info@ibiz.name.ng" className="text-blue-600 hover:underline">info@ibiz.name.ng</a> |{' '}
              <a href="https://ibiz.name.ng" className="text-blue-600 hover:underline">ibiz.name.ng</a>
            </Text>
            <Text className="text-sm text-gray-500 mt-4">
              Don’t want these emails?{' '}
              <a
                href={`https://ibiz.name.ng/api/unsubscribe?email=${encodeURIComponent(email)}`}
                className="text-blue-600 underline"
              >
                Unsubscribe
              </a>.
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ThankYouEmail;