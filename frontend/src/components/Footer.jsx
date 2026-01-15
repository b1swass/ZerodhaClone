import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-20 bg-white bg-opacity-90 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo */}
        <div className="flex justify-center md:justify-start mb-12">
          <img src="media/logo.svg" alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          {/* Products */}
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="/kite" className="hover:text-blue-500 transition">
                  Kite
                </a>
              </li>
              <li>
                <a href="/console" className="hover:text-blue-500 transition">
                  Console
                </a>
              </li>
              <li>
                <a href="/coin" className="hover:text-blue-500 transition">
                  Coin
                </a>
              </li>
              <li>
                <a href="/varsity" className="hover:text-blue-500 transition">
                  Varsity
                </a>
              </li>
              <li>
                <a
                  href="/smallcases"
                  className="hover:text-blue-500 transition">
                  Smallcases
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/support" className="hover:text-blue-500 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-500 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-blue-500 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-blue-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-blue-500 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="/press" className="hover:text-blue-500 transition">
                  Press
                </a>
              </li>
              <li>
                <a
                  href="/philosophy"
                  className="hover:text-blue-500 transition">
                  Philosophy
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/ipo" className="hover:text-blue-500 transition">
                  Upcoming IPOs
                </a>
              </li>
              <li>
                <a href="/brokerage" className="hover:text-blue-500 transition">
                  Brokerage Calculator
                </a>
              </li>
              <li>
                <a href="/markets" className="hover:text-blue-500 transition">
                  Markets
                </a>
              </li>
              <li>
                <a
                  href="/economic-calendar"
                  className="hover:text-blue-500 transition">
                  Economic Calendar
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="hover:text-blue-500 transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-blue-500 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/disclosure"
                  className="hover:text-blue-500 transition">
                  Disclosure
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://twitter.com"
              className="hover:text-blue-500 transition">
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-blue-500 transition">
              LinkedIn
            </a>
            <a
              href="https://youtube.com"
              className="hover:text-blue-500 transition">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
