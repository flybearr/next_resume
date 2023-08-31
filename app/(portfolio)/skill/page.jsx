"use client";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import { useScroll, animated, useSpring } from "@react-spring/web";
import Typed_animation from "@/components/typed_animation";
import Card from "@/components/card.jsx";
import Trail from "@/components/useSpring/useTrail";
import CircleProgress from "@/components/circleProgress";
import "@/styles/scroll.scss";

export default function Page() {
  const containerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [animate, api] = useSpring(
    () => ({
      x: "100%",
      y: "100%",
      rotate: 0,
      opacity: 0,
    }),
    []
  );

  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      setScroll(scrollYProgress);
      if (scrollYProgress > 0.4) {
        api.start({
          x: "0",
          y: "0",
          rotate: 360,
          opacity: 1,
        });
      } else {
        api.start({
          x: "100%",
          y: "100%",
          rotate: 0,
          opacity: 0,
        });
      }
    },
    default: {
      immediate: true,
    },
  });

  return (
    <div className="body overflow-hidden" ref={containerRef}>
      <div className="fixed bottom-5 right-2 z-50 flex justify-center items-center">
        <CircleProgress scroll={scroll} />
      </div>
      <animated.div>
        <div className="flex flex-col justify-center items-center gap-1">
          <Typed_animation />
          <FontAwesomeIcon
            icon={faDownLong}
            size="4x"
            className="text-red-600 arrow_animate"
          />
        </div>
        <div
          className="w-full h-[80vh] "
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Card>
            <Trail open={open}>
              <span className="w-36 h-full text-left">just</span>
              <span className="w-36 h-full text-left">do</span>
              <span className="w-36 h-full text-left">it</span>
            </Trail>
          </Card>
        </div>
      </animated.div>

      <div className="animated__layers">
        <animated.div
          className="bg-teal-300 w-full h-[50%]"
          style={{
            transform: scrollYProgress.to((val) => {
              if (val < 0.5) {
                return `translateX(${(1 - val * 2) * 100}%)`;
              } else {
                return `translateX(0%)`;
              }
            }),
          }}
        >
          <h1 className="title">
            <span>
              <animated.span style={animate}>Aha!</animated.span>
            </span>
            <span>
              <animated.span style={animate}>CSS</animated.span>
            </span>
          </h1>
        </animated.div>
        <animated.div
          className="bg-red-300 w-full h-[50%] translate-x-[0%]"
          style={{
            transform: scrollYProgress.to((val) => {
              if (val < 0.5) {
                return `translateX(${(val * 2 - 1) * 100}%)`;
              } else {
                return `translateX(0%)`;
              }
            }),
          }}
        >
          <h1 className="title flex justify-center items-center">
            <span>
              <animated.span style={animate}>program</animated.span>
            </span>
          </h1>
          <div className="mx-auto flex justify-center items-center gap-5">
            <animated.img src="/img/js.png" style={animate}></animated.img>
            <animated.img src="/img/java.png" style={animate}></animated.img>
            <animated.img src="/img/python.png" style={animate}></animated.img>
            <animated.img src="/img/c-sharp.png" style={animate}></animated.img>
          </div>
        </animated.div>
      </div>
      <div className="animated__layers z-10">
        <animated.div
          className="dot"
          style={{
            clipPath: scrollYProgress.to((val) => {
              if (val > 0.65) {
                return `circle(${(val - 0.65) * 2 * 100}%)`;
              } else {
                return `circle(0%)`;
              }
            }),
          }}
        ></animated.div>
      </div>
      <div className="animated__layers z-20">
        <animated.div
          className="dot2"
          style={{
            clipPath: scrollYProgress.to((val) => {
              if (val > 0.75) {
                return `circle(${(val - 0.75) * 2.9 * 100}%)`;
              } else {
                return `circle(0%)`;
              }
            }),
          }}
        ></animated.div>
      </div>
      <div className="animated__layers z-30">
        <animated.div
          className="dot3"
          style={{
            clipPath: scrollYProgress.to((val) => {
              if (val > 0.85) {
                return `circle(${(val - 0.85) * 4.8 * 100}%)`;
              } else {
                return `circle(0%)`;
              }
            }),
          }}
        ></animated.div>
      </div>
      {Array(5)
        .fill(1)
        .map((_, i) => {
          return (
            <div className="w-full h-[100vh]" key={"empty_page" + i}></div>
          );
        })}
    </div>
  );
}
