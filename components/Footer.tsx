"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState<string>('');

  const handleNewsletterSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className="mt-16 bg-gray-900 text-white py-12 border-t border-gray-700">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-sm text-gray-300">
              <a href="mailto:info@ibiz.name.ng" className="hover:text-blue-400 transition">
                info@ibiz.name.ng
              </a>
            </p>
            <p className="text-sm text-gray-300">
              <a href="tel:07036580994" className="hover:text-blue-400 transition">
                07036580994
              </a>
            </p>
            <p className="text-sm text-gray-300">
              No.4 Chief Oge Close, Iwofe, Port Harcourt
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-gray-300">Join our newsletter for the latest updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={handleNewsletterSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition disabled:bg-gray-500"
                disabled={!email}
              >
                Join
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Links</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <Link href="/about" className="hover:text-blue-400 transition">About</Link>
              <Link href="/privacy" className="hover:text-blue-400 transition">Privacy & Terms</Link>
              <Link href="/websites/business" className="hover:text-blue-400 transition">Business Solutions</Link>
              <Link href="/websites/online-store" className="hover:text-blue-400 transition">Online Stores</Link>
            </div>
            <p className="text-sm text-gray-300">
              Powered by <Link href="https://jktl.com.ng" target="_blank" className="text-blue-400 hover:underline">JKLT</Link>
            </p>
          </div>
        </div>

        {/* Copyright and Social Media */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} iBiz — Free tools for Freelancers and Businesses
          </p>
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" className="text-gray-300 hover:text-blue-400 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" className="text-gray-300 hover:text-blue-400 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" className="text-gray-300 hover:text-blue-400 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.513 0-9.96 4.447-9.96 9.96 0 4.97 3.635 9.102 8.378 9.848v-6.974h-2.522v-2.874h2.522v-2.192c0-2.494 1.49-3.867 3.767-3.867 1.09 0 2.233.194 2.233.194v2.454h-1.258c-1.24 0-1.626.772-1.626 1.563v1.851h2.768l-.443 2.874h-2.325v6.974c4.743-.746 8.378-4.878 8.378-9.848 0-5.513-4.447-9.96-9.96-9.96z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}