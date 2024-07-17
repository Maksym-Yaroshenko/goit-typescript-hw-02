import { FC } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProfile {
  handleClickBtn(): void;
}

const LoadMoreBtn: FC<LoadMoreBtnProfile> = ({ handleClickBtn }) => {
  return (
    <>
      <button className={css.container} onClick={handleClickBtn}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreBtn;
