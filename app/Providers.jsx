"use client";
import { useState } from "react";
import { ThemeProvider } from "next-themes";
export default function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
