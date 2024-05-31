import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.container}>
      <button onClick={onClick} type="button" className={css.loadMoreBtn}>
        Load more
      </button>
    </div>
  );
}
