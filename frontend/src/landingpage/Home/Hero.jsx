import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex items-center flex-col">
        <img
          className="flex items-center w-5xl h-100"
          src="/media/homeHero.png"
          alt=""
        />
        <div className="text-center max-w-xl mx-auto space-y-4 py-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Invest in everything
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          <button className="mt-4 inline-flex items-center justify-center bg-blue-600 text-white font-medium px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
