import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import tShirtImage from "../assets/tshirt.png";
import { IoPlayCircleOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="hero bg-gray-50 py-20 sm:py-40 px-5 sm:px-10 flex flex-col sm:flex-row items-center justify-evenly">
      {/* Hero Text */}
      <div className="hero-text max-w-md text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Create and sell custom products
        </h1>
        <p className="text-md mt-4 sm:mt-8 text-gray-600 mb-6">
          <span className="text-green-500">✓</span> 100% Free to use<br />
          <span className="text-green-500">✓</span> 900+ High-Quality Products<br />
          <span className="text-green-500">✓</span> Largest global print network
        </p>
        <div className="space-x-0 sm:space-x-4 flex flex-col sm:flex-row items-center mt-6 sm:mt-10">
          <Link to="/signup">
            <button className="bg-green-500 text-white px-6 py-3 rounded-md mb-4 sm:mb-0 sm:mr-4">
              Start for free
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md flex items-center">
              <IoPlayCircleOutline className="mr-1" /> 
              How it works?
            </button>
          </Link>
        </div>
        <div className="hidden sm:flex text-green-500 mt-2 font-medium text-left ">Trusted by over 8M sellers around the world</div>
      </div>

      {/* Hero Image */}
      <div className="hero-image relative mt-10 sm:mt-0">
        <img src={tShirtImage} alt="Custom T-Shirt" className="w-64 sm:w-80 h-auto mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
