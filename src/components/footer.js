import React from "react";
import logo from '../assets/logo.svg'; // Path to your logo image
import fbIcon from '../assets/facebook-icon.svg'; // Path to your Facebook icon image
import igIcon from '../assets/instagram-icon.svg'; // Path to your Instagram icon image
import lnIcon from '../assets/linkedin-icon.svg'; // Path to your LinkedIn icon image
import ttIcon from '../assets/Tiktok-1.svg'; // Path to your TikTok icon image
import ytIcon from '../assets/youtube-icon.svg'; // Path to your YouTube icon image
import rdIcon from '../assets/reddit-icon.svg'; // Path to your Reddit icon image

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
          <a href="#"><img src={fbIcon} alt="Facebook" className="h-6" /></a>
          <a href="#"><img src={igIcon} alt="Instagram" className="h-6" /></a>
          <a href="#"><img src={lnIcon} alt="LinkedIn" className="h-6" /></a>
          <a href="#"><img src={ttIcon} alt="TikTok" className="h-6" /></a>
          <a href="#"><img src={ytIcon} alt="YouTube" className="h-6" /></a>
          <a href="#"><img src={rdIcon} alt="Reddit" className="h-6" /></a>
        </div>
      </div>

      {/* Section below the logo and social media */}
      <div className="container mx-auto flex flex-wrap justify-between mt-8 max-w-[1060px] ml-7 md:ml-40">
        {/* Integrations */}
        <div className="w-full md:w-1/4 mb-6">
          <h4 className="font-bold text-lg mb-4">Integrations</h4>
          <ul className="space-y-2 hidden md:block"> {/* Hide on mobile */}
            {["Shopify", "Etsy", "eBay", "Amazon", "TikTok Shop", "PrestaShop", "BigCommerce", "Wix", "WooCommerce", "Squarespace", "Printify API", "Printify Pop-Up Store", "Shutterstock"].map(item => (
              <li key={item}>
                <a href="#" className="text-gray-700 hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Discover */}
        <div className="w-full md:w-1/4 mb-6">
          <h4 className="font-bold text-lg mb-4">Discover</h4>
          <ul className="space-y-2 hidden md:block"> {/* Hide on mobile */}
            {["Blog", "Guides", "Products", "Etsy print-on-demand", "Shopify print-on-demand", "Woocommerce print-on-demand", "Wix print-on-demand", "Squarespace print-on-demand", "Make Your Own Shirt", "Brands", "Pricing", "Shipping Rates", "Mockup Generator"].map(item => (
              <li key={item}>
                <a href="#" className="text-gray-700 hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Start Selling */}
        <div className="w-full md:w-1/4 mb-6">
          <h4 className="font-bold text-lg mb-4">Start Selling</h4>
          <ul className="space-y-2 hidden md:block"> {/* Hide on mobile */}
            {["Custom T-shirts", "Custom Hoodies", "Custom Mugs", "Custom Socks", "Custom Backpacks", "Custom Branding", "Sell on Etsy", "Sell on Social Media", "Free T-shirt Designs", "Custom Products", "Custom All-Over-Print Hoodies", "Start a Clothing Line", "Start POD Business", "Bulk Orders", "Transferring to Printify"].map(item => (
              <li key={item}>
                <a href="#" className="text-gray-700 hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Printify */}
        <div className="w-full md:w-1/4 mb-6">
          <h4 className="font-bold text-lg mb-4">Printify</h4>
          <ul className="space-y-2 hidden md:block"> {/* Hide on mobile */}
            {["Print on Demand", "Print Providers", "Experts Program", "Printify Express Delivery", "Become a Partner", "About", "Printify Quality Promise", "Jobs", "Webinars", "Printing Profits Podcast", "Contact Us", "Affiliate", "Contact Sales", "POD Glossary", "Network Fulfillment Status", "Merchant Protection", "Security"].map(item => (
              <li key={item}>
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
