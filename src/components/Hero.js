import React from "react";
import Image from "../images/photo-grid.png";

export default function Hero() {
  return (
    <div>
      <section className="hero">
        <img src={Image} className="hero--logo" />
        <h1 id="hero-h1">Online Experience</h1>
        <p id="hero-text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
    </div>
  );
}
