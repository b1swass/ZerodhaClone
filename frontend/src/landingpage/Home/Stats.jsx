import React from "react";

const Stats = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
        Trust with confidence
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left content */}
        <div className="space-y-10">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Customer-first always
            </h2>
            <p className="text-gray-600 leading-relaxed">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              No spam or gimmicks
            </h2>
            <p className="text-gray-600 leading-relaxed">
              No gimmicks, spam, gamification, or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              The Zerodha universe
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Do better with money
            </h2>
            <p className="text-gray-600 leading-relaxed">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="flex flex-col items-center space-y-6">
          <img
            className="w-full max-w-md"
            src="media/ecosystem.png"
            alt="Zerodha Ecosystem"
          />

          <div className="flex gap-6 text-blue-600 font-medium">
            <a
              href=""
              className="hover:text-blue-700 transition-colors duration-200">
              Explore our products →
            </a>

            <a
              href=""
              className="hover:text-blue-700 transition-colors duration-200">
              Try Kite →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
