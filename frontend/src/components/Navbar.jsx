import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md mb-5 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src="media/logo.svg" alt="Logo" />
          </div>

          {/* Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="/signup"
              className="text-gray-700 hover:text-blue-500 font-medium">
              Signup
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-blue-500 font-medium">
              About
            </a>
            <a
              href="/products"
              className="text-gray-700 hover:text-blue-500 font-medium">
              Products
            </a>
            <a
              href="/pricing"
              className="text-gray-700 hover:text-blue-500 font-medium">
              Pricing
            </a>
            <a
              href="/support"
              className="text-gray-700 hover:text-blue-500 font-medium">
              Support
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
