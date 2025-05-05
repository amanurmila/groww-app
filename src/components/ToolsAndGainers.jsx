"use client";

import {
  FaChartBar,
  FaCalendarAlt,
  FaHourglassHalf,
  FaBullhorn,
  FaFilter,
} from "react-icons/fa";

const products = [
  { name: "Terminal", icon: <FaChartBar size={24} /> },
  { name: "Events", icon: <FaCalendarAlt size={24} /> },
  { name: "Intraday", icon: <FaHourglassHalf size={24} /> },
  { name: "IPO", icon: <FaBullhorn size={24} />, badge: "4" },
  { name: "Screener", icon: <FaFilter size={24} /> },
];

const topGainers = [
  {
    name: "Swiggy",
    price: "₹343.95",
    change: "38.65 (12.66%)",
    logo: "Groww",
  },
  {
    name: "Adani Enterprises",
    price: "₹2,455.50",
    change: "161.30 (7.03%)",
    logo: "Adaani",
  },
  {
    name: "Adani Green Energy",
    price: "₹965.70",
    change: "60.45 (6.68%)",
    logo: "Adaani",
  },
  {
    name: "Adani Ports",
    price: "₹1,347.10",
    change: "80.00 (6.31%)",
    logo: "Adaani",
  },
];

export default function ToolsAndGainers() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-10 space-y-12">
      {/* Products & Tools */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Products & Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {products.map((tool, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col items-center hover:shadow-md transition"
            >
              <div className="text-primary mb-3">{tool.icon}</div>
              <span className="text-sm font-medium text-gray-700">
                {tool.name}
              </span>
              {tool.badge && (
                <span className="absolute top-2 right-3 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {tool.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Top Gainers */}
      <div>
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold text-gray-800">Top Gainers</h2>
          <a href="#" className="text-primary text-sm font-semibold">
            See more
          </a>
        </div>

        {/* Gainer Category Buttons */}
        <div className="flex gap-3 mb-6">
          {["Large", "Mid", "Small"].map((size, idx) => (
            <button
              key={idx}
              className={`btn btn-sm rounded-full px-4 ${
                size === "Large"
                  ? "btn-primary text-white"
                  : "btn-outline border-gray-300 text-gray-600"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Gainer Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {topGainers.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 text-center hover:shadow-md transition"
            >
              <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {item.logo}
              </h2>
              <h3 className="font-semibold text-sm text-gray-800 mb-1">
                {item.name}
              </h3>
              <p className="text-base font-bold text-gray-900">{item.price}</p>
              <p className="text-green-600 text-sm font-medium">
                {item.change}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
