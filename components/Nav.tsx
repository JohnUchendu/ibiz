// import Link from "next/link";

// export default function Nav() {
//   return (
//     <header className="border-b bg-white">
//       <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
//         <Link href="/" className="font-bold">iBiz</Link>
//         <nav className="text-sm flex gap-4">
//           <Link href="/qr-code-generator">QR Codes</Link>
//           <Link href="/invoice-generator">Invoices</Link>
//           <Link href="/receipt-generator">Receipts</Link>
//           <Link href="/poster-maker">Posters</Link>
//           <Link href="/id-card-maker">ID Cards</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-sm fixed w-full z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-black">
            <Link href="/">iBiz</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            
              <Link href="/about">About</Link>
           

            {/* <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="space-y-2 px-4 pt-2 pb-4">
          
              <Link href="/about">About</Link>
         
            {/* <Button variant="outline" className="w-full" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button> */}
          </div>
        </div>
      )}
    </nav>
  );
}
