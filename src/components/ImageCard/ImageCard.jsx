import css from "./ImageCard.module.css";

export default function ImageCard({ img }) {
  return (
    <div>
      <img className={css.img} src={img.urls.small} alt={img.description} />
    </div>
  );
}
