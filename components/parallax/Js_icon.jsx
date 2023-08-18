"use client";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
export default function Js_icon() {
  const { ref } = useParallax({
    translateX: ["-1700px", "0px"],
    scale: [0.75, 1],
    rotate: [-180, 0],
    easing: "easeInQuad",
  });

  return (
    <div ref={ref} className="">
      {/* 😵‍💫 */}
      {/* <div className="absolute bg-blue-100  rounded-xl overflow-hidden  flex items-center justify-center top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <Image src="/img/js.png" alt="js" width={50} height={50} />
      </div>
      <div className="absolute bg-blue-100 border-2 border-blue-500 border-solid rounded-lg  flex items-center justify-center right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
        <Image src="/img/c-sharp.png" alt="js" width={50} height={50} />
      </div>
      <div className="absolute bg-blue-100 border-2 border-blue-500 border-solid rounded-ee-lg flex items-center justify-center bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2">
        <Image src="/img/java.png" alt="js" width={50} height={50} />
      </div>
      <div className="absolute bg-blue-100 border-2 border-blue-500 border-solid rounded-lg flex items-center justify-center top-1/2 left-0 -translate-y-1/2 -translate-x-1/2">
        <Image src="/img/python.png" alt="js" width={50} height={50} />
      </div> */}
      <div className="w-[100px] h-[100px]">
        <Image src="/img/js.png" alt="js" width={100} height={100} />
      </div>
    </div>
  );
}
