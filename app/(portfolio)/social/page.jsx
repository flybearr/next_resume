"use client";
import { useState } from "react";
import "@/styles/introduce.scss";
import { useTrail, animated } from "@react-spring/web";
export default function Page() {
  const [open, setOpen] = useState(false);
  const word = ["just", "do", "it"];

  const trail = useTrail(3, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div className="w-full h-full mt-10">
      <div
        className="mx-auto  py-2 border border-dashed border-black  rounded-lg w-64 flex flex-col justify-center items-center"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {trail.map(({ height, ...style }, index) => {
          return (
            <animated.div
              key={"trail" + index}
              className="trailsText"
              style={style}
            >
              <animated.div style={{ height }}>
                <span className="w-36 h-full text-left">{word[index]}</span>
              </animated.div>
            </animated.div>
          );
        })}
      </div>
    </div>
  );
}
