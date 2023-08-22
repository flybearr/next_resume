"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
export default function Page() {
  return (
    <div className="w-full h-full">
      <Parallax pages={3}>
        <ParallaxLayer offset={1} speed={0}>
          <div className="bg-white w-10 h-10 rounded-full "></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
          <div className="bg-red-400 w-10 h-10 rounded-full "></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
          <div className="bg-yellow-300 w-10 h-10 rounded-full "></div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
