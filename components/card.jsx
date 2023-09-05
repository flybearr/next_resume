import { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.4,
];
export default function Card({ children }) {
  const ref = useRef(null);
  const config = {
    mass: 0.2,
    tension: 280,
    friction: 120,
    clamp: false,
    precision: 0.01,
    velocity: 0,
  };
  const [{ xys }, api] = useSpring(
    () => ({
      xys: [0, 0, 1],
      config,
    }),
    []
  );
  const handleMouseLeave = () =>
    api.start({
      xys: [0, 0, 1],
    });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    console.log(api);
    api.start({
      xys: calc(e.clientX, e.clientY, rect),
    });
  };
  return (
    <div
      className="w-full h-full flex items-center justify-center overflow-hidden"
      ref={ref}
    >
      <animated.div
        className="w-[30ch] h-[30ch] bg-blue-400 rounded-lg transition-shadow will-change-transform"
        style={{ transform: xys.to(trans) }}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {children}
      </animated.div>
    </div>
  );
}
