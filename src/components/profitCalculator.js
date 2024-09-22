import React from 'react';
import { Link } from 'react-router-dom';
import profit from '../assets/image_converted.jpg';

const ProfitCalculator = () => {
  return (
    <div className="flex items-center justify-center py-12 max-w-[1060px] mx-auto">
      <div className="container flex flex-col md:flex-row items-center bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Left Section */}
        <div className="p-8 md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Make Money, Risk-Free</h2>
          <p className="mb-6">You pay for fulfillment only when you make a sale</p>
          
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <div className="flex justify-between mb-2">
              <p>You sell a t-shirt</p>
              <p>$30</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>You pay for its production</p>
              <p>$12</p>
            </div>
            <hr className="border-gray-600 mb-4" />
            <div className="flex justify-between">
              <p className="text-green-400">Your profit</p>
              <p className="text-green-400">$18</p>
            </div>
          </div>

          {/* Button */}
          <Link to="/signup">
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg">
              Start selling
            </button>
          </Link>

          <p className="mt-4 text-gray-400 text-sm">
            100% Free to use - 900+ Products - Largest print network
          </p>
        </div>

        {/* Right Section (Hidden on smaller screens) */}
        <div className="hidden md:block md:w-1/2 p-8 flex justify-center">
          <img
            src={profit} // Replace with the actual image URL
            alt="Profit Illustration"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfitCalculator;
