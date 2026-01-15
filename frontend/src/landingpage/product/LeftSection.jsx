import React from "react";

const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={imageUrl}
            alt={productName}
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{productName}</h1>
          <p className="text-gray-700">{productDescription}</p>

          {/* Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
            {learnMore && (
              <a
                href={learnMore}
                className="px-4 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition">
                Learn More
              </a>
            )}
            {tryDemo && (
              <a
                href={tryDemo}
                className="px-4 py-2 border border-blue-600 text-blue-600 text-center rounded-lg hover:bg-blue-50 transition">
                Try Demo
              </a>
            )}

            <a href={appStore} className="flex justify-center">
              <img
                src="/media/appstoreBadge.svg"
                alt="App Store"
                className="h-12"
              />
            </a>

            <a href={googlePlay} className="flex justify-center">
              <img
                src="/media/googlePlayBadge.svg"
                alt="Google Play"
                className="h-12"
              />
            </a>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSection;
