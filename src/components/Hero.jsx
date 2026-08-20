import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const [isOrgView, setIsOrgView] = useState(true);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);

      setTimeout(() => {
        setIsOrgView((prev) => !prev);
        setAnimating(false);
      }, 250);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const organizationContent = (
    <div className="hero-inner">
      <h1 className="hero-headline">
        Manage Queues Smarter <span className="accent">Without Chaos</span>
      </h1>

      <p className="hero-description">
        Fast-Queues is the smartest and simplest way to manage your customers
        flow. Reduce wait times, eliminate crowded lobbies, and delight your
        visitors.
      </p>

      <div className="hero-buttons">
        <Link to="/login" className="btn primary">
          ORGANIZATION SIGN IN
        </Link>

        <Link to="/signup" className="btn secondary">
          ORGANIZATION SIGN UP
        </Link>
      </div>
    </div>
  );

  const userContent = (
    <div className="hero-inner">
      <h1 className="hero-headline">
        Ready to Queue? <span className="accent">Find Your Line Now.</span>
      </h1>

      <p className="hero-description">
        Skip the wait. Easily find a service, check the line length, and join a
        queue right from your device.
      </p>

      <div className="hero-buttons">
        <Link to="/regdashboard" className="btn primary">
          JOIN A QUEUE
        </Link>
      </div>
    </div>
  );

  return (
    <section className="hero">
      <div className="hero-bg" />

      <div className={`hero-wrapper ${animating ? "fade-out" : "fade-in"}`}>
        {isOrgView ? userContent : organizationContent}
      </div>
    </section>
  );
}

export default Hero;