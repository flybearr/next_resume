"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import "../styles/navBar.scss";
export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const ChangeColorStyle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const NavTitle = [
    { title: "介紹", href: "/introduce" },
    { title: "技能", href: "/skill" },
    { title: "作品集", href: "/portfolio" },
  ];
  return (
    <header>
      <div className="header_wrap">
        <div className="header_left">
          {NavTitle.map((v, index) => {
            return (
              <Link
                key={`title${index}`}
                href={v.href}
                className={`navbar_title ${
                  pathname === v.href ? "nav_select" : ""
                }`}
              >
                <h3>{v.title}</h3>
              </Link>
            );
          })}
        </div>

        <div className="header_right">
          <button onClick={ChangeColorStyle}></button>
          <div
            id="btn_container"
            className={
              theme === "dark" ? "is-active btn_container" : "btn_container"
            }
          >
            {theme === "dark" ? (
              <span className={theme === "dark" ? "darkImg" : "none"}>🌜</span>
            ) : (
              <span className={theme === "dark" ? "none" : "lightImg"}>🌞</span>
            )}
            <div
              className={theme === "dark" ? "is-active circle" : "circle"}
              onClick={ChangeColorStyle}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
}
