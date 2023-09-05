import React from "react";

import "@/styles/test.scss";
import { Permanent_Marker } from "next/font/google";
const font = Permanent_Marker({ subsets: ["latin"], weight: ["400"] });

export default function page() {
  return (
    <div className="w-full h-full">
      <div className="bg"></div>
      <h1 className="second-font">menu</h1>
    </div>
  );
}
