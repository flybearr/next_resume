import React from "react";
import CircleProgress from "../../../components/circleProgress";
export default function page() {
  return (
    <div className="w-full h-full">
      <div className="fixed right-0 top-20">
        <CircleProgress scroll />
      </div>
      {Array(5)
        .fill(1)
        .map((_, i) => {
          return (
            <div className="w-full h-[100vh]" key={"empty_page" + i}></div>
          );
        })}
    </div>
  );
}
