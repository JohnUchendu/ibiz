"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <Link href="/">
              <Image
                src="/logos/logo.png"
                height={100}
                width={100}
                alt="iBiz logo"
              />
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
            >
              ☰
            </button>
          </div>

          {/* Menu Items */}
          <div className="hidden sm:flex sm:space-x-8 sm:items-center">
            {/* Tools */}
            <div className="group relative">
              <button className="text-gray-700 hover:text-blue-600">
                Tools
              </button>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg p-2 w-52">
                {[
                  {
                    name: "QR Code Generator",
                    href: "/qr-code-generator",
                    tag: "New",
                  },
                  {
                    name: "Invoice Generator",
                    href: "invoice-generator",
                    tag: "New",
                  },
                  {
                    name: "Receipt Generator",
                    href: "receipt-generator",
                    tag: "New",
                  },
                  {
                    name: "ID Card Maker",
                    href: "id-card-generator",
                    tag: "New",
                  },
                  { name: "SEO Audit", href: "seo-audit", tag: "New" },
                  {
                    name: "Domain Checker",
                    href: "domain-checker",
                    tag: "New",
                  },
                  {
                    name: "Website Speed Tester",
                    href: "speed-test",
                    tag: "New",
                  },
                  {
                    name: "Letterhead Maker",
                    href: "letterhead-maker",
                    tag: "New",
                  },
                ].map((tool) => (
                  <li
                    key={tool.name}
                    className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
                  >
                    <Link href={tool.href}>{tool.name}</Link>
                    <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                      {tool.tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Website */}
            <div className="relative group">
              <button className="hover:text-blue-600">Website</button>
              <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 w-64">
                <Link
                  href="/website"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Business Website{" "}
                  <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">
                    HOT
                  </span>
                </Link>
                <Link
                  href="/website/online-store"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Online Store{" "}
                  <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">
                    HOT
                  </span>
                </Link>
                <Link
                  href="/website/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Restaurant/Menu Website{" "}
                  <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                    NEW
                  </span>
                </Link>
                <Link
                  href="/website"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Freelancer Website{" "}
                  <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                    NEW
                  </span>
                </Link>
                <Link
                  href="/website"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Portfolio Website{" "}
                  <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                    NEW
                  </span>
                </Link>
              </div>
            </div>

            {/* Email */}
            <div className="group relative">
              <button className="text-gray-700 hover:text-blue-600">
                Email
              </button>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg p-2 w-56">
                {[
                  { name: "Business Email", href: "/email", tag: "Hot" },
                  { name: "Marketing Email", href: "/email", tag: "Hot" },
                ].map((email) => (
                  <li
                    key={email.name}
                    className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
                  >
                    <Link href={email.href}>{email.name}</Link>
                    <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">
                      {email.tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SMS */}
            <div className="group relative">
              <button className="text-gray-700 hover:text-blue-600">SMS</button>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg p-2 w-56">
                <li className="px-4 py-2 flex justify-between items-center text-gray-400">
                  SMS Tools
                  <span className="ml-2 text-xs bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded cursor-progress">
                    Coming Soon
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="sm:hidden bg-white shadow-lg">
          <ul className="p-4 space-y-2">
            <li>
              <button className="font-semibold">Tools</button>
              <ul className="pl-4">
                <li className="flex justify-between">
                  <Link href="/qr-code-generator">QR Code Generator</Link>
                  <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                    New
                  </span>
                </li>
                <li className="flex justify-between">
                  <Link href="/invoice-generator">Invoice Generator</Link>
                  <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                    New
                  </span>
                </li>
                <li className="flex justify-between">
                  <Link href="/receipt-generator">Receipt Generator</Link>
                  <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                    New
                  </span>
                </li>
                <li className="flex justify-between">
                  <Link href="/id-card-maker">ID Card Maker</Link>
                  <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                    New
                  </span>
                </li>
                <li className="flex justify-between">
                  <Link href="/seo-audit">SEO Audit</Link>
                  <span className="ml-2 text-xs bg-green-100 text-red-600 px-2 py-0.5 rounded">
                    Hot
                  </span>
                </li>
                <li className="flex justify-between">
                  <Link href="/domain-checker">Domain Checker</Link>
                  <span className="ml-2 text-xs bg-green-100 text-red-600 px-2 py-0.5 rounded">
                    Hot
                  </span>
                </li>
                <li className="flex justify-between">
                  <Link href="/speed-test">Website Speed Tester</Link>
                  <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                    New
                  </span>
                </li>
                <li className="flex justify-between">
                  <Link href="/letterhead-maker">Letterhead Maker</Link>
                  <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                    New
                  </span>
                </li>
              </ul>
            </li>

            <li>
              <button className="font-semibold">Website</button>
              <ul className="pl-4">
                <li className="flex justify-between">
                  <Link href="/website">Business Website</Link>
                  <span className="ml-2 text-xs bg-green-100 text-red-600 px-2 py-0.5 rounded">
                    Hot
                  </span>
                </li>
                <li className="flex justify-between">
                  <Link href="/website/online-store">Online Store</Link>
                  <span className="ml-2 text-xs bg-green-100 text-red-600 px-2 py-0.5 rounded">
                    Hot
                  </span>
                </li>
                <li className="flex justify-between">
                  <Link href="/website">Restaurant/Menu Website</Link>
                  <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                    New
                  </span>
                </li>
                <li className="flex justify-between">
                  <Link href="/website">Freelancer Website</Link>
                  <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                    New
                  </span>
                </li>
                <li className="flex justify-between">
                  <Link href="/website">Portfolio Website</Link>
                  <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                    New
                  </span>
                </li>
              </ul>
            </li>

            <li>
              <button className="font-semibold">Email</button>
              <ul className="pl-4">
                <li className="flex justify-between">
                  <Link href="/email">Business Email</Link>
                  <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                    New
                  </span>
                </li>
                <li className="flex justify-between">
                  <Link href="/email">Marketing Email</Link>
                  <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                    New
                  </span>
                </li>
              </ul>
            </li>

            <li>
              <button className="font-semibold">SMS</button>
              <ul className="pl-4">
                <li className="flex justify-between text-gray-400">
                  SMS Tools
                  <span className="ml-2 text-xs bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded">
                    Coming Soon
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
