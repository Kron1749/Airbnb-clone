import React from "react";
import Image from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={Image} className="nav--logo" />
    </nav>
  );
}
