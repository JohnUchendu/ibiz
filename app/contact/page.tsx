"use client"

import Head from 'next/head';
import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: 'corporate' | 'ecommerce';
  budget: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'corporate',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data: { success?: boolean; message?: string; error?: string } = await response.json();

      if (response.ok) {
        setSubmitMessage('Thank you! We’ve received your message and will respond soon. Check your email for confirmation.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: 'corporate',
          budget: '',
          message: '',
        });
      } else {
        setSubmitMessage(data.error || 'Sorry, something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Sorry, something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Contact Us - Business Websites & Online Stores</title>
        <meta name="description" content="Get in touch for a free consultation on your business website or online store." />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">Contact Us</h1>
          <p className="mt-2 text-lg text-gray-600 text-center">Let’s build your perfect website or online store. Free consultation included.</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-600 focus:border-blue-600"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-600 focus:border-blue-600"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-600 focus:border-blue-600"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-600 focus:border-blue-600"
                placeholder="Enter your company name"
              />
            </div>
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">Project Type</label>
              <select
                name="projectType"
                id="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-600 focus:border-blue-600"
              >
                <option value="corporate">Business Website</option>
                <option value="ecommerce">Online Store</option>
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget Range</label>
              <select
                name="budget"
                id="budget"
                value={formData.budget}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-600 focus:border-blue-600"
              >
                <option value="">Select a budget range</option>
                <option value="350k-1.5M">₦350,000 - ₦1,500,000</option>
                <option value="1.8M-3.5M">₦1,800,000 - ₦3,500,000</option>
                <option value="5M+">₦5,000,000+</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tell Us About Your Project</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-600 focus:border-blue-600"
                placeholder="Describe your project needs"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {submitMessage && (
              <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                {submitMessage}
              </div>
            )}
          </div>
        </form>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>Ready to grow your business with a website or online store? We’re here to help.</p>
          <a href="/contact" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Get Started</a>
        </div>
      </footer>
    </div>
  );
}