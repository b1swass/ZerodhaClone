import React from "react";

const Menu = () => {
  return (
    <nav className="sticky top-0 z-40 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-6 gap-5">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="vite.svg" alt="logo" className="h-6 w-6" />
          <span className="text-sm font-semibold text-gray-800"></span>
        </a>

        {/* Menu Links */}
        <div className="flex items-center gap-8 text-sm">
          {["Dashboard", "Orders", "Holdings", "Positions", "Bids"].map(
            (item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-gray-500 transition-colors hover:text-gray-900">
                {item}
              </a>
            ),
          )}
        </div>

        {/* Right Profile */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-700">
          U
        </div>
      </div>
    </nav>
  );
};

export default Menu;
