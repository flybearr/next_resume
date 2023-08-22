"use client";
import React, { memo, useEffect, useRef } from "react";
import Image from "next/image";
import "../../styles/IntersectionObserver.scss";
const pic = [
  { src: "/img/beach1.jpg" },
  { src: "/img/lorem.png" },
  { src: "/img/mountain.jpg" },
];

export default memo(function IntersectionObserverLazyload() {
  const observeRef = useRef(null);
  useEffect(() => {
    observeRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { target, intersectionRatio } = entry;
          if (intersectionRatio > 0) {
            target.src = target.dataset["src"];

            target.onload = () => {
              target.classList.add("animation");
            };

            observeRef.current.unobserve(target);
          }
        });
      },
      { threshold: [0.5] }
    );
    const allImg = document.querySelectorAll("img");
    allImg.forEach((v, i) => {
      observeRef.current.observe(v);
    });
    return () => {
      observeRef.current.disconnect();
    };
  }, []);

  return (
    <div className="w-full h-full">
      <p className="scroll">往下scroll</p>
      <div className="box"></div>
      {pic.map((img, index) => {
        return (
          <div key={img.src}>
            <Image className="pic" data-src={img.src} alt={index} />
            <p>
              圖片{index} {img.src}
            </p>
          </div>
        );
      })}
    </div>
  );
});
