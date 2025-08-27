"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-black">
             iBiz
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {/* Business Essentials */}
            <div className="group relative">
              <button className="hover:text-blue-600 font-medium">
                Business Essentials
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-56">
                <ul className="py-2">
                  <li><Link href="/invoice-generator" className="block px-4 py-2 hover:bg-gray-100">Invoice Generator</Link></li>
                  <li><Link href="/receipt-generator" className="block px-4 py-2 hover:bg-gray-100">Receipt Generator</Link></li>
                  <li><Link href="/letterhead-maker" className="block px-4 py-2 hover:bg-gray-100">Letterhead Maker</Link></li>
                  <li><Link href="/id-card-maker" className="block px-4 py-2 hover:bg-gray-100">ID Card Maker</Link></li>
                </ul>
              </div>
            </div>

            {/* Website */}
            <div className="group relative">
              <button className="hover:text-blue-600 font-medium">
                Website
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-64">
                <ul className="py-2">
                  <li><Link href="/business-website" className="block px-4 py-2 hover:bg-gray-100">Business Website</Link></li>
                  <li><Link href="/ecommerce-storefront" className="block px-4 py-2 hover:bg-gray-100">eCommerce Storefront</Link></li>
                  <li><Link href="/restaurant-website" className="block px-4 py-2 hover:bg-gray-100">Restaurant/Menu Website</Link></li>
                  <li><Link href="/freelancer-website" className="block px-4 py-2 hover:bg-gray-100">Freelancer Website</Link></li>
                  <li><Link href="/portfolio-website" className="block px-4 py-2 hover:bg-gray-100">Portfolio Website</Link></li>
                </ul>
              </div>
            </div>

            {/* Email */}
            <div className="group relative">
              <button className="hover:text-blue-600 font-medium">
                Email
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-56">
                <ul className="py-2">
                  <li><Link href="/business-email" className="block px-4 py-2 hover:bg-gray-100">Business Email</Link></li>
                  <li><Link href="/marketing-email" className="block px-4 py-2 hover:bg-gray-100">Marketing Email</Link></li>
                </ul>
              </div>
            </div>

            {/* Marketing & Growth */}
            <div className="group relative">
              <button className="hover:text-blue-600 font-medium">
                Marketing & Growth
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-64">
                <ul className="py-2">
                  <li><Link href="/seo-audit" className="block px-4 py-2 hover:bg-gray-100">SEO Audit</Link></li>
                  <li><Link href="/website-speed-tester" className="block px-4 py-2 hover:bg-gray-100">Website Speed Tester</Link></li>
                  <li><Link href="/qr-code-generator" className="block px-4 py-2 hover:bg-gray-100">QR Code Generator</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="py-2 space-y-2">
            <li className="px-4 font-semibold">Business Essentials</li>
            <li><Link href="/invoice-generator" className="block px-6 py-2 hover:bg-gray-100">Invoice Generator</Link></li>
            <li><Link href="/receipt-generator" className="block px-6 py-2 hover:bg-gray-100">Receipt Generator</Link></li>
            <li><Link href="/letterhead-maker" className="block px-6 py-2 hover:bg-gray-100">Letterhead Maker</Link></li>
            <li><Link href="/id-card-maker" className="block px-6 py-2 hover:bg-gray-100">ID Card Maker</Link></li>

            <li className="px-4 font-semibold mt-2">Website</li>
            <li><Link href="/business-website" className="block px-6 py-2 hover:bg-gray-100">Business Website</Link></li>
            <li><Link href="/business-website" className="block px-6 py-2 hover:bg-gray-100">eCommerce Storefront</Link></li>
            <li><Link href="/business-website" className="block px-6 py-2 hover:bg-gray-100">Restaurant/Menu Website</Link></li>
            <li><Link href="/business-website" className="block px-6 py-2 hover:bg-gray-100">Freelancer Website</Link></li>
            <li><Link href="/business-website" className="block px-6 py-2 hover:bg-gray-100">Portfolio Website</Link></li>
           
       

            <li className="px-4 font-semibold mt-2">Email</li>
            <li><Link href="/business-email" className="block px-6 py-2 hover:bg-gray-100">Business Email</Link></li>
            <li><Link href="/business-email" className="block px-6 py-2 hover:bg-gray-100">Marketing Email</Link></li>
           

            <li className="px-4 font-semibold mt-2">Marketing & Growth</li>
            <li><Link href="/seo-audit" className="block px-6 py-2 hover:bg-gray-100">SEO Audit</Link></li>
            <li><Link href="/website-speed-tester" className="block px-6 py-2 hover:bg-gray-100">Website Speed Tester</Link></li>
            <li><Link href="/qr-code-generator" className="block px-6 py-2 hover:bg-gray-100">QR Code Generator</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
