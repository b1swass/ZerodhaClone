import React from "react";

const Award = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            className="w-full max-w-md"
            src="media/largestBroker.svg"
            alt="Largest Stock Broker"
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Largest Stock Broker in India
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            +2 million Zerodha clients contribute to over{" "}
            <span className="font-medium text-gray-900">15%</span> of retail
            order volume in India daily by trading and investing.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ul className="space-y-2 text-gray-700">
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>

            <ul className="space-y-2 text-gray-700">
              <li>Stocks and IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and G-Secs</li>
            </ul>
            <img className="w-full h-full" src="/media/pressLogos.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Award;
