"use client";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import "@/styles/banner.scss";
export default function Banner() {
  const typeRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(typeRef.current, {
      strings: [
        "<span class='yellow'>const</span> <span class='blue'>newArray</span> <span>=</span> <span class='yellow'>[</span> <span class='orange'>'學React'</span> <span class='yellow'>]</span>",
      ],
      typeSpeed: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div class="w-full">
      <div class="w-full h-screen">
        {/* <div class="banner-bg"> */}
        <div class="overlayer">
          <div class="codeArea" ref={typeRef}></div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
