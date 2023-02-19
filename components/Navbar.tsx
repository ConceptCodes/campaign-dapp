import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white shadow-md items-center sticky top-0 z-50 border-b p-3">
      <div className="flex items-center">
        <img src="/logo.svg" alt="Logo" className="w-8 h-8 mr-2" />
        <span className="font-medium text-lg">Sponzee</span>
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="py-1 px-4 rounded-lg border w-96 bg-gray-100 focus:outline-none focus:bg-white"
        />
      </div>
      <ConnectWallet colorMode="dark" accentColor="#211BDF" />
    </nav>
  );
};

export default Navbar;
