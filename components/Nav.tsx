"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface SubItem {
  name: string;
  href: string;
  tag: string;
  disabled?: boolean;
}

interface NavItem {
  name: string;
  subItems: SubItem[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems: NavItem[] = [
    {
      name: "Tools",
      subItems: [
        { name: "QR Code Generator", href: "/qr-code-generator", tag: "New" },
        { name: "Invoice Generator", href: "/invoice-generator", tag: "New" },
        // { name: "Receipt Generator", href: "/receipt-generator", tag: "New" },
      ],
    },
    {
      name: "Website",
      subItems: [
        { name: "Business Website", href: "/websites/business", tag: "Hot" },
        { name: "Online Store", href: "/websites/online-store", tag: "Hot" },
      ],
    },
  ];

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logos/logo.png"
                height={60}
                width={60}
                alt="iBiz logo"
                className="hover:opacity-90 transition-opacity duration-300"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="group relative">
                <button className="text-gray-200 hover:text-blue-400 font-medium transition-colors duration-300">
                  {item.name}
                </button>
                <ul className="absolute left-0 top-full hidden group-hover:block bg-gray-800 text-white shadow-xl rounded-lg p-3 w-56 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                  {item.subItems.map((subItem) => (
                    <li
                      key={subItem.name}
                      className={`px-4 py-2 hover:bg-gray-700 rounded-md flex justify-between items-center ${
                        subItem.disabled ? "text-gray-500 cursor-not-allowed" : ""
                      }`}
                    >
                      <Link
                        href={subItem.href}
                        className={subItem.disabled ? "pointer-events-none" : "hover:text-blue-400"}
                        aria-disabled={subItem.disabled}
                      >
                        {subItem.name}
                      </Link>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          subItem.tag === "Coming Soon"
                            ? "bg-yellow-600 text-yellow-100"
                            : subItem.tag === "Hot"
                            ? "bg-red-600 text-red-100"
                            : "bg-green-600 text-green-100"
                        }`}
                      >
                        {subItem.tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              href="/websites/business"
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`sm:hidden bg-gray-900 text-white overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="p-4 space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <button className="font-semibold text-gray-200 w-full text-left">
                {item.name}
              </button>
              <ul className="pl-4 mt-2 space-y-2">
                {item.subItems.map((subItem) => (
                  <li
                    key={subItem.name}
                    className={`flex justify-between items-center ${
                      subItem.disabled ? "text-gray-500" : ""
                    }`}
                  >
                    <Link
                      href={subItem.href}
                      className={subItem.disabled ? "pointer-events-none" : "hover:text-blue-400"}
                      aria-disabled={subItem.disabled}
                    >
                      {subItem.name}
                    </Link>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        subItem.tag === "Coming Soon"
                          ? "bg-yellow-600 text-yellow-100"
                          : subItem.tag === "Hot"
                          ? "bg-red-600 text-red-100"
                          : "bg-green-600 text-green-100"
                      }`}
                    >
                      {subItem.tag}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li>
            <Link
              href="/websites/business"
              className="block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}