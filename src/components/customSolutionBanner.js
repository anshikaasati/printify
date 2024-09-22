import React from 'react';

const CustomSolutionBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-green-100 p-6 md:p-10 rounded-lg shadow-md max-w-[1060px] mx-auto mt-10 mb-10">
      <span className="text-xl md:text-2xl text-green-800 font-semibold text-center md:text-left mb-4 md:mb-0">
        Are you a large business looking for<br /> custom solutions?
      </span>
      <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none">
        Talk to sales
      </button>
    </div>
  );
};

export default CustomSolutionBanner;
