"use client";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import "@/styles/banner.scss";
export default function Banner() {
  const typeRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(typeRef.current, {
      strings: [
        "<span class='yellow'>const</span> <span class='blue'>todoList</span> <span>=</span> <span class='yellow'>[</span> <span class='orange'>'學React'</span> <span>,</span> <span class='orange'>'寫CSS'</span> <span class='yellow'>]<span/> <br> <span class='blue'>console</span> <span class='yellow'>.log</span> <span class='yellow'>(</span> <span class='blue'>todoList</span> <span class='yellow'>)</span>",
      ],
      typeSpeed: 20,
    });

    setTimeout(() => {
      console.log(["學React", "寫CSS"]);
    }, 4000);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div class="w-full">
      <div class="w-full h-screen">
        {/* <div class="banner-bg"> */}
        <div class="overlayer">
          <div className="pd">
            <div className="mac-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="14"
                viewBox="0 0 54 14"
              >
                <g fill="none" fill-rule="evenodd" transform="">
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    fill="#FF5F56"
                    stroke="#E0443E"
                    stroke-width=".5"
                  ></circle>
                  <circle
                    cx="26"
                    cy="6"
                    r="6"
                    fill="#FFBD2E"
                    stroke="#DEA123"
                    stroke-width=".5"
                  ></circle>
                  <circle
                    cx="46"
                    cy="6"
                    r="6"
                    fill="#27C93F"
                    stroke="#1AAB29"
                    stroke-width=".5"
                  ></circle>
                </g>
              </svg>
            </div>
            <div class="codeArea" ref={typeRef}></div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
