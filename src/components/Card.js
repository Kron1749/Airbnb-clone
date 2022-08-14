import React from "react";
import Star from "../images/Star.png";
import Katie from "../images/Ketie.png";

export default function Card() {
  return (
    <div className="card">
      <img src={Katie} className="card--image" />
      <div className="card-stats">
        <img src={Star} />
        <span>5.0</span>
        <span className="gray">(6)</span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
