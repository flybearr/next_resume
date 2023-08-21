// "use clinet";
import "./index.css";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "../styles/layout.scss";
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
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter.className}`}>
        <Providers>
          <NavBar />
          <div className="w-full h-[7%]"></div>
          <div className="w-full h-[93%] ">
            {children}
            {mmd}
          </div>
        </Providers>
      </body>
    </html>
  );
}
