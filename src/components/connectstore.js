import React from "react";
// Import your logo images here
import centralLogo from '../assets/logo.svg'; 
import shopifyLogo from '../assets/hand-drawn-shop-local-logo-design.png';
import squarespaceLogo from '../assets/1705.jpg';
import handapi from '../assets/hand-drawn-api-illustration.png';
import penguin from '../assets/fc791758-dd4e-44c3-8b36-783c4412228c.jpg';
import wix from '../assets/2.jpg';
import woo from '../assets/89_letter_e.jpg';

const ConnectStore = () => {
  return (
    <section className="py-16 bg-white text-center relative max-w-[1060px] mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Connect your store</h2>
      <p className="text-lg text-gray-500 mb-12">
        Printify easily integrates with major e-commerce platforms and marketplaces
      </p>

      {/* Central Logo */}
      <div className="absolute w-20 h-20 sm:w-24 sm:h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg left-1/2 top-[62%] transform -translate-x-1/2 -translate-y-1/2">
        <img src={centralLogo} alt="Central Platform Logo" className="w-14 h-14 sm:w-16 sm:h-16" />
      </div>

      {/* Circular layout for surrounding logos */}
      <div className="relative w-full h-[400px] mx-auto">
        {/* Top Center (Shopify) */}
        <a href="https://www.shopify.com" target="_blank" rel="noopener noreferrer" className="absolute w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center shadow-md top-0 left-1/2 transform -translate-x-1/2 hover:scale-110 transition-transform duration-300">
          <img src={shopifyLogo} alt="Shopify" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full" />
        </a>

        {/* Top Left (Penguin) */}
        <a href="https://yourlink.com" target="_blank" rel="noopener noreferrer" className="absolute w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center shadow-md top-1/4 left-8 hover:scale-110 transition-transform duration-300">
          <img src={penguin} alt="Penguin" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full" />
        </a>

        {/* Top Right (Wix) */}
        <a href="https://www.wix.com" target="_blank" rel="noopener noreferrer" className="absolute w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center shadow-md top-1/4 right-8 hover:scale-110 transition-transform duration-300">
          <img src={wix} alt="Wix" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full" />
        </a>

        {/* Bottom Left (Squarespace) */}
        <a href="https://www.squarespace.com" target="_blank" rel="noopener noreferrer" className="absolute w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center shadow-md bottom-1/4 left-8 hover:scale-110 transition-transform duration-300">
          <img src={squarespaceLogo} alt="Squarespace" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full" />
        </a>

        {/* Bottom Right (Hand API) */}
        <a href="https://yourapilink.com" target="_blank" rel="noopener noreferrer" className="absolute w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center shadow-md bottom-1/4 right-8 hover:scale-110 transition-transform duration-300">
          <img src={handapi} alt="Hand API" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full" />
        </a>

        {/* Bottom Center (Woo) */}
        <a href="https://woocommerce.com" target="_blank" rel="noopener noreferrer" className="absolute w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center shadow-md bottom-0 left-1/2 transform -translate-x-1/2 hover:scale-110 transition-transform duration-300">
          <img src={woo} alt="WooCommerce" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full" />
        </a>
      </div>
    </section>
  );
};

export default ConnectStore;
