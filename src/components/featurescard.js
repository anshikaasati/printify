import React, { useEffect, useRef, useState } from 'react';
import createImage from '../assets/custom-products.webp'; // Update with actual image path
import sellImage from '../assets/your-products.webp'; // Update with actual image path
import fulfillImage from '../assets/fullfillment.webp'; // Update with actual image path
import "./featurescard.css";

const FeatureCards = () => {
  const [visibleCards, setVisibleCards] = useState([false, false, false]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.indexOf(entry.target);
          if (index >= 0) {
            setVisibleCards((prev) => {
              const newVisibleCards = [...prev];
              newVisibleCards[index] = true; // Set the corresponding card to visible
              return newVisibleCards;
            });
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        }
      });
    });

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card); // Start observing each card
      }
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card); // Clean up on unmount
        }
      });
    };
  }, []);

  return (
    <section className="py-12 bg-gray-100 flex justify-center md:justify-evenly">
      <div className="container mx-auto text-center max-w-[1060px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Create Feature */}
          <div 
            className={`feature-card p-6 rounded-lg ${visibleCards[0] ? 'animate-slide-up' : 'opacity-0'}`}
            ref={(el) => (cardRefs.current[0] = el)}
          >
            <img src={createImage} alt="Create Products" className="mb-4 mx-auto" />
            <h3 className="text-lg font-bold text-green-600">CREATE</h3>
            <h4 className="text-xl font-semibold mb-2">custom products</h4>
            <p className="text-gray-600">
              Easily add your designs to a wide range of products using our free tools.
            </p>
          </div>

          {/* Sell Feature */}
          <div 
            className={`feature-card p-6 rounded-lg ${visibleCards[1] ? 'animate-slide-up' : 'opacity-0'}`}
            ref={(el) => (cardRefs.current[1] = el)}
          >
            <img src={sellImage} alt="Sell Products" className="mx-auto mb-4" />
            <h3 className="text-lg font-bold text-green-600">SELL</h3>
            <h4 className="text-xl font-semibold mb-2">on your terms</h4>
            <p className="text-gray-600">
              You choose the products, sale price, and where to sell.
            </p>
          </div>

          {/* Fulfillment Feature */}
          <div 
            className={`feature-card p-6 rounded-lg ${visibleCards[2] ? 'animate-slide-up' : 'opacity-0'}`}
            ref={(el) => (cardRefs.current[2] = el)}
          >
            <img src={fulfillImage} alt="Fulfillment" className="mx-auto mb-4" />
            <h3 className="text-lg font-bold text-green-600">WE HANDLE</h3>
            <h4 className="text-xl font-semibold mb-2">fulfillment</h4>
            <p className="text-gray-600">
              Once an order is placed, we automatically handle all the printing and delivery logistics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
