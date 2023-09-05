import React from "react";
import Image from "next/image";
import Link from "next/link";
import portfilioScrennShot from "@/app/_utils/portfilioScrennShot";
export default function PortfolioList() {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-6 m-10">
        {portfilioScrennShot.map(({ id, imageSrc, name, username, href }) => (
          <div
            className="bg-white text-black second-font w-full border-2 shadow-md rounded-lg p-2 overflow-hidden hoverScale"
            key={id}
          >
            <Link href={href} target="_blank">
              <div className="overflow-hidden">
                <Image
                  alt={imageSrc}
                  src={imageSrc}
                  height={281}
                  width={500}
                  className="w-full object-cover aspect-auto"
                />
              </div>
            </Link>
            <div className="w-full"></div>
            <div className="w-full">
              <h2 className="second-font">{name}</h2>
              <p>Create by {username}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
