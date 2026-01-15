import React from "react";

const OpenAccount = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Open a Zerodha account
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>

        <button className="inline-flex items-center justify-center bg-blue-600 text-white font-medium px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200">
          Sign up for free
        </button>
      </div>
    </section>
  );
};

export default OpenAccount;
