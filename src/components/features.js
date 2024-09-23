import React from "react";
import profitImage from "../assets/higher-profits.svg"; // Replace with actual path
import scalingImage from "../assets/robust-scaling.svg"; // Replace with actual path
import selectionImage from "../assets/best-selection.svg"; // Replace with actual path

const Features = () => {
  return (
    <section className="features max-w-[1040px] ml-40 mt-24 p-5 sm:p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* Feature 1 */}
        <div className="feature-item flex flex-col items-start">
          <img src={profitImage} alt="Higher Profits" className="mb-4 w-16 h-16" />
          <h2 className="text-lg sm:text-xl font-bold mb-2">Higher Profits</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            We offer some of the lowest prices in the industry because print providers continuously compete to win your business.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-item flex flex-col items-start">
          <img src={scalingImage} alt="Robust Scaling" className="mb-4 w-16 h-16" />
          <h2 className="text-lg sm:text-xl font-bold mb-2">Robust Scaling</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-item flex flex-col items-start">
          <img src={selectionImage} alt="Best Selection" className="mb-4 w-16 h-16" />
          <h2 className="text-lg sm:text-xl font-bold mb-2">Best Selection</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            With 900+ products and top-quality brands, you can choose the best products for your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
