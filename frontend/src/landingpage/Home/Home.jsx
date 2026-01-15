import React from "react";
import Hero from "./Hero";
import Award from "./Award";
import Education from "./Education";
import Stats from "./Stats";
import Pricing from "./Pricing";
import OpenAccount from "../OpenAccount";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div>
      <Hero />
      <Award />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </div>
  );
};

export default Home;
