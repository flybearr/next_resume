import dynamic from "next/dynamic";
import Svgd3 from "@/components/portfolioComponent/svg_d3";
const Turntable = dynamic(
  () => import("@/components/portfolioComponent/turntable"),
  { ssr: false }
);
const Book = dynamic(() => import("@/components/book"), {
  ssr: false,
});
const Drag = dynamic(() => import("@/components/portfolioComponent/drag"), {
  ssr: false,
});

const IntersectionObserverLazyload = dynamic(
  () => import("@/components/portfolioComponent/instersectionObserve"),
  {
    ssr: false,
  }
);
const ParallaxPage = dynamic(() =>
  import("@/components/portfolioComponent/parallaxPage")
);

export const componentInstance = [
  { name: "轉盤", component: Turntable },
  { name: "翻書", component: Book },
  { name: "拖曳小玩意兒", component: Drag },
  { name: "酷酷A臺灣", component: Svgd3 },
  { name: "IntersectionObserver", component: IntersectionObserverLazyload },
  { name: "視差滾動", component: ParallaxPage },
];
