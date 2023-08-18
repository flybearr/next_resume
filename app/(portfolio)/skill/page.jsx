"use client";
import React, { useEffect, useRef } from "react";
import Js_icon from "@/components/parallax/Js_icon";
import Css_icon from "@/components/parallax/Css_icon";
import { ParallaxProvider } from "react-scroll-parallax";
export default function Page() {
  const parallaxRef = useRef(null);
  useEffect(() => {
    parallaxRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { target, intersectionRatio } = entry;
          if (intersectionRatio > 0) {
            console.log("a");
            target.style.position = "fixed";
            target.style.top = "50px";
            target.style.left = 0;

            parallaxRef.current.unobserve(target);
          }
        });
      },
      { threshold: [1] }
    );
    const dom = document.querySelectorAll(".lax");
    dom.forEach((v, i) => {
      parallaxRef.current.observe(v);
    });
    return () => {
      parallaxRef.current.disconnect();
    };
  }, []);
  return (
    <ParallaxProvider>
      <div className="h-[100%] bg-red-500"></div>
      <div className="h-[100%] bg-green-500"></div>
      <div className="h-[100%] bg-yellow-500"></div>

      <div
        className="lax my-2xl bg-gray-900 px-lg h-[80vh] w-full rounded-md px-bg text-black overflow-hidden"
        // style={{ position: "" }}
      >
        <section className=" flex flex-row items-center justify-evenly w-full">
          <Css_icon />
          <Css_icon />
          <Css_icon />
          <Css_icon />
          <Css_icon />
        </section>
        <section className="flex flex-row items-center justify-evenly w-full">
          <Js_icon />
          <Js_icon />
          <Js_icon />
          <Js_icon />
          <Js_icon />
        </section>
      </div>
      <div className="h-[100%]"></div>
      <div className="h-[100%]"></div>
      <div className="h-[100%]"></div>
      <div className="h-[100%]"></div>
      <div className="h-[100%]"></div>
    </ParallaxProvider>
  );
}
