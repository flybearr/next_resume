"use client";
import React, { useEffect, useState } from "react";
import "../styles/circleProgress.scss";
export default function CircleProgress({ scroll }) {
  const r = 30;
  const [deg, setDeg] = useState(0);
  const [strokeDashoffset, setStrokeDashoffset] = useState(0);
  useEffect(() => {
    const perimeter = 2 * r * Math.PI;
    const newDeg = (scroll * 100).toFixed(0);
    console.log("scroll" + scroll);
    console.log("newDeg" + newDeg);
    const newStrokeDashoffset = perimeter * (1 - newDeg * 0.01);
    setStrokeDashoffset(newStrokeDashoffset);
    setDeg(newDeg);
  }, [scroll]);

  return (
    <div className="circleBox">
      <span className="deg">{deg + "%"}</span>
      <svg
        id="svg"
        width="100"
        height="100"
        // viewPort="0 0 100 100"
        // viewbox="0 0 100 100"
        version="1.1"
        className=""
      >
        <circle
          width="100"
          height="100"
          id="circle"
          r={r}
          cx="50"
          cy="50"
          fill="transparent"
          strokeDasharray={2 * r * Math.PI}
          strokeDashoffset="0"
        />
        <circle
          id="bar"
          r={r}
          cx="50"
          cy="50"
          fill="transparent"
          strokeDasharray={2 * r * Math.PI}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90, 50, 50)"
        />
      </svg>
    </div>
  );
}
