// app/privacy/page.tsx
import React from "react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-6">
      <section className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy & Terms of Service</h1>

        <h2 className="text-2xl font-semibold mb-2 mt-6">1. Introduction</h2>
        <p className="text-gray-700 mb-4">
          Welcome to Biz Tool. We value your privacy and strive to protect your personal information. By using our website and services, you agree to the terms outlined in this Privacy Policy and Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold mb-2 mt-6">2. Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We may collect information that you provide directly, such as your name, email address, and payment information when you sign up for our services. We may also collect usage data to improve our platform.
        </p>

        <h2 className="text-2xl font-semibold mb-2 mt-6">3. How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          Your information is used to provide and improve our services, communicate with you about updates, and ensure secure transactions. We do not sell your personal data to third parties.
        </p>

        <h2 className="text-2xl font-semibold mb-2 mt-6">4. Cookies</h2>
        <p className="text-gray-700 mb-4">
          Biz Tool may use cookies to enhance your experience, analyze site traffic, and personalize content. You can disable cookies in your browser settings, but some features may not function properly.
        </p>

        <h2 className="text-2xl font-semibold mb-2 mt-6">5. Your Rights</h2>
        <p className="text-gray-700 mb-4">
          You have the right to access, update, or delete your personal information. You may also opt out of marketing communications at any time by following the instructions in our emails.
        </p>

        <h2 className="text-2xl font-semibold mb-2 mt-6">6. Terms of Service</h2>
        <p className="text-gray-700 mb-4">
          By using Biz Tool, you agree not to misuse our services, interfere with the platform’s operation, or attempt unauthorized access. We reserve the right to suspend or terminate accounts for violations.
        </p>

        <h2 className="text-2xl font-semibold mb-2 mt-6">7. Changes to This Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy and Terms of Service from time to time. Continued use of our services constitutes acceptance of any changes.
        </p>

        <p className="text-gray-700 mt-6">
          If you have questions about our policies, please contact us at <a href="mailto:support@biztool.com" className="text-blue-600 underline">support@biztool.com</a>.
        </p>
      </section>
    </main>
  );
}
