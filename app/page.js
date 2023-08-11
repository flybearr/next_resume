import Book from "../components/book";
import Link from "next/link";
import Image from "next/image";
import photos from "./_utils/photo";
export default function Home() {
  const newPhotos = photos;
  return (
    <main className="flex w-full h-full flex-col items-center justify-center">
      {/* <Book /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
        {newPhotos.map(({ id, imageSrc }) => (
          <Link key={id} href={`/photos/${id}`}>
            <Image
              alt=""
              src={imageSrc}
              height={500}
              width={500}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
