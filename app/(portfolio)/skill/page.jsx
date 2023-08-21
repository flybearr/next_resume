"use client";
import React, { useEffect, useRef, memo } from "react";
import Parallax_icon from "@/components/parallax/Parallax_icon";
import { ParallaxProvider } from "react-scroll-parallax";
import { useScroll, animated, useSpring } from "@react-spring/web";
import Typed_animation from "../../../components/typed_animation";
import Card from "@/components/card.jsx";
import "../../../styles/scroll.scss";
export default memo(function Page() {
  const containerRef = useRef(null);
  const [animate, api] = useSpring(() => {
    y: "100%";
  });
  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0.8) {
        api.start({ x: "0", rotate: 0 });
      } else {
        api.start({ x: "100%", rotate: 360 });
      }
    },
    default: {
      immediate: true,
    },
  });

  const { rotate } = useSpring({
    from: { rotate: 0 },
    to: { rotate: 1 },
    loop: { reverse: true },
    config: { duration: 1500 },
  });

  // const parallaxRef = useRef(null);
  // useEffect(() => {
  //   parallaxRef.current = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         const { target, intersectionRatio } = entry;
  //         if (intersectionRatio > 0) {
  //           console.log("a");
  //           target.style.position = "fixed";
  //           target.style.top = "50px";
  //           target.style.left = 0;

  //           parallaxRef.current.unobserve(target);
  //         }
  //       });
  //     },
  //     { threshold: [0.9] }
  //   );
  //   const dom = document.querySelectorAll(".parallax");
  //   dom.forEach((v, i) => {
  //     parallaxRef.current.observe(v);
  //   });
  //   return () => {
  //     parallaxRef.current.disconnect();
  //   };
  // }, []);
  // const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <div className="body overflow-hidden" ref={containerRef}>
      {/* <div className="h-[100vh]">
        <Typed_animation />
      </div>
      <div className="h-[100vh]">
        <Card>
          <p>123</p>
        </Card>
      </div> */}
      {/* <ParallaxProvider>
        {Array(2)
          .fill(1)
          .map((_, i) => {
            return (
              <div className="w-full h-[100vh]" key={"empty_page" + i}></div>
            );
          })}
        <div
          className="parallax  z-100 my-2xl bg-red-300  px-lg h-[100vh] w-full rounded-md px-bg text-black  flex flex-col justify-center items-center gap-5"
          id="parallax"
        >
          <section className=" flex flex-row items-center justify-evenly w-full">
            <Parallax_icon ImgSrc={"/img/java.png"} />
            <Parallax_icon ImgSrc={"/img/c-sharp.png"} />
            <Parallax_icon ImgSrc={"/img/js.png"} />
            <Parallax_icon ImgSrc={"/img/python.png"} />
          </section>
          <section className=" flex flex-row items-center justify-evenly w-full">
            <Parallax_icon ImgSrc={"/img/java.png"} />
            <Parallax_icon ImgSrc={"/img/c-sharp.png"} />
            <Parallax_icon ImgSrc={"/img/js.png"} />
            <Parallax_icon ImgSrc={"/img/python.png"} />
          </section>
        </div>
      </ParallaxProvider> */}
      <div className="animated__layers">
        <animated.div
          className="bg-teal-300 w-full h-[50%]"
          style={{
            transform: scrollYProgress.to(
              (val) => `translateX(${(1 - val) * 100}%)`
            ),
          }}
        >
          <h1 className="title">
            <span>
              <animated.span style={animate}>Aha!</animated.span>
            </span>
            <span>
              <animated.span style={animate}>You found me!</animated.span>
            </span>
          </h1>
        </animated.div>
        <animated.div
          className="bg-red-300 w-full h-[50%] translate-x-[0%]"
          style={{
            transform: scrollYProgress.to(
              (val) => `translateX(${(val - 1) * 100}%)`
            ),
          }}
        >
          <h1 className="title flex justify-center items-center">
            <span className="">
              <animated.span style={animate}>Aha!</animated.span>
            </span>
            <span>
              <animated.span style={animate}>You found me!</animated.span>
            </span>
          </h1>
          <animated.img src="/img/js.png" style={rotate}></animated.img>
        </animated.div>
      </div>
      {Array(2)
        .fill(1)
        .map((_, i) => {
          return (
            <div className="w-full h-[100vh]" key={"empty_page" + i}></div>
          );
        })}
    </div>
  );
});
