"use client";
import React from "react";
import { Dock } from "@/components/dock/dockContext";
import DockCard from "@/components/dock/dockCard";
import Cards from "@/components/dock/card";
import "@/styles/dockDivider.scss";
const icon = [
  { src: "/img/contact/ig.svg", link: "https://www.instagram.com/" },
  { src: "/img/contact/yt.svg", link: "https://www.youtube.com/" },
  {
    src: "https://products.ls.graphics/mesh-gradients/images/06.-Wisteria-p-130x130q80.jpeg",
    link: "",
  },
  null,
  {
    src: "https://products.ls.graphics/mesh-gradients/images/06.-Wisteria-p-130x130q80.jpeg",
    link: "",
  },
];
export default function DockComponent() {
  return (
    <div className="w-full h-full">
      <Dock>
        {icon.map((v, index) =>
          v?.src ? (
            <DockCard key={v.src} link={v.link}>
              <Cards src={v.src} />
            </DockCard>
          ) : (
            <div className="dividerContainer" key={"null" + index}>
              <span className="divider"></span>
            </div>
          )
        )}
      </Dock>
    </div>
  );
}
