import Head from "next/head";
import Image from "next/image"

export default function EcommercePricing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Pricing - Online Stores for Business</title>
        <meta
          name="description"
          content="Pricing plans for professional online stores designed to boost sales."
        />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            eCommerce Pricing
          </h1>
          <p className="mt-2 text-lg text-gray-600 text-center">
            Sell online with fast, secure, and easy-to-manage stores.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Store Tier */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative flex justify-center items-center p-6">
                            <Image
                              src="/ecommerce-ibiz.png"
                              alt="E-commerce Website"
                              className="object-contain"
                              width={400}
                              height={200}
                            />
                          </div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Starter Store
            </h2>
            <p className="mt-2 text-gray-600">₦750,000 - ₦1,500,000</p>
            <p className="mt-2 text-sm text-gray-500">
              For small businesses starting to sell online.
            </p>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>Up to 50 products with options</li>
              <li>Easy product and order management</li>
              <li>Secure checkout with local payments</li>
              <li>Basic stock tracking system</li>
              <li>Works on phones with app-like feel</li>
              <li>Search engine setup for products</li>
              <li>Free domain and hosting for 1 year</li>
              <li>Basic training for your team</li>
            </ul>
            <div className="mt-6">
              <a
                href="/contact"
                className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Get a Quote
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <p>
                <strong>Not Included/Extras:</strong>
              </p>
              <ul className="list-disc pl-5">
                <li>No advanced search or filters</li>
                <li>Add bulk sales portal: +₦300k</li>
                <li>Custom shipping rules: +₦200k</li>
              </ul>
            </div>
          </div>

          {/* Professional Store Tier */}
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-600">
               <div className="relative flex justify-center items-center p-6">
                            <Image
                              src="/ecommerce-ibiz.png"
                              alt="E-commerce Website"
                              className="object-contain"
                              width={400}
                              height={200}
                            />
                          </div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Professional Store
            </h2>
            <p className="mt-2 text-gray-600">₦1,800,000 - ₦3,500,000</p>
            <p className="mt-2 text-sm text-gray-500">
              For growing businesses wanting more sales tools.
            </p>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>Up to 500 products with options</li>
              <li>Advanced product management tools</li>
              <li>Product search and category filters</li>
              <li>Multiple payment options</li>
              <li>Real-time stock updates</li>
              <li>Fast, app-like store on all devices</li>
              <li>Sales reports and insights</li>
              <li>Reminders for abandoned carts</li>
              <li>Discounts and promo codes</li>
              <li>2 months of support</li>
            </ul>
            <div className="mt-6">
              <a
                href="/contact"
                className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Get a Quote
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <p>
                <strong>Not Included/Extras:</strong>
              </p>
              <ul className="list-disc pl-5">
                <li>No multi-seller or B2B features</li>
                <li>Add subscriptions: +₦400k</li>
                <li>Add detailed analytics: +₦300k</li>
              </ul>
            </div>
          </div>

          {/* Enterprise Store Tier */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative flex justify-center items-center p-6">
              <Image
                src="/ecommerce-ibiz.png"
                alt="E-commerce Website"
                className="object-contain"
                width={400}
                height={200}
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Enterprise Store
            </h2>
            <p className="mt-2 text-gray-600">₦5,000,000 - ₦15,000,000+</p>
            <p className="mt-2 text-sm text-gray-500">
              For large retailers or marketplaces with big goals.
            </p>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>Unlimited products and options</li>
              <li>Top-tier management tools</li>
              <li>Multi-seller marketplace setup</li>
              <li>Business-to-business features</li>
              <li>Advanced shipping and logistics</li>
              <li>App-like store with top speed</li>
              <li>Detailed sales and customer reports</li>
              <li>Smart product suggestions</li>
              <li>Custom business system integration</li>
              <li>6 months support + dedicated manager</li>
            </ul>
            <div className="mt-6">
              <a
                href="/contact"
                className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Get a Quote
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <p>
                <strong>Not Included/Extras:</strong>
              </p>
              <ul className="list-disc pl-5">
                <li>Built for your exact needs</li>
                <li>Add mobile app: +₦3M+</li>
                <li>Add smart AI features: +₦2M+</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className=" text-black py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>
            Fast, secure online stores to grow your sales. Free consultation
            included.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Start Selling Online
          </a>
        </div>
      </footer>
    </div>
  );
}
