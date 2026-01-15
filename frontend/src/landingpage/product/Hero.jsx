import React from "react";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 ">
      <div className="flex justify-between flex-col items-center">
        <h1 className="text-3xl font-bold mb-2">Zerodha Products</h1>

        <p className="mb-3 text-2xl">
          Sleek, modern, and intuitive trading platforms
        </p>

        <p>
          Check out our{" "}
          <span className="text-blue-400 hover:text-blue-800">
            investment offerings →
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
