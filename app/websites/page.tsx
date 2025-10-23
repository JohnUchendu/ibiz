import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="container mx-auto px-6 py-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Bespoke Digital Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Elevate your business with stunning corporate websites and powerful e-commerce platforms.
          </p>
          <Link
            href="#explore"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
          >
            Explore Now
          </Link>
        </div>
        <div className="relative flex justify-center items-center py-10">
          <Image
            src="/hero.jpg"
            alt="Hero image"
            className="object-contain"
            width={800}
            height={400}
            priority
          />
        </div>
      </header>

      {/* Features Section */}
      <section id="explore" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Corporate Website Card */}
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
              <div className="relative flex justify-center items-center p-6">
                <Image
                  src="/business-ibiz.png"
                  alt="Corporate Website"
                  className="object-contain"
                  width={400}
                  height={200}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Corporate Websites
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional, sleek, and tailored websites to showcase your brand&apos;s identity and values.
                </p>
                <Link
                  href="/websites/business"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                >
                  Discover Business Solutions
                </Link>
              </div>
            </div>

            {/* E-commerce Website Card */}
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
              <div className="relative flex justify-center items-center p-6">
                <Image
                  src="/ecommerce-ibiz.png"
                  alt="E-commerce Website"
                  className="object-contain"
                  width={400}
                  height={200}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  E-commerce Platforms
                </h3>
                <p className="text-gray-600 mb-4">
                  Seamless, scalable online stores designed to drive sales and engage customers.
                </p>
                <Link
                  href="/websites/online-store"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                >
                  Explore Online Stores
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Partner with us to create a website that reflects your vision and drives results.
          </p>
          <Link
            href="/websites/business"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

    
    </div>
  );
}