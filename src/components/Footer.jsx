import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500" />
              <span className="font-bold text-xl">Groww</span>
            </div>
            <p className="text-gray-600 mb-1">
              Vaishnavi Tech Park, South Tower, 3rd Floor
            </p>
            <p className="text-gray-600 mb-1">Sarjapur Main Road, Bellandur</p>
            <p className="text-gray-600 mb-1">Bengaluru – 560103</p>
            <p className="text-gray-600">Karnataka</p>
            <a href="#" className="text-blue-500 underline text-sm">
              Contact Us
            </a>
            <div className="flex gap-3 mt-4 text-xl">
              <FaFacebookF className="text-blue-600 hover:opacity-80" />
              <FaTwitter className="text-sky-400 hover:opacity-80" />
              <FaInstagram className="text-pink-500 hover:opacity-80" />
              <FaYoutube className="text-red-600 hover:opacity-80" />
              <FaLinkedinIn className="text-blue-700 hover:opacity-80" />
              <FaTelegramPlane className="text-blue-500 hover:opacity-80" />
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
            <div>
              <h3 className="font-semibold mb-2">PRODUCTS</h3>
              {[
                "Stocks",
                "Futures & Options",
                "MTF",
                "IPO",
                "Mutual Funds",
                "NFO",
                "ETF",
                "Algo Trading",
              ].map((item) => (
                <p
                  key={item}
                  className="text-gray-600 hover:text-black cursor-pointer"
                >
                  {item}
                </p>
              ))}
            </div>
            <div>
              <h3 className="font-semibold mb-2">GROWW</h3>
              {[
                "About Us",
                "Pricing",
                "Blog",
                "Media & Press",
                "Careers",
                "Help and Support",
              ].map((item) => (
                <p
                  key={item}
                  className="text-gray-600 hover:text-black cursor-pointer"
                >
                  {item}
                </p>
              ))}
            </div>
            <div>
              <h3 className="font-semibold mb-2">QUICK LINKS</h3>
              {[
                "AMC Mutual Funds",
                "Calculators",
                "Glossary",
                "Open Demat Account",
                "Groww Digest",
                "Sitemap",
                "Income Tax Calculator",
                "FII DII",
              ].map((item) => (
                <p
                  key={item}
                  className="text-gray-600 hover:text-black cursor-pointer"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="my-6 border-t border-gray-300"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4">
          <div className="flex items-center gap-2">
            <AiOutlineCopyright /> 2016–2025 Groww. All rights reserved, Built
            with <span className="text-red-500">❤️</span> in India
          </div>
          <div className="flex gap-2">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Play Store"
              className="h-10"
            />
          </div>
        </div>

        <div className="mt-10 text-gray-600 text-xs leading-relaxed space-y-3">
          <p className="font-semibold">MOST POPULAR ON GROWW</p>
          <p>
            <strong>STOCK MARKET INDICES:</strong>{" "}
            <span className="text-green-600">
              S&P BSE SENSEX | S&P BSE 100 | NIFTY 100 | NIFTY 50 | NIFTY MIDCAP
              100 | NIFTY BANK | NIFTY NEXT 50
            </span>
          </p>
          <p>
            <strong>POPULAR MUTUAL FUNDS:</strong>{" "}
            <span className="text-green-600">
              QUANT SMALL CAP FUND | ICICI PRUDENTIAL COMMODITIES FUND | NIPPON
              INDIA SMALL CAP FUND | PARAG PARIKH FLEXI CAP FUND
            </span>{" "}
            ...
          </p>
          <p>
            <strong>MUTUAL FUNDS COMPANIES:</strong>{" "}
            <span className="text-green-600">
              GROWWMF | SBI | AXIS | HDFC | UTI | ...
            </span>
          </p>
          <p>
            <strong>TOOLS:</strong>{" "}
            <span className="text-green-600">
              BROKERAGE CALCULATOR | SIP CALCULATOR | SWP CALCULATOR | ...
            </span>
          </p>
          <p>
            <strong>OTHERS:</strong> NSE | BSE |{" "}
            <span className="underline">Terms and Conditions</span> |{" "}
            <span className="underline">Privacy Policy</span> |{" "}
            <span className="underline">Bug Bounty</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
