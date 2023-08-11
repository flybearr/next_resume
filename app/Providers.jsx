"use client";
import { useState } from "react";
import { ThemeProvider } from "next-themes";
export default function Providers({ children }) {
  //   const [color, setColor] = useState(true);
  //   const ChangeColorStyle = function () {
  //     setColor(!color);
  //   };
  return <ThemeProvider>{children}</ThemeProvider>;
}
