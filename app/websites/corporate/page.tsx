import Head from 'next/head';

export default function CorporatePricing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Pricing - Professional Business Websites</title>
        <meta name="description" content="Pricing plans for professional business websites designed to grow your brand." />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">Pricing Plans</h1>
          <p className="mt-2 text-lg text-gray-600 text-center">Beautiful, easy-to-manage websites to boost your business.</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Tier */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900">Starter</h2>
            <p className="mt-2 text-gray-600">₦350,000 - ₦750,000</p>
            <p className="mt-2 text-sm text-gray-500">Great for small businesses wanting a professional online presence.</p>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>Up to 10 pages (e.g., home, about, services)</li>
              <li>Easy content updates from your team</li>
              <li>Works perfectly on phones and laptops</li>
              <li>Simple contact form for customer inquiries</li>
              <li>Search engine setup to get found online</li>
              <li>Free domain and hosting for 1 year</li>
              <li>1 round of changes and basic training</li>
            </ul>
            <div className="mt-6">
              <a href="/contact" className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Get a Quote</a>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <p><strong>Not Included/Extras:</strong></p>
              <ul className="list-disc pl-5">
                <li>No advanced tools (e.g., customer tracking)</li>
                <li>Add online store: +₦200k</li>
                <li>Add animations: +₦100k</li>
              </ul>
            </div>
          </div>

          {/* Professional Tier */}
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-600">
            <h2 className="text-2xl font-semibold text-gray-900">Professional</h2>
            <p className="mt-2 text-gray-600">₦800,000 - ₦1,800,000</p>
            <p className="mt-2 text-sm text-gray-500">For growing businesses needing advanced tools and style.</p>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>Up to 20 pages with custom content</li>
              <li>Advanced content management system</li>
              <li>Fast, mobile-friendly, app-like experience</li>
              <li>Enhanced contact forms for better leads</li>
              <li>Full search engine optimization</li>
              <li>Basic security and speed boosts</li>
              <li>2 rounds of changes, 1-month support</li>
              <li>Full training for your team</li>
            </ul>
            <div className="mt-6">
              <a href="/contact" className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Get a Quote</a>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <p><strong>Not Included/Extras:</strong></p>
              <ul className="list-disc pl-5">
                <li>No large-scale features or custom apps</li>
                <li>Add integrations (e.g., CRM): +₦300k</li>
                <li>Add multiple languages: +₦150k</li>
              </ul>
            </div>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900">Enterprise</h2>
            <p className="mt-2 text-gray-600">₦2,500,000 - ₦5,000,000+</p>
            <p className="mt-2 text-sm text-gray-500">Premium websites for large companies with big goals.</p>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>Unlimited pages and custom designs</li>
              <li>Top-tier content management tools</li>
              <li>App-like website for all devices</li>
              <li>Advanced forms for lead generation</li>
              <li>Complete search engine strategy</li>
              <li>High-speed, secure, and scalable</li>
              <li>Compliance for regulations</li>
              <li>Unlimited changes, 6-month support</li>
            </ul>
            <div className="mt-6">
              <a href="/contact" className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Get a Quote</a>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <p><strong>Not Included/Extras:</strong></p>
              <ul className="list-disc pl-5">
                <li>Fully custom-built for your needs</li>
                <li>Add mobile app: +₦1M+</li>
                <li>Add smart features (e.g., AI): +₦500k</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>Custom business websites designed to grow your brand. Contact us for a free consultation.</p>
          <a href="/contact" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}