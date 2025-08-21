import ToolCard from "@/components/ToolCard";
import AdSlot from "@/components/AdSlot";

export default function HomePage() {
  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-10">
        <section className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            Free Tools for All Businesses 🚀
          </h1>
          <p className="mt-3 text-gray-600">
            Generate payment QR codes, invoices, receipts, posters and ID cards
            — fast, free, no signup.
          </p>
        </section>

        <AdSlot />

        <section className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ToolCard
            title="QR Code Generator"
            desc="Create payment or info QR codes for Paystack, Flutterwave, bank transfers, and more."
            href="/qr-code-generator"
          />
          <ToolCard
            title="Invoice Generator"
            desc="Make clean, downloadable PDF invoices in seconds. No Excel needed."
            href="/invoice-generator"
          />
          <ToolCard
            title="Receipt Generator"
            desc="Instant receipts for shops and freelancers — printable PDFs."
            href="/receipt-generator"
          />
          <ToolCard
            title="Poster & Flyer Maker"
            desc="Editable posters: 'Pay by Transfer', 'POS Available', event flyers — export to PDF."
            href="/poster-maker"
          />
          <ToolCard
            title="ID Card Maker"
            desc="Simple ID cards for staff, churches, schools — upload photo, export PDF."
            href="/id-card-maker"
          />
          <ToolCard
            title="Website Builder"
            desc="Get a professional website built for freelancers and business owners. Hosting, SEO & 3 business emails included."
            href="/website-builder"
          />

          <ToolCard
            title="SEO Audit Tool"
            desc="Instantly check your website’s SEO health — metadata, performance, technical SEO & more."
            href="/seo-audit"
          />

          <ToolCard
            title="Business Email"
            desc="Create professional custom emails (you@yourbusiness.com) to build trust with clients."
            href="/business-email"
          />
          {/* Growth Tools */}
          <ToolCard
            title="Logo Maker"
            desc="Design simple, professional logos for your brand or business in minutes."
            href="/logo-maker"
          />

          <ToolCard
            title="Domain Checker"
            desc="Quickly check if your business domain is available and secure your online identity."
            href="/domain-checker"
          />

          <ToolCard
            title="Website Speed Test"
            desc="Analyze your site’s speed and performance, with insights to boost conversions."
            href="/website-speed-test"
          />
          <ToolCard
            title="Letterhead Maker"
            desc="Design professional company letterheads and export them as PDF or Word documents."
            href="/letterhead-maker"
          />

          {/* <ToolCard
            title="SSL/TLS Checker"
            desc="Verify SSL/TLS certificates to ensure your website is secure and trusted."
            href="/ssl-tls-checker"
          /> */}
        </section>

        <AdSlot />

        <section className="mt-10 prose max-w-none">
          <h2 className="text-2xl font-bold">Why these “boring” tools?</h2>
          <p>
            Nigerian SMEs need fast, reliable tools to get paid and look
            professional. These tools are free to use and export to PNG/PDF,
            with no signup or database. Perfect for shops, POS agents, churches,
            schools and events.
          </p>
          <h3 className="text-xl font-semibold mt-6">
            Popular searches we target
          </h3>
          <ul className="list-disc pl-5">
            <li>Free QR code generator </li>
            <li>Invoice template (PDF)</li>
            <li>Generate receipt online </li>
            <li>Free ID card maker </li>
            <li>Free Logo maker </li>
            <li>Free website for businesses</li>
            <li>Business emails for businesses</li>
          </ul>
        </section>
      </main>
    </>
  );
}
