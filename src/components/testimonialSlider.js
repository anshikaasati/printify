import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import p1 from '../assets/young-bearded-man-with-striped-shirt.jpg';
import p2 from '../assets/medium-shot-man-posing-lighthouse.jpg';
import p3 from '../assets/medium-shot-security-officer-posing-studio.jpg';
import "./ts.css";

const testimonials = [
  {
    name: "Robert A. Voltaire",
    title: "Store link",
    review:
      "Printify has been an incredible service for us musicians unable to keep a large amount of inventory. Now we can create designs too expensive to print without having 1,000 shirts in our jam space.",
    rating: 5,
    image: p1,
  },
  {
    name: "Quinten Barney",
    title: "Etsy Merchant",
    review:
      "We chose Printify because of their offerings as well as their incredibly low prices. After several years, their customer service is top notch, and their platform keeps getting better and better.",
    rating: 5,
    image: p2,
  },
  {
    name: "Nikki",
    title: "Store link",
    review:
      "Printify has been a major help as we grow our business. Their service makes it easier for us to create for our customers. The Customer Service team makes the process a breeze.",
    rating: 5,
    image: p3,
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50 py-12 ">
      <div className="container flex ml-40 text-left gap-x-10 mb-8 mt-10 max-w-[800px] ">
        <h2 className="text-4xl font-bold mb-4">Trusted by over 8M sellers around the<br></br> world</h2>
        <p className="text-gray-600 animate-slide-in-left ">
          <br></br>
          Whether you're just getting started or run an<br></br> enterprise-level e-commerce business, we ensure a positive merchant experience.
        </p>
      </div>
      
      <div className="container mx-auto px-4 max-w-[1060px] ml-3 md:ml-40">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 opacity-0 transition-opacity duration-700 ease-in-out animate-slide-up">
              <div className="bg-white rounded-lg shadow-lg p-6 text-left">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-green-500">{testimonial.title}</p>
                  </div>
                </div>
                <div className="mb-4">
                  {"★".repeat(testimonial.rating)}
                  {"☆".repeat(5 - testimonial.rating)}
                </div>
                <p className="text-gray-700">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
