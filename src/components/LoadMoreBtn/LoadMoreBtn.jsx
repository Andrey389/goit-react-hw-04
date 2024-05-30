import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick, onDisable }) {
  return (
    <div className={css.container}>
      <button
        onClick={onClick}
        disabled={onDisable}
        className={css.loadMoreBtn}
      >
        Load more
      </button>
    </div>
  );
}
