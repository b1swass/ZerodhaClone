import React from "react";

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 mt-3">
      <div className="flex items-center flex-col">
        <div className="flex justify-between flex-col items-center gap-y-6  mb-auto ">
          <h1 className="font-bold text-4xl mb-4">Charges</h1>
          <p className="text-2xl">List of all charges and taxes</p>
        </div>

        {/* PRICING POSTER */}
        <div className="grids grid-cols-3 gap-5 flex mb-8 mt-20">
          <div className="max-w-xs bg-white rounded-xl shadow-lg mx-auto p-4 text-center">
            <img
              src="media/pricing0.svg"
              alt="Zerodha Fundhouse"
              className="w-full h-40 object-contain mb-4"
            />
            <h1 className="text-2xl font-medium mb-2">Free Equity Delivery</h1>
            <p className="text-gray-700 text-sm">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="max-w-xs bg-white rounded-xl shadow-lg mx-auto p-4 text-center">
            <img
              src="media/intradayTrades.svg"
              alt="Zerodha Fundhouse"
              className="w-full h-40 object-contain mb-4"
            />
            <h1 className="text-2xl font-medium mb-2">
              Intraday and F&O trades
            </h1>
            <p className="text-gray-700 text-sm">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="max-w-xs bg-white rounded-xl shadow-lg mx-auto p-4 text-center">
            <img
              src="media/pricing0.svg"
              alt="Zerodha Fundhouse"
              className="w-full h-40 object-contain mb-4"
            />
            <h1 className="text-2xl font-medium mb-2">Free direct MF</h1>
            <p className="text-gray-700 text-sm">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
        <button className="mt-4 inline-flex items-center justify-center bg-blue-600 text-white font-medium px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200">
          Sign up for free
        </button>
      </div>
    </section>
  );
};

export default Hero;
