/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from '../assets/logo.svg';
import fbIcon from '../assets/facebook-icon.svg';
import igIcon from '../assets/instagram-icon.svg';
import lnIcon from '../assets/linkedin-icon.svg';
import ttIcon from '../assets/Tiktok-1.svg';
import ytIcon from '../assets/youtube-icon.svg';
import rdIcon from '../assets/reddit-icon.svg';

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center max-w-[1060px] ml-7 md:ml-40">

        {/* Left side: Logo and Printify */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Printify Logo" className="h-12" />
          <p className="text-green-500 font-bold text-2xl">Printify</p>
        </div>

        {/* Right side: Social Media Icons */}
        <div className="flex space-x-4 mr-20">
          <a href="#" aria-label="Facebook"><img src={fbIcon} alt="Facebook" className="h-6" /></a>
          <a href="#" aria-label="Instagram"><img src={igIcon} alt="Instagram" className="h-6" /></a>
          <a href="#" aria-label="LinkedIn"><img src={lnIcon} alt="LinkedIn" className="h-6" /></a>
          <a href="#" aria-label="TikTok"><img src={ttIcon} alt="TikTok" className="h-6" /></a>
          <a href="#" aria-label="YouTube"><img src={ytIcon} alt="YouTube" className="h-6" /></a>
          <a href="#" aria-label="Reddit"><img src={rdIcon} alt="Reddit" className="h-6" /></a>
        </div>
      </div>

      {/* Section below the logo and social media */}
      <div className="container mx-auto flex flex-wrap justify-between mt-8 max-w-[1060px] ml-7 md:ml-40">
        {/* Integrations */}
        <div className="w-full md:w-1/4 mb-6">
          <h4 className="font-bold text-lg mb-4">Integrations</h4>
          <ul className="space-y-2 hidden md:block">
            {["Shopify", "Etsy", "eBay", "Amazon", "TikTok Shop", "PrestaShop", "BigCommerce", "Wix", "WooCommerce", "Squarespace", "Printify API", "Printify Pop-Up Store", "Shutterstock"].map((item, index) => (
              <li key={`${item}-${index}`}>
                <a href="#" className="text-gray-700 hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Discover */}
        <div className="w-full md:w-1/4 mb-6">
          <h4 className="font-bold text-lg mb-4">Discover</h4>
          <ul className="space-y-2 hidden md:block">
            {["Blog", "Guides", "Products", "Etsy print-on-demand", "Shopify print-on-demand", "Woocommerce print-on-demand", "Wix print-on-demand", "Squarespace print-on-demand", "Make Your Own Shirt", "Brands", "Pricing", "Shipping Rates", "Mockup Generator"].map((item, index) => (
              <li key={`${item}-${index}`}>
                <a href="#" className="text-gray-700 hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Start Selling */}
        <div className="w-full md:w-1/4 mb-6">
          <h4 className="font-bold text-lg mb-4">Start Selling</h4>
          <ul className="space-y-2 hidden md:block">
            {["Custom T-shirts", "Custom Hoodies", "Custom Mugs", "Custom Socks", "Custom Backpacks", "Custom Branding", "Sell on Etsy", "Sell on Social Media", "Free T-shirt Designs", "Custom Products", "Custom All-Over-Print Hoodies", "Start a Clothing Line", "Start POD Business", "Bulk Orders", "Transferring to Printify"].map((item, index) => (
              <li key={`${item}-${index}`}>
                <a href="#" className="text-gray-700 hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Printify */}
        <div className="w-full md:w-1/4 mb-6">
          <h4 className="font-bold text-lg mb-4">Printify</h4>
          <ul className="space-y-2 hidden md:block">
            {["Print on Demand", "Print Providers", "Experts Program", "Printify Express Delivery", "Become a Partner", "About", "Printify Quality Promise", "Jobs", "Webinars", "Printing Profits Podcast", "Contact Us", "Affiliate", "Contact Sales", "POD Glossary", "Network Fulfillment Status", "Merchant Protection", "Security"].map((item, index) => (
              <li key={`${item}-${index}`}>
                <a href="#" className="text-gray-700 hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-200 mt-6 p-10">
        <div className="container mx-auto text-center text-sm text-gray-500">
          <div className="flex justify-center space-x-4 mb-2">
            <a href="#" className="hover:underline">Intellectual Property Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Security</a>
          </div>
          <p>&copy; 2024 Printify, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
