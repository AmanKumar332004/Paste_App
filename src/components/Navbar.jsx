import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-5 shadow-lg">
      <div className="container mx-auto flex items-center">
        {/* PasteKeeper logo on the Left */}
        <div className="text-yellow-400 text-2xl font-semibold">
          PasteKeeper
        </div>

        {/* Centered Navigation Links */}
        <div className="flex-1 flex justify-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive
                  ? "text-yellow-400 underline"
                  : "text-gray-300 hover:text-yellow-400"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/pastes"
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive
                  ? "text-yellow-400 underline"
                  : "text-gray-300 hover:text-yellow-400"
              }`
            }
          >
            Pastes
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
