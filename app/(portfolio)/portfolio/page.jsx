"use client";
import React, { useState, useEffect, useRef } from "react";
import { componentInstance } from "../../_component_collect/componentcollect";
import "../../../styles/portfolio.scss";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const componentArray = componentInstance;

export default function Page() {
  const [selComponent, setSelComponent] = useState(2);
  const compoenentRef = useRef(null);
  const Component = componentArray[selComponent];
  const componentDown = () => {
    if (selComponent === componentArray.length - 1) return;
    setSelComponent((state) => state + 1);
  };
  const componentUp = () => {
    if (selComponent === 0) return;
    setSelComponent((state) => state - 1);
  };
  useEffect(() => {
    compoenentRef.current.classList.add("componentFilter");
    setTimeout(() => {
      compoenentRef.current.classList.remove("componentFilter");
    }, 500);
  }, [selComponent]);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className="flex items-center h-full w-10 text-4xl"
        onClick={componentUp}
      >
        <FontAwesomeIcon
          icon={faLessThan}
          className="hover:text-emerald-500 cursor-pointer"
        />
      </div>
      <div
        className={`w-[90%] h-full flex justify-center items-center componentFilter`}
        ref={compoenentRef}
      >
        <Component />
      </div>
      <div
        className="flex items-center h-full w-10 text-4xl"
        onClick={componentDown}
      >
        <FontAwesomeIcon
          icon={faGreaterThan}
          className="hover:text-emerald-500 cursor-pointer scale-125"
        />
      </div>
    </div>
  );
}
