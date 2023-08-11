import "./index.css";
import { Inter } from "next/font/google";
import "../styles/layout.scss";
import NavBar from "../components/NavBar";
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
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
          {mmd}
        </Providers>
      </body>
    </html>
  );
}
