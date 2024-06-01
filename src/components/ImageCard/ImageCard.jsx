import css from "./ImageCard.module.css";

export default function ImageCard({ img, onClickOpen }) {
  const handleClick = () => {
    onClickOpen(img.urls.small);
  };
  return (
    <div>
      <img
        className={css.img}
        src={img.urls.small}
        alt={img.description}
        onClick={handleClick}
      />
    </div>
  );
}
