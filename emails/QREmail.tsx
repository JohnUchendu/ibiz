import { Html, Head, Body, Text, Section } from '@react-email/components';

interface Props {
  url: string;
}

export const QREmail = ({ url }: Props) => (
  <Html>
    <Head />
    <Body style={{ fontFamily: 'Arial', color: '#333' }}>
      <Section style={{ padding: '20px', textAlign: 'center' }}>
        <Text style={{ fontSize: '24px', fontWeight: 'bold' }}>Your Free QR Code</Text>
        <Text style={{ marginBottom: '20px' }}>
          Your QR code for <a href={url}>{url}</a> is attached as qr-code.png. Download and use it to drive sales!
        </Text>
        <Text style={{ marginTop: '20px' }}>
          Want to grow your US business? Our $500 email campaign setup drives 20% more leads for SMBs like yours!
        </Text>
        <Text>
          <a href="mailto:info@ibiz.name.ng?subject=Email%20Marketing%20Consult" style={{ color: '#0066cc' }}>
            Book a Free 15-Min Consult
          </a>
        </Text>
        <Text style={{ fontSize: '12px', marginTop: '20px' }}>
          Unsubscribe: <a href="{{UnsubscribeURL}}" style={{ color: '#666' }}>Click here</a>
        </Text>
      </Section>
    </Body>
  </Html>
);