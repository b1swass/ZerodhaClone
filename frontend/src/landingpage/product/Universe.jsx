import React from "react";

const Universe = () => {
  return (
    <section className=" max-w-6xl mx-auto px-6 py-24">
      <div className="flex justify-between flex-col items-center mb-3">
        <h1 className="font-bold text-3xl mb-4">The Zerodha Universe</h1> <br />
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        {/* TOP LAYER */}
        <div className="grids grid-cols-3 gap-5 flex mb-8 mt-3 ">
          <div className="max-w-xs bg-white rounded-xl shadow-lg mx-auto p-4 text-center">
            <img
              src="/media/zerodhaFundhouse.png"
              alt="Zerodha Fundhouse"
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-700 text-sm">
              Our asset management venture that is creating simple and
              transparent index to help save your fund
            </p>
          </div>

          <div className="max-w-xs bg-white rounded-xl shadow-lg mx-auto p-4 text-center">
            <img
              src="/media/dittoLogo.png"
              alt="Zerodha Fundhouse"
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-700 text-sm">
              Our asset management venture that is creating simple and
              transparent index to help save your fund
            </p>
          </div>
          <div className="max-w-xs bg-white rounded-xl shadow-lg mx-auto p-4 text-center">
            <img
              src="/media/goldenpiLogo.png"
              alt="Zerodha Fundhouse"
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-700 text-sm">
              Our asset management venture that is creating simple and
              transparent index to help save your fund
            </p>
          </div>
        </div>
        {/* Second Layer */}
        <div className="grids grid-cols-3 flex gap-5">
          <div className="max-w-xs bg-white rounded-xl shadow-lg mx-auto p-4 text-center">
            <img
              src="/media/streakLogo.png"
              alt="Zerodha Fundhouse"
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-700 text-sm">
              Our asset management venture that is creating simple and
              transparent index to help save your fund
            </p>
          </div>
          <div className="max-w-xs bg-white rounded-xl shadow-lg mx-auto p-4 text-center">
            <img
              src="/media/sensibullLogo.svg"
              alt="Zerodha Fundhouse"
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-700 text-sm">
              Our asset management venture that is creating simple and
              transparent index to help save your fund
            </p>
          </div>
          <div className="max-w-xs bg-white rounded-xl shadow-lg mx-auto p-4 text-center">
            <img
              src="/media/smallcaseLogo.png"
              alt="Zerodha Fundhouse"
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-700 text-sm">
              Our asset management venture that is creating simple and
              transparent index to help save your fund
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

export default Universe;
