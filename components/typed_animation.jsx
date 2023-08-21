import { useRef, useEffect } from "react";
import Typed from "typed.js";
export default function Typed_animation() {
  const typedRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["<h2>請將頁面往下捲動</h2>"],
      typeSpeed: 50,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <span ref={typedRef}></span>
    </div>
  );
}
