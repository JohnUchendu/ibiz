import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold">iBiz</Link>
        <nav className="text-sm flex gap-4">
          <Link href="/qr-code-generator">QR Codes</Link>
          <Link href="/invoice-generator">Invoices</Link>
          <Link href="/receipt-generator">Receipts</Link>
          <Link href="/poster-maker">Posters</Link>
          <Link href="/id-card-maker">ID Cards</Link>
        </nav>
      </div>
    </header>
  );
}
