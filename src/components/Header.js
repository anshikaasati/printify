import React, { useState } from "react";
import logo from '../assets/logo.svg';

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [activeButton, setActiveButton] = useState("signup");
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  return (
    <header className="fixed w-full top-0 left-0 bg-white shadow-md z-50 ">
      <div className="flex justify-evenly items-center p-5">
        <div className="flex">
        <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
        <div className="logo text-2xl font-bold text-green-500">Printify</div>
        </div>
        
        {/* Hamburger Menu Button */}
        <button
          className="block sm:hidden text-gray-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links (hidden on mobile, shown on large screens) */}
        <nav className="hidden sm:flex space-x-4">
          {["Catalog", "How it works", "Pricing", "Blog", "Services", "Use-cases", "Need help?"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className={`text-gray-600 ${
                activeLink === link ? "text-green-500" : ""
              }`}
              onClick={() => setActiveLink(link)}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Log in and Sign up Buttons (hidden on mobile, shown on large screens) */}
        <div className="hidden sm:flex space-x-2">
          <button
            className={`${
              activeButton === "login"
                ? "bg-green-500 text-white px-4 py-2 rounded-md"
                : "text-gray-600 px-4 py-2"
            }`}
            onClick={() => setActiveButton("login")}
          >
            Log in
          </button>
          <button
            className={`${
              activeButton === "signup"
                ? "bg-green-500 text-white px-4 py-2 rounded-md"
                : "text-gray-600 px-4 py-2"
            }`}
            onClick={() => setActiveButton("signup")}
          >
            Sign up
          </button>
        </div>

        {/* Dropdown menu for mobile */}
        {menuOpen && (
          <div className="sm:hidden absolute top-16 right-0 bg-white shadow-md p-5 w-full">
            <nav className="flex flex-col space-y-4">
              {["Catalog", "How it works", "Pricing", "Blog", "Services", "Use-cases", "Need help?"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`text-gray-600 ${
                    activeLink === link ? "text-green-500" : ""
                  }`}
                  onClick={() => {
                    setActiveLink(link);
                    setMenuOpen(false); // Close menu on click
                  }}
                >
                  {link}
                </a>
              ))}
            </nav>
            <div className="flex flex-col space-y-2 mt-4">
              <button
                className={`${
                  activeButton === "login"
                    ? "bg-green-500 text-white px-4 py-2 rounded-md"
                    : "text-gray-600 px-4 py-2"
                }`}
                onClick={() => {
                  setActiveButton("login");
                  setMenuOpen(false); // Close menu on click
                }}
              >
                Log in
              </button>
              <button
                className={`${
                  activeButton === "signup"
                    ? "bg-green-500 text-white px-4 py-2 rounded-md"
                    : "text-gray-600 px-4 py-2"
                }`}
                onClick={() => {
                  setActiveButton("signup");
                  setMenuOpen(false); // Close menu on click
                }}
              >
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
