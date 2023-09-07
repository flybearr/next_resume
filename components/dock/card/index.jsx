import React from "react";
import "./cards.scss";
import Image from "next/image";
export default function Cards({ src }) {
  return (
    <span className="card">
      {/* <Image className="card__blur" src={src} alt="" width={0} height={0} /> */}
      <Image className="card__img" src={src} alt="" width={0} height={0} />
    </span>
  );
}
