import React from "react";

const Education = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            className="w-full max-w-md"
            src="media/education.svg"
            alt="Market Education"
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Free and open market education
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Varsity, the largest online stock market education book in the
            world, covering everything from the basics to advanced trading.
          </p>

          <a
            href=""
            className="inline-block text-blue-600 font-medium hover:text-blue-700 transition-colors">
            Varsity →
          </a>

          <p className="text-gray-600 text-lg leading-relaxed pt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a
            href=""
            className="inline-block text-blue-600 font-medium hover:text-blue-700 transition-colors">
            TradingQ&A →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Education;
