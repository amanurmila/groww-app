// components/StockSection.jsx

import {
  FaUtensils,
  FaUniversity,
  FaBuilding,
  FaShip,
  FaHome,
  FaSyringe,
  FaOilCan,
  FaCar,
} from "react-icons/fa";

const stocks = {
  mostTraded: [
    {
      name: "Swiggy",
      price: 343.95,
      change: 38.65,
      percent: 12.66,
      icon: <FaUtensils />,
      iconBg: "#FFE8E0",
      iconColor: "#EC5228",
      positive: true,
    },
    {
      name: "Kotak Mahindra Bank",
      price: 2084.9,
      change: -100.3,
      percent: 4.59,
      icon: <FaUniversity />,
      iconBg: "#E0F0FF",
      iconColor: "#003366",
      positive: false,
    },
    {
      name: "TCS",
      price: 3454.3,
      change: 9.6,
      percent: 0.28,
      icon: <FaBuilding />,
      iconBg: "#F5E0FF",
      iconColor: "#D91D77",
      positive: true,
    },
    {
      name: "Mazagon Dock Ship",
      price: 3099.5,
      change: 102.9,
      percent: 3.43,
      icon: <FaShip />,
      iconBg: "#FFF9E0",
      iconColor: "#D4A100",
      positive: true,
    },
  ],
  inNews: [
    {
      name: "Can Fin Homes",
      price: 715.2,
      change: -3.55,
      percent: 0.49,
      icon: <FaHome />,
      iconBg: "#E0F7FA",
      iconColor: "#007B83",
      positive: false,
    },
    {
      name: "Wockhardt",
      price: 1294.8,
      change: -15.3,
      percent: 1.17,
      icon: <FaSyringe />,
      iconBg: "#FFE0E6",
      iconColor: "#C30010",
      positive: false,
    },
    {
      name: "ONGC",
      price: 239.2,
      change: -4.22,
      percent: 1.73,
      icon: <FaOilCan />,
      iconBg: "#FDEFE0",
      iconColor: "#B24500",
      positive: false,
    },
    {
      name: "Mahindra & Mahindra",
      price: 3021.5,
      change: 95.3,
      percent: 3.26,
      icon: <FaCar />,
      iconBg: "#FFF0F0",
      iconColor: "#E10000",
      positive: true,
    },
  ],
};

const StockCard = ({
  name,
  price,
  change,
  percent,
  icon,
  iconBg,
  iconColor,
  positive,
}) => (
  <div className="bg-white rounded-xl shadow p-4 flex flex-col items-start gap-2 hover:shadow-md transition-shadow duration-200">
    <div
      className="p-2 rounded-md text-3xl"
      style={{ backgroundColor: iconBg, color: iconColor }}
    >
      {icon}
    </div>
    <h3 className="font-semibold text-gray-800">{name}</h3>
    <p className="text-lg font-medium text-gray-900">₹{price.toFixed(2)}</p>
    <p
      className={`text-sm font-medium ${
        positive ? "text-green-600" : "text-red-500"
      }`}
    >
      {positive ? "+" : "-"}
      {Math.abs(change).toFixed(2)} ({Math.abs(percent).toFixed(2)}%)
    </p>
  </div>
);

const StockSection = () => {
  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      {/* Most Traded Section */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">
            Most traded in MTF
          </h2>
          <a href="#" className="text-sm text-green-600 hover:underline">
            See more
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stocks.mostTraded.map((stock, idx) => (
            <StockCard key={idx} {...stock} />
          ))}
        </div>
      </div>

      {/* Stocks in News Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Stocks in News</h2>
          <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
            News
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stocks.inNews.map((stock, idx) => (
            <StockCard key={idx} {...stock} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StockSection;
