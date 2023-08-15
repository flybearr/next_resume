import LoremPic from "../../../components/loremPic";
import photos from "../../_utils/photo.js";
export default function PostId({ params }) {
  const { id } = params;
  const newPhotos = photos.find((p) => p.id === id);
  return (
    <div className="container mx-auto">
      <div className="w-1/2 mx-auto border border-gray-700">
        <LoremPic photo={newPhotos} />
      </div>
    </div>
  );
}
