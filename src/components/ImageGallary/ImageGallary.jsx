import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallary({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={items.id}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
}
