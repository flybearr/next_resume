import React from "react";
import "./cards.scss";
export default function Cards({ src }) {
  return (
    <span className="card">
      <img className="card__blur" src={src} alt="" />
      <img className="card__img" src={src} alt="" />
    </span>
  );
}
