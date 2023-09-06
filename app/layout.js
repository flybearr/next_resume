/* eslint-disable @next/next/no-page-custom-font */
// "use clinet";
import "./index.css";
import { Inter } from "next/font/google";
// import { Permanent_Marker } from "next/font/google";
import dynamic from "next/dynamic";
import "../styles/layout.scss";
// const pmFont = Permanent_Marker({ subsets: ["latin"], weight: ["400"] });
const NavBar = dynamic(() => import("../components/NavBar"), { ssr: false });
const inter = Inter({ subsets: ["latin"] });

import Providers from "./Providers";
export const metadata = {
  title: "Portfolio",
  description: "Portfolio resume",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({ children, mmd }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
        />
      </head>

      <body className={`${inter.className}`}>
        <Providers>
          <NavBar />
          <div className="w-full h-[62px]"></div>
          <div className="w-full h-[93%]">
            {children}
            {mmd}
          </div>
        </Providers>
      </body>
    </html>
  );
}
