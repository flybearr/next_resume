"use client";

import { useState } from "react";
import { examples } from "./bookComponent/example";
import "../styles/book.scss";
export default function Book() {
  const [nowPage, setNowPage] = useState(0);
  const plus = function (e, i) {
    e.target.classList.remove("normal");
    setTimeout(() => {
      e.target.classList.add("normal");
    }, 2000);
    if (i >= nowPage) {
      setNowPage(nowPage + 1);
    } else {
      setNowPage(nowPage - 1);
    }
  };
  function throttle(fn, delay = 500) {
    let timeId = null;

    return function (...args) {
      if (!timeId) {
        timeId = setTimeout(() => {
          timeId = null;
          fn.apply(this, args);
        }, delay);
      }
    };
  }
  const newCb = (e, i) => {
    throttle(plus(e, i));
  };

  return (
    <div className="container">
      {examples.map((v, i) => {
        let newClassName = "";
        let newStyle = {};
        if (i === 0) {
          newClassName = `frontCover  ${nowPage >= 1 ? "book_active" : ""}`;
        } else {
          newClassName = ` page${i} ${nowPage >= i + 1 ? "book_active" : ""}  ${
            nowPage === i ? "lookingPage" : ""
          }`;
          newStyle = { zIndex: nowPage >= i + 1 ? 100 : "" };
        }
        const Newcomponent = v.components;
        return (
          <div
            key={"book" + i}
            className={`normal ${newClassName}`}
            style={newStyle}
            onClick={(e) => {
              newCb(e, i);
            }}
          >
            <Newcomponent />
          </div>
        );
      })}
    </div>
  );
}
