// app/about/page.tsx
import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <section className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">About iBiz Tool</h1>
        <p className="text-lg text-gray-700 mb-6">
          Biz Tool is your all-in-one platform designed to help businesses
          streamline operations and boost productivity. From creating
          professional websites to managing emails, generating invoices, and
          designing marketing materials, we provide the tools you need to
          grow your business effortlessly.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our goal is to make powerful business tools accessible, intuitive,
          and affordable. Whether you’re a startup, small business, or
          entrepreneur, Biz Tool gives you everything you need in one place.
        </p>
        <p className="text-lg text-gray-700">
          Start using iBiz Tool today and take your business to the next level
          with our easy-to-use digital solutions.
        </p>
      </section>
    </main>
  );
}
