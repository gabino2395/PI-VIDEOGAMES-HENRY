import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import HeroSection from "./HeroSection";
import Cards from "../../components/Cards/Cards";
import CreateGame from "../CreateGame/CreateGame";
import HeroSection2 from "./HeroSection2";
import Selectors from "../../components/Catalog/Catalog";
import Catalog from "../../components/Catalog/Catalog";
import Footer from "../../components/Footer/Footer";
const LandingPage = () => {
  return (
    <>
          {/* <CreateGame/> */}
          <Catalog/>
          <Footer/>

      {/* <div className="container-scroll"> */}
        {/* <div className="slider">
          <HeroSection />
        </div>
        <div className="slider">
          <HeroSection />
        </div> */}
          {/* <Cards /> */}
        <div className="silder">
        </div>
        <div className="slider">
        </div>
        {/* <div className="silder">
          <Selectors/>
        </div> */}
        {/* <div className="slider">
          <HeroSection />
        </div> */}
        {/* <div className="slider">
          <HeroSection2 />
        </div> */}
        {/* <div className="slider">
          <HeroSection />
        </div> */}
      {/* </div> */}

      {/* <main className="slider-wrap"> */}
        {/* <div className="slider">
          <HeroSection  />
        </div> */}
        {/* <div className="slider">
          <img src="/vite.svg"  alt="" />
        </div> */}
        {/* <div className="silder2">
          <Cards />
        </div>
        <div className="silder">
          <HeroSection />
        </div>
        <div className="silder">
          <HeroSection />
        </div> */}
      {/* </main> */}
    </>
  );
};

export default LandingPage;
