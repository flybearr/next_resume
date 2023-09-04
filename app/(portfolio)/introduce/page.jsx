"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "@/styles/introduce.scss";
export default function Page() {
  const obsRef = useRef(null);
  useEffect(() => {
    obsRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { target, intersectionRatio } = entry;
          if (intersectionRatio > 0) {
            target.src = target.dataset["src"];
            target.onload = () => {
              target.classList.add("introduce_pic");
            };
            obsRef.current.unobserve(target);
          }
        });
      },
      { threshold: [0.5] }
    );
    const allImg = document.querySelectorAll("obs");
    allImg.forEach((v, i) => {
      obsRef.current.observe(v);
    });
    return () => {
      obsRef.current.disconnect();
    };
  }, []);
  return (
    <div className="w-full h-full overflow-hidden">
      {/* <Image className="introduce_pic" data-src="" alt="" /> */}
      <p></p>
      {/* <div className="introduce_banner slider_from_left">
        <h2>Hola</h2>
      </div>
      <div className="introduce_banner slider_from_right">
        <h2>Hola</h2>
      </div> */}
      <div className="obs"></div>
      {/* 循環播放 */}
      <section class="side-slider">
        <div class="block">
          <ul class="slider">
            <li>
              <Image
                width={450}
                height={300}
                src="https://ushinohiroba.com/wp-content/themes/twentytwenty/assets/images/C_DSC5535@3x.png"
                alt=""
              />
            </li>
            <li>
              <Image
                width={450}
                height={300}
                src="https://ushinohiroba.com/wp-content/themes/twentytwenty/assets/images/C_DSC5733@3x.png"
                alt=""
              />
            </li>
            <li>
              <Image
                width={450}
                height={300}
                src="https://ushinohiroba.com/wp-content/themes/twentytwenty/assets/images/C_DSC5365@3x.png"
                alt=""
              />
            </li>
            <li>
              <Image
                width={450}
                height={300}
                src="https://ushinohiroba.com/wp-content/themes/twentytwenty/assets/images/_DSC5122@3x.png"
                alt=""
              />
            </li>
          </ul>
          <ul class="slider">
            <li>
              <Image
                width={450}
                height={300}
                src="https://ushinohiroba.com/wp-content/themes/twentytwenty/assets/images/C_DSC5535@3x.png"
                alt=""
              />
            </li>
            <li>
              <Image
                width={450}
                height={300}
                src="https://ushinohiroba.com/wp-content/themes/twentytwenty/assets/images/C_DSC5733@3x.png"
                alt=""
              />
            </li>
            <li>
              <Image
                width={450}
                height={300}
                src="https://ushinohiroba.com/wp-content/themes/twentytwenty/assets/images/C_DSC5365@3x.png"
                alt=""
              />
            </li>
            <li>
              <Image
                width={450}
                height={300}
                src="https://ushinohiroba.com/wp-content/themes/twentytwenty/assets/images/_DSC5122@3x.png"
                alt=""
              />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
