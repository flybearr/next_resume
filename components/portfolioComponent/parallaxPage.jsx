"use client";
import { useEffect, useState } from "react";
import "@/styles/parallax.scss";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";
export default function ParallaxPage() {
  const pic_layer = [
    { image: "/parallax/parallax0.png", speed: 2 },
    { image: "/parallax/parallax1.png", speed: 5 },
    { image: "/parallax/parallax2.png", speed: 11 },
    { image: "/parallax/parallax3.png", speed: 16 },
    { image: "/parallax/parallax4.png", speed: 20 },
    { image: "/parallax/parallax5.png", speed: 25 },
    { image: "/parallax/parallax6.png", speed: 30 },
    { image: "/parallax/parallax7.png", speed: 40 },
  ];

  return (
    <div className="w-full h-full">
      <ParallaxProvider>
        <ParallaxBanner className="parallax ">
          {pic_layer.map((v, i) => {
            return (
              <ParallaxBannerLayer
                key={"layer" + i}
                image={v.image}
                speed={v.speed}
                expanded={false}
                style={{
                  backgroundSize: "auto 1038px",
                  backgroundPosition: "bottom center",
                }}
              ></ParallaxBannerLayer>
            );
          })}
          <div
            style={{
              backgroundImage: "url(/parallax/parallax8.png)",
              backgroundPosition: "bottom",
              backgroundSize: "auto",
              backgroundRepeat: "no-repeat",
              position: "absolute",
              bottom: "0",
            }}
          ></div>
        </ParallaxBanner>
        <div className="after"></div>
      </ParallaxProvider>
    </div>
  );
}
