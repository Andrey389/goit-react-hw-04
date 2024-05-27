import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallary({ images }) {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard img={image} />
        </li>
      ))}
    </ul>
  );
}
