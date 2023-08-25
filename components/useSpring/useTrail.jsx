"use client";

import "@/styles/introduce.scss";
import React from "react";
import { useTrail, animated } from "@react-spring/web";
export default function Trail({ open, children }) {
  const props = React.Children.toArray(children);

  const word = ["just", "do", "it"];

  const trail = useTrail(3, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div className="mx-auto  py-2  rounded-lg w-64 flex flex-col justify-center items-center">
      {trail.map(({ height, ...style }, index) => {
        return (
          <animated.div
            key={"trail" + index}
            className="trailsText"
            style={style}
          >
            <animated.div style={{ height }}>
              <span className="w-36 h-full text-left">{props[index]}</span>
            </animated.div>
          </animated.div>
        );
      })}
    </div>
  );
}
