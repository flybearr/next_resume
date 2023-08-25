import { useRef, useEffect } from "react";
import Typed from "typed.js";
export default function Typed_animation() {
  const typedRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["<h1>請將頁面往下捲動</h1>"],
      typeSpeed: 100,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="w-full mt-10">
      <span className="text-center" ref={typedRef}></span>
    </div>
  );
}
