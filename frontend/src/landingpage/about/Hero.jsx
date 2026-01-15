import React from "react";

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Heading */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
            We pioneered the discount broking model in India.
            <br />
            <span className="text-gray-600">
              Now, we are breaking ground with our technology.
            </span>
          </h1>
          <div className="mt-8 w-20 h-1 bg-gray-300 rounded-full"></div>
        </div>
        {/* Right Content */}
        <div className="space-y-10">
          <p className="text-lg text-gray-600 leading-relaxed">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
            <br />
            <br />
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
            <br />
            <br />
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
            <br />
            <br />
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
            <br />
            <br />
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
