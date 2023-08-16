import Modal from "../../../../components/Modals";
import LoremPic from "../../../../components/loremPic";
import photos from "../../../_utils/photo";
export default function PostsModal({ params }) {
  const { id } = params;
  const newPhotos = photos;
  const getPhotos = newPhotos.find((p) => p.id === id);
  return (
    <Modal>
      <LoremPic photo={getPhotos} />
    </Modal>
  );
}
