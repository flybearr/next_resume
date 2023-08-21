"use client";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
export default function Parallax_icon({ ImgSrc }) {
  const { ref } = useParallax({
    translateX: [-100, 100],
    // translateY: [0, 100],
    scale: [0.75, 1],
    rotate: [-180, 0],
    easing: "easeOutQuad",
  });

  return (
    <div ref={ref} className="">
      {/* 😵‍💫 */}
      <div className="w-[100px] h-[100px]">
        <Image src={ImgSrc} alt="js" width={100} height={100} />
      </div>
    </div>
  );
}
