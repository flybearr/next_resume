import React from "react";
import "../styles/loading.scss";
export default function Loading() {
  return (
    <div className=" w-full h-screen flex justify-center items-center bg-black fixed top-0 z-50">
      <div className="cercle">
        <p className="font1">L</p>
        <p className="font2">o</p>
        <p className="font3">a</p>
        <p className="font4">d</p>
        <p className="font5">i</p>
        <p className="font6">n</p>
        <p className="font7">g</p>
        <p className="font8">.</p>
        <p className="font9">.</p>
        <p className="font10">.</p>
      </div>
    </div>
  );
}
