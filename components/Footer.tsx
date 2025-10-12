import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <p>
            Contact: info@ibiz.name.ng | |
            Phone: 07036580994 | |
            Address: No.4 Chief Oge Close, Iwofe, Port Harcourt.
          </p><span>Powered By <Link  href="https://jktl.com.ng" target="_blank" className="text-blue-600">JKLT</Link></span>
          <p>
            © {new Date().getFullYear()} iBiz — Free tools for Freelancers and
            Businesses.
          </p>
          <div className="flex gap-4">
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy & Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
