import React, { useState } from "react";
import logo from '../assets/logo.svg';

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [activeButton, setActiveButton] = useState("signup");
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(""); // State for dropdown toggle

  return (
    <header className="fixed w-full h-20 top-0 left-0 bg-white shadow-md z-50  ">
      <div className="flex justify-between items-center p-3 sm:p-5">
        {/* Hamburger Menu + Logo (Mobile View) */}
        <div className="flex items-center space-x-4">
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

          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
            <div className="hidden sm:block text-2xl font-bold text-green-500">Printify</div>
          </div>
        </div>

        {/* Log in and Sign up Buttons */}
        <div className="flex space-x-2">
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
      </div>

      {/* Navigation Links (Desktop View) */}
      <nav className="hidden sm:flex justify-center space-x-4 relative top-[-50px]"> {/* Shifted navigation links above */}
        {["Catalog", "Pricing", "Blog"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
            className={`text-gray-600 hover:text-green-500 ${
              activeLink === link ? "text-green-500" : ""
            }`}
            onClick={() => setActiveLink(link)}
          >
            {link}
          </a>
        ))}

        {/* Dropdown for "How it works" */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen("how-it-works")}
          onMouseLeave={() => setDropdownOpen("")}
        >
          <button
            className={`text-gray-600 hover:text-green-500 flex items-center space-x-1 ${
              activeLink === "How it works" ? "text-green-500" : ""
            }`}
          >
            <span>How it works</span>
            <svg
              className={`w-4 h-4 transform transition-transform duration-300 ${
                dropdownOpen === "how-it-works" ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {dropdownOpen === "how-it-works" && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
              <a href="#onboarding" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                Onboarding
              </a>
              <a href="#shipping" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                Shipping
              </a>
              <a href="#fulfillment" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                Fulfillment
              </a>
            </div>
          )}
        </div>

        {/* Dropdown for "Services" */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen("services")}
          onMouseLeave={() => setDropdownOpen("")}
        >
          <button
            className={`text-gray-600 hover:text-green-500 flex items-center space-x-1 ${
              activeLink === "Services" ? "text-green-500" : ""
            }`}
          >
            <span>Services</span>
            <svg
              className={`w-4 h-4 transform transition-transform duration-300 ${
                dropdownOpen === "services" ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {dropdownOpen === "services" && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
              <a href="#custom-design" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                Custom Design
              </a>
              <a href="#dropshipping" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                Dropshipping
              </a>
              <a href="#printing" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                Printing
              </a>
            </div>
          )}
        </div>

        {/* Dropdown for "Use Cases" */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen("use-cases")}
          onMouseLeave={() => setDropdownOpen("")}
        >
          <button
            className={`text-gray-600 hover:text-green-500 flex items-center space-x-1 ${
              activeLink === "Use Cases" ? "text-green-500" : ""
            }`}
          >
            <span>Use Cases</span>
            <svg
              className={`w-4 h-4 transform transition-transform duration-300 ${
                dropdownOpen === "use-cases" ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {dropdownOpen === "use-cases" && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
              <a href="#ecommerce" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                E-commerce
              </a>
              <a href="#merchandise" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                Merchandise
              </a>
              <a href="#events" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                Events
              </a>
            </div>
          )}
        </div>

        {/* Dropdown for "Need Help?" */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen("need-help")}
          onMouseLeave={() => setDropdownOpen("")}
        >
          <button
            className={`text-gray-600 hover:text-green-500 flex items-center space-x-1 ${
              activeLink === "Need Help?" ? "text-green-500" : ""
            }`}
          >
            <span>Need Help?</span>
            <svg
              className={`w-4 h-4 transform transition-transform duration-300 ${
                dropdownOpen === "need-help" ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {dropdownOpen === "need-help" && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
              <a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                Contact Us
              </a>
              <a href="#faq" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                FAQs
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden">
          <nav className="flex flex-col items-center space-y-4 p-4 bg-gray-100">
            {["Catalog", "How it works", "Pricing", "Blog", "Services", "Use Cases", "Need Help?"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`text-gray-600 ${
                    activeLink === link ? "text-green-500" : ""
                  }`}
                  onClick={() => {
                    setActiveLink(link);
                    setMenuOpen(false);
                  }}
                >
                  {link}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
