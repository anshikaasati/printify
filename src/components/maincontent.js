import React, { useEffect, useRef, useState } from 'react';
import productImage from '../assets/several.jpg';
import './ts.css';

const MainContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    });

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section className="pt-16 sm:pt-24 pb-12 max-w-[1060px] mx-auto mb-20">
      <div className="container mx-auto flex flex-col sm:flex-row justify-evenly items-center px-4 sm:px-0">
        
        {/* Left section: Product image */}
        <div className="w-full sm:w-1/2 mb-8 sm:mb-0 z-30">
          <img src={productImage} alt="Products" className="rounded-lg shadow-lg w-full h-auto" />
        </div>

        {/* Right section: Description with transition */}
        <div
          className={`w-full z-0 sm:w-1/2 sm:pl-12 text-center sm:text-left transform transition-all duration-700 ease-out ${isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-10'}`}
          ref={contentRef}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            Easily add your design to a wide range of products
          </h1>
          <p className="text-gray-700 text-md sm:text-lg mb-6">
            With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
          </p>
          <a href="#all-products" className="text-green-500 font-semibold text-md sm:text-lg">
            All products &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
