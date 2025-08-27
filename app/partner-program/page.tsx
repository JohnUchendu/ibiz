export default function PartnerProgram() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Start Your Own Web Agency — Without Writing Code
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
          Join the Biz Tool Partner Program and earn ₦24,000 per website sale.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold shadow hover:bg-gray-100">
            Become a Partner
          </button>
          <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-700">
            See How It Works
          </button>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 rounded-2xl shadow bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">Step 1</h3>
            <p>Share your referral link with businesses.</p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">Step 2</h3>
            <p>We build websites for your referrals.</p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">Step 3</h3>
            <p>You get paid up to ₦24,000 per sale.</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Join?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "No upfront cost",
            "Marketing kit included",
            "Recurring commissions",
            "Easy payouts via Paystack/Flutterwave"
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl shadow bg-white font-medium">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Earnings Calculator (static demo) */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Your Earning Potential</h2>
        <p className="text-lg mb-4">
          Refer just <span className="font-bold">10 businesses</span> in a month →
          Earn <span className="font-bold">₦240,000</span>
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-semibold shadow hover:bg-blue-700">
          Start Earning Today
        </button>
      </section>

      {/* Partner Tiers */}
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Partner Levels</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Bronze</h3>
            <p>0–5 sales → 20% commission</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Silver</h3>
            <p>6–15 sales → 25% commission</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Gold</h3>
            <p>15+ sales → 30% commission + bonuses</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <h2 className="text-4xl font-bold mb-6">Turn Your Network Into Income</h2>
        <p className="mb-8 text-lg">Join the Biz Tool Partner Program today and start earning.</p>
        <button className="bg-white text-blue-700 px-8 py-3 rounded-2xl font-semibold shadow hover:bg-gray-100">
          Become a Partner
        </button>
      </section>

     
    </div>
  );
}
