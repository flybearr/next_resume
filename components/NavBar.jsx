"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const ChangeColorStyle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  console.log(theme);
  return (
    <>
      <header>
        <div className="header_wrap">
          <div className="header_left">
            <Link href="/introduce">
              <h3>簡單介紹</h3>
            </Link>

            <Link href="/skill">
              <h3>技能</h3>
            </Link>

            <Link href="/portfolio">
              <h3>作品集</h3>
            </Link>
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
                <span className={theme === "dark" ? "darkImg" : "none"}>
                  🌜
                </span>
              ) : (
                <span className={theme === "dark" ? "none" : "lightImg"}>
                  🌞
                </span>
              )}
              <div
                className={theme === "dark" ? "is-active circle" : "circle"}
                onClick={ChangeColorStyle}
              ></div>
            </div>
            <h3>Login</h3>
          </div>
        </div>
      </header>
    </>
  );
}
