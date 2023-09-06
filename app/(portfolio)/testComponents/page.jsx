"use client";
import React from "react";

import "@/styles/test.scss";
import { Permanent_Marker } from "next/font/google";
const font = Permanent_Marker({ subsets: ["latin"], weight: ["400"] });

import { Dock } from "@/components/dock/dockContext";
import DockCard from "@/components/dock/dockCard";
import Cards from "@/components/dock/card";

const GRADIENTS = [
  "https://products.ls.graphics/mesh-gradients/images/03.-Snowy-Mint_1-p-130x130q80.jpeg",
  "https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg",
  "https://products.ls.graphics/mesh-gradients/images/06.-Wisteria-p-130x130q80.jpeg",
  "https://products.ls.graphics/mesh-gradients/images/09.-Light-Sky-Blue-p-130x130q80.jpeg",
  "https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed-p-130x130q80.jpeg",
  "https://products.ls.graphics/mesh-gradients/images/15.-Perfume_1-p-130x130q80.jpeg",
  null,
  "https://products.ls.graphics/mesh-gradients/images/36.-Pale-Chestnut-p-130x130q80.jpeg",
];
export default function page() {
  return (
    <div className="w-full h-full">
      <div className="bg"></div>
      <h1 className="second-font">menu</h1>
      <Dock>
        {GRADIENTS.map((src, index) =>
          src ? (
            <DockCard key={src}>
              <Cards src={src} />
            </DockCard>
          ) : (
            ""
          )
        )}
      </Dock>
    </div>
  );
}
