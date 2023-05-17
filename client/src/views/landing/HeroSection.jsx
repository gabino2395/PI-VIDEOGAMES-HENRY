import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="video-section">
      <div className="video-section-box">
        <header className="video-section-title-box">
          <div>
            <h2>Videogame page</h2>
            <p>Algun texto</p>
          </div>
        </header>
        <footer className="video-section-footer">
          <Link to={'/home'} className="comenzar-btn">Comenzar</Link>
        </footer>
      </div>

      <div className="video-box">
        {/* <video  muted  src="/valorant-main.mp4"></video> */}
        <video
           autoPlay
          muted
          // src="/valorant-main.mp4"
          src="valorant2.mp4"
          // src="/godOfWar.mp4"
        ></video>
      </div>
    </section>
  );
};

export default HeroSection;
