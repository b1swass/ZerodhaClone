import React from "react";

const Pricing = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Pricing
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a
            href=""
            className="inline-block text-blue-600 font-medium hover:text-blue-700 transition-colors">
            See pricing →
          </a>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
          <img
            className="w-28"
            src="media/pricingEquity.svg"
            alt="Equity Pricing"
          />
          <img
            className="w-28"
            src="media/pricingMF.svg"
            alt="Mutual Fund Pricing"
          />
          <img
            className="w-28"
            src="media/intradayTrades.svg"
            alt="Zero Brokerage"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
