"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import "../styles/navBar.scss";
export default function NavBar() {
  const mobile = useMediaQuery({ query: "(max-width:837px)" });
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [navBarOpen, setNavBarOpen] = useState(false);
  const ChangeColorStyle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const NavTitle = [
    { title: "introduce", href: "/introduce" },
    { title: "skill", href: "/skill" },
    { title: "social", href: "/" },
    { title: "portf", href: "/portfolio" },
    {
      title: "Note",
      href: "https://www.notion.so/flybearrrr/b0f3b9c75dc64761aacfcc1d8f3e4ae7?v=9af3380a699b41b0a82822910a08cc46&pvs=4o",
    },
  ];

  return (
    <header>
      <div className="header_wrap">
        {mobile ? (
          <>
            <div
              className={`bars ${navBarOpen ? "barsActive" : "barsDisable"}`}
            >
              <div className="w-full h-10">
                <div className="svg_wrap">
                  <div className="">
                    <FontAwesomeIcon
                      icon={faX}
                      className="icon_x"
                      size="xl"
                      onClick={() => {
                        setNavBarOpen(false);
                      }}
                    />
                  </div>
                </div>
                <div className="w-full h-full">
                  {NavTitle.map((v, index) => {
                    return (
                      <Link
                        key={`title${index}`}
                        href={v.href}
                        target={v.title === "Note" ? "_blank" : ""}
                        className={`navbar_title ${
                          pathname === v.href ? "nav_select" : ""
                        }`}
                      >
                        <h3
                          onClick={() => {
                            setNavBarOpen(false);
                          }}
                        >
                          {v.title}
                        </h3>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="">
                <FontAwesomeIcon
                  icon={faBars}
                  size="2x"
                  className="icon_highlight"
                  style={{
                    margin: "10px 0px 0px 15px",
                  }}
                  onClick={() => {
                    setNavBarOpen(true);
                  }}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="header_left">
            {NavTitle.map((v, index) => {
              return (
                <Link
                  key={`title${index}`}
                  href={v.href}
                  target={v.title === "筆記連結" ? "_blank" : ""}
                  className={`navbar_title ${
                    pathname === v.href ? "nav_select" : ""
                  }`}
                >
                  <h3>{v.title}</h3>
                </Link>
              );
            })}
          </div>
        )}

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
