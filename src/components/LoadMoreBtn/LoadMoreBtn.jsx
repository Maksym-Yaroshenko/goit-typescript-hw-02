import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ handleClickBtn }) {
  return (
    <>
      <button className={css.container} onClick={handleClickBtn}>
        Load more
      </button>
    </>
  );
}
