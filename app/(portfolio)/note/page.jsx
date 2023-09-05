import React from "react";
import Image from "next/image";
import Link from "next/link";
import portfilio from "@/app/_utils/portfilio";
export default function Page() {
  return (
    <section className="flex w-full h-full flex-col items-center justify-center">
      <div className=" h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-6 m-10">
        {portfilio.map(({ id, imageSrc, name, username, href }) => (
          <div
            className="w-full border-2 border-cyan-300 rounded-lg p-2"
            key={id}
          >
            <Link href={href} target="_blank">
              <Image
                alt={imageSrc}
                src={imageSrc}
                height={281}
                width={500}
                className="w-full object-cover aspect-auto"
              />
            </Link>
            <div className="w-full"></div>
            <div className="w-full">
              <h3>{name}</h3>
              <p>Taken by {username}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
