import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-6">
        {/* Left: Market Indices */}
        <div className="flex items-center gap-10 text-sm">
          <div className="flex gap-2">
            <span className="font-medium text-gray-600">NIFTY 50</span>
            <span className="text-red-500">100.2</span>
          </div>

          <div className="flex gap-2">
            <span className="font-medium text-gray-600">SENSEX</span>
            <span className="text-red-500">100.4</span>
          </div>
        </div>

        {/* Right: Menu */}
        <Menu />
      </div>
    </div>
  );
};

export default TopBar;
