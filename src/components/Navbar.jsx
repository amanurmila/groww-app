"use client";

import { useState } from "react";
import { FiBell, FiShoppingCart, FiGrid, FiSearch } from "react-icons/fi";
import { HiMenu, HiSearch } from "react-icons/hi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar bg-white shadow-md px-4 lg:px-8">
      {/* Left Section */}
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-green-400 flex items-center justify-center">
            <span className="text-white font-bold">G</span>
          </div>
          <span className="font-bold text-lg text-gray-800">Groww</span>
        </div>
      </div>

      {/* Middle Section */}
      <div className="hidden lg:flex items-center gap-6 flex-[2] justify-center">
        <a className="text-green-600 font-medium cursor-pointer">Explore</a>
        <a className="text-gray-600 font-medium cursor-pointer">Dashboard</a>

        {/* Search Box with Icon */}
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>

      {/* Right Section */}
      <div className="flex-none gap-4 items-center hidden lg:flex">
        <FiBell className="w-5 h-5 text-gray-700 cursor-pointer" />
        <FiGrid className="w-5 h-5 text-gray-700 cursor-pointer" />
        <FiShoppingCart className="w-5 h-5 text-gray-700 cursor-pointer" />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="avatar placeholder">
            <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
              P
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-40 mt-3"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Hamburger for Mobile */}
      <div className="lg:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <HiMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 flex flex-col gap-4 lg:hidden z-50">
          <a className="text-green-600 font-medium cursor-pointer">Explore</a>
          <a className="text-gray-600 font-medium cursor-pointer">Dashboard</a>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
          <div className="flex gap-4">
            <FiBell className="w-5 h-5 text-gray-700 cursor-pointer" />
            <FiGrid className="w-5 h-5 text-gray-700 cursor-pointer" />
            <FiShoppingCart className="w-5 h-5 text-gray-700 cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  );
}
