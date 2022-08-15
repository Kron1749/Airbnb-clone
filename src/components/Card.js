import React from "react";
import Star from "../images/Star.png";

export default function Card({
  img,
  rating,
  number_of_rating,
  country,
  title,
  price,
}) {
  return (
    <div className="card">
      <img src={img} className="card--image" />
      <div className="card-stats">
        <img src={Star} />
        <span>{rating}</span>
        <span className="gray">({number_of_rating})</span>
        <span className="gray">{country}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}
