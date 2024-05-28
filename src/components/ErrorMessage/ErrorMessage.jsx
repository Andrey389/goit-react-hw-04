import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.textMessage}>Opps! There was an error! Try reloading! </p>
  );
}
