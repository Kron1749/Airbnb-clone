import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./style.css";
import Katie from "./images/katie-zaferes.png";
import cardsElements from "./data";

export default function App() {
  const cards = cardsElements.map((card) => {
    return (
      <Card
        key={card.id}
        img={card.coverImg}
        rating={card.stats.rating}
        number_of_rating={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
        openSpots={card.openSpots}
      />
    );
  });
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <section className="cards-list">{cards}</section>
    </div>
  );
}
