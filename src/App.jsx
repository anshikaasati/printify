import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/features";
import MainContent from "./components/maincontent";
import FeatureCards from "./components/featurescard";
import ConnectStore from "./components/connectstore";
import CustomSolutionBanner from "./components/customSolutionBanner";
import TestimonialSlider from "./components/testimonialSlider";
import ProfitCalculator from "./components/profitCalculator";
import Footer from "./components/footer";
import './App.css';

function App() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <Features/>
      <MainContent/>
      <FeatureCards/>
      <ConnectStore/>
      <CustomSolutionBanner/>
      <TestimonialSlider/>
      <ProfitCalculator/>
      <Footer/>
    </div>
  );
}

export default App;
