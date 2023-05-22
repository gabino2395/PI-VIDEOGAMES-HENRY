import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="video-section">
      <div className="video-section-box">
        <header className="video-section-title-box">
          <div>
            <h1 className="landing-title">
              Unleash Your Gaming Adventure: Explore Endless Thrills and
              Challenges!
            </h1>
            <p className="landing-p">
              "Step into a world of excitement and endless possibilities.
              Immerse yourself in thrilling gameplay, conquer challenges, and
              experience the joy of victory. With a diverse collection of
              captivating games, our platform offers a gateway to unforgettable
              adventures. Whether you're a seasoned gamer or new to the scene,
              prepare to unleash your skills and embark on an epic gaming
              journey. Join us now and let the adventure begin"
            </p>
          </div>
        </header>
        <footer className="video-section-footer">
          <Link to={"/home"} className="comenzar-btn">
            Start{" "}
          </Link>
        </footer>
      </div>

      <div className="video-box">
        {/* <video  muted  src="/valorant-main.mp4"></video> */}
        <video
          autoPlay
          muted
          loop
          // src="/valorant-main.mp4"
          src="valorant2.mp4"
          // src="/godOfWar.mp4"
        ></video>
      </div>
    </section>
  );
};

export default HeroSection;
