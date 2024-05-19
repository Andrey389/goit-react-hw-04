import css from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <form className={css.container}>
      <input
        className={css.textInput}
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
      <button type="submit">Search</button>
    </form>
  );
}
