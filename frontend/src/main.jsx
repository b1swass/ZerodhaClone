import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./landingpage/Home/Home.jsx";
import Signup from "./landingpage/signup/Signup.jsx";
import NotFound from "./landingpage/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AboutPage from "./landingpage/about/AboutPage.jsx";
import SupportPage from "./landingpage/support/SupportPage.jsx";
import PricingPage from "./landingpage/pricing/PricingPage.jsx";
import ProductPage from "./landingpage/product/ProductPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
