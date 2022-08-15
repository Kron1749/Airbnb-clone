import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./style.css";
import Katie from "./images/katie-zaferes.png";
import cardsElements from "./data";

export default function App() {
  const cards = cardsElements.map((card) => {
    return <Card key={card.id} card={card} />;
  });
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <section className="cards-list">{cards}</section>
    </div>
  );
}
