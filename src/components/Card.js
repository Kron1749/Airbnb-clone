import React from "react";
import Star from "../images/Star.png";
export default function Card(props) {
  console.log(props);
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.card.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.card.coverImg} className="card--image" />
      <div className="card--stats">
        <img src={Star} className="card--star" />
        <span>{props.card.stats.rating}</span>
        <span className="gray">({props.card.stats.reviewCount})</span>
        <span className="gray">{props.card.location}</span>
      </div>
      <p className="card--title">{props.card.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.card.price}</span> / person
      </p>
    </div>
  );
}
