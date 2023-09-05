"use client";
import Link from "next/link";
import Image from "next/image";
import photos from "./_utils/photo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import "@/styles/home.scss";
export default function Home() {
  const newPhotos = photos;
  const fireBtn = (e) => {
    if (e.target.classList.value.includes("icon_fire_animate")) {
      e.target.classList.remove("icon_fire_animate");
    } else {
      setTimeout(() => {
        e.target.classList.add("icon_fire_animate");
      }, 300);
    }
  };
  return (
    <main className="flex w-full h-full flex-col items-center justify-center">
      <div className="h-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
        {newPhotos.map(({ id, imageSrc, name, username }) => (
          <div className="w-full" key={id}>
            <Link href={`/photos/${id}`}>
              <Image
                alt={imageSrc}
                src={imageSrc}
                height={500}
                width={500}
                className="w-full object-cover aspect-square"
              />
            </Link>
            <div className="w-full">
              <h3>{name}</h3>
              <p>
                Taken by <em>{username}</em>
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
