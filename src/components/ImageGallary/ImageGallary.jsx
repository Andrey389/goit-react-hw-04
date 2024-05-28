import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallary.module.css";

export default function ImageGallary({ images }) {
  return (
    <ul className={css.imgList}>
      {images.map((image) => (
        <li className={css.imgItem} key={image.id}>
          <ImageCard img={image} />
        </li>
      ))}
    </ul>
  );
}
