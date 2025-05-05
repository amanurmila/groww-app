"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const sampleData = {
  Stocks: {
    indices: [
      { name: "NIFTY", value: "24,461.15", change: "+114.45 (0.47%)" },
      { name: "SENSEX", value: "80,796.84", change: "+294.85 (0.37%)" },
      { name: "BANKNIFTY", value: "54,919.50", change: "-195.85 (0.36%)" },
    ],
    traded: [
      { name: "Sonata Software", price: "₹422.30", change: "+1.65 (0.39%)" },
      { name: "Adani Power", price: "₹556.45", change: "+31.25 (5.95%)" },
      { name: "Adani Ports", price: "₹1,347.10", change: "+80.00 (6.31%)" },
      { name: "Swiggy", price: "₹343.95", change: "+38.65 (12.66%)" },
    ],
  },
  FandO: {
    indices: [
      { name: "NIFTY FUT", value: "24,500.00", change: "+120.00 (0.49%)" },
      { name: "BANKNIFTY FUT", value: "55,000.00", change: "-100.00 (0.18%)" },
      { name: "SENSEX FUT", value: "81,000.00", change: "+250.00 (0.31%)" },
    ],
    traded: [
      { name: "TCS", price: "₹3,450.00", change: "+45.00 (1.32%)" },
      { name: "Infosys", price: "₹1,410.25", change: "-15.00 (1.05%)" },
    ],
  },
  MutualFunds: {
    indices: [
      { name: "HDFC Midcap", value: "₹450.75", change: "+12.5 (2.85%)" },
      {
        name: "ICICI Value Discovery",
        value: "₹320.40",
        change: "+10.2 (3.29%)",
      },
    ],
    traded: [
      { name: "Axis Bluechip Fund", price: "₹412.12", change: "+8.12 (2.01%)" },
      { name: "SBI Small Cap Fund", price: "₹132.23", change: "+3.21 (2.49%)" },
    ],
  },
};

export default function HomeSlides() {
  const [activeTab, setActiveTab] = useState("Stocks");

  const renderSlides = () =>
    sampleData[activeTab].indices.map((item, idx) => (
      <SwiperSlide key={idx}>
        <div className="p-4 min-w-[180px] text-center rounded-xl shadow-md bg-white hover:shadow-lg transition duration-300">
          <h3 className="font-semibold text-sm text-gray-600">{item.name}</h3>
          <p className="text-lg font-bold text-gray-800">{item.value}</p>
          <p
            className={`text-sm ${
              item.change.includes("-") ? "text-red-500" : "text-green-600"
            }`}
          >
            {item.change}
          </p>
        </div>
      </SwiperSlide>
    ));

  const renderTraded = () =>
    sampleData[activeTab].traded.map((item, idx) => (
      <div
        key={idx}
        className="rounded-xl shadow-md p-4 text-center bg-white hover:shadow-lg transition duration-300"
      >
        <h3 className="font-medium text-sm text-gray-700">{item.name}</h3>
        <p className="text-lg font-semibold text-gray-900">{item.price}</p>
        <p
          className={`text-sm ${
            item.change.includes("-") ? "text-red-500" : "text-green-600"
          }`}
        >
          {item.change}
        </p>
      </div>
    ));

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-6 mb-6">
            {["Stocks", "FandO", "MutualFunds"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 px-2 font-medium text-sm border-b-2 transition ${
                  activeTab === tab
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-primary"
                }`}
              >
                {tab === "FandO" ? "F&O" : tab.replace(/([A-Z])/g, " $1")}
              </button>
            ))}
          </div>

          {/* Indices Swiper */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-base font-semibold text-gray-800">Indices</h2>
              <div className="flex gap-2 text-gray-400">
                <FaChevronLeft className="cursor-pointer hover:text-primary" />
                <FaChevronRight className="cursor-pointer hover:text-primary" />
              </div>
            </div>
            <Swiper
              spaceBetween={16}
              slidesPerView={2.2}
              breakpoints={{
                640: { slidesPerView: 2.5 },
                768: { slidesPerView: 3.5 },
                1024: { slidesPerView: 4.5 },
              }}
            >
              {renderSlides()}
            </Swiper>
          </div>

          {/* Most Traded */}
          <div>
            <h2 className="text-base font-semibold text-gray-800 mb-3">
              Most traded on Groww
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {renderTraded()}
            </div>
          </div>
        </div>

        {/* Right Column (Watchlist) */}
        <div className="lg:col-span-4">
          <div className="rounded-xl bg-white shadow-md p-6 h-full hover:shadow-lg transition duration-300">
            <h2 className="text-base font-semibold text-gray-800 mb-3">
              All Watchlists
            </h2>
            <p className="mb-2 text-sm text-gray-700">
              Parag's Watchlist <span className="text-gray-500">(5 items)</span>
            </p>
            <button className="btn btn-outline btn-sm w-full mt-4">
              + Create new watchlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
