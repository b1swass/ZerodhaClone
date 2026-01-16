import React from "react";

const Teams = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            CEO
          </h1>

          <div className="mt-10">
            <img src="media/nithinKamath.jpg" className="w-72 rounded-xl" />
          </div>

          <div className="mt-8 w-20 h-1 bg-gray-300 rounded-full"></div>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          <h2 className="text-2xl font-medium text-gray-900">Nithin Kamath</h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
            <br />
            <br />
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
            <br />
            <br />
            Playing basketball is his zen.
          </p>

          <div className="flex gap-4 text-sm font-medium text-blue-600">
            <a href="#" className="hover:underline">
              Homepage
            </a>
            <a href="#" className="hover:underline">
              TradingQnA
            </a>
            <a href="#" className="hover:underline">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
