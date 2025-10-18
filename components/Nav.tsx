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
        { name: "Domain Checker", href: "/domain-checker", tag: "New" },
      ],
    },
    {
      name: "Website",
      subItems: [
        { name: "Business Website", href: "/website", tag: "Hot" },
        { name: "Online Store", href: "/website/online-store", tag: "Hot" },
      ],
    },
    {
      name: "Email",
      subItems: [
        { name: "Business Email", href: "/email", tag: "Hot" },
        { name: "Marketing Email", href: "/email", tag: "Hot" },
      ],
    },
    {
      name: "SMS",
      subItems: [
        { name: "SMS Tools", href: "#", tag: "Coming Soon", disabled: true },
      ],
    },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logos/logo.png"
                height={80}
                width={80}
                alt="iBiz logo"
                className="hover:opacity-80 transition-opacity duration-200"
              />
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
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

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-8 sm:items-center">
            {navItems.map((item) => (
              <div key={item.name} className="group relative">
                <button
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  aria-expanded="false"
                >
                  {item.name}
                </button>
                <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg p-2 w-52 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-200">
                  {item.subItems.map((subItem) => (
                    <li
                      key={subItem.name}
                      className={`px-4 py-2 hover:bg-gray-100 flex justify-between items-center ${
                        subItem.disabled ? "text-gray-400 cursor-not-allowed" : ""
                      }`}
                    >
                      <Link
                        href={subItem.href}
                        className={subItem.disabled ? "pointer-events-none" : ""}
                        aria-disabled={subItem.disabled}
                      >
                        {subItem.name}
                      </Link>
                      <span
                        className={`ml-2 text-xs px-2 py-0.5 rounded ${
                          subItem.tag === "Coming Soon"
                            ? "bg-yellow-100 text-yellow-600"
                            : subItem.tag === "Hot"
                            ? "bg-red-100 text-red-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {subItem.tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`sm:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="p-4 space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <button className="font-semibold text-gray-700 w-full text-left">
                {item.name}
              </button>
              <ul className="pl-4 mt-2 space-y-2">
                {item.subItems.map((subItem) => (
                  <li
                    key={subItem.name}
                    className={`flex justify-between items-center ${
                      subItem.disabled ? "text-gray-400" : ""
                    }`}
                  >
                    <Link
                      href={subItem.href}
                      className={subItem.disabled ? "pointer-events-none" : ""}
                      aria-disabled={subItem.disabled}
                    >
                      {subItem.name}
                    </Link>
                    <span
                      className={`ml-2 text-xs px-2 py-0.5 rounded ${
                        subItem.tag === "Coming Soon"
                          ? "bg-yellow-100 text-yellow-600"
                          : subItem.tag === "Hot"
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {subItem.tag}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}