// app/about/page.tsx
import ContactSection from "@/components/ContactSection";
import React from "react";

export default function AboutPage() {
  return (
        <main className="min-h-screen flex flex-col items-center justify-center p-6">
        <section className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold mb-4">About iBiz Tool</h1>
          <p className="text-lg text-gray-700 mb-6">
            iBiz is your all-in-one business suite platform designed to help
            businesses streamline operations and boost productivity. From
            creating professional websites to managing emails, generating
            invoices, and designing marketing materials, we provide the tools
            you need to grow your business effortlessly.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our goal is to make powerful business tools accessible, intuitive,
            and affordable. Whether you’re a startup, small business, or
            entrepreneur, iBiz Tool gives you everything you need in one place.
          </p>
          <p className="text-lg text-gray-700">
            Start using iBiz Tool today and take your business to the next level
            with our easy-to-use digital solutions. iBiz is a product developed
            and designed under JK TECHNOLOGY LIMITED COMPANY RC Number: 8754824
          </p>
          <p className="text-gray-500 ">Trusted by businesses</p>
        </section>
      <ContactSection />
      </main>
    
  );
}
