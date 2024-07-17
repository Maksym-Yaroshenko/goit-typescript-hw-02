import { FC } from "react";
import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: FC<ImageCardProps> = ({
  articles,
  openModal,
  afterOpenModal,
}) => {
  const handleClick = () => {
    afterOpenModal(articles);
  };

  return (
    <div className={css.card} onClick={handleClick}>
      <img
        className={css.image}
        src={articles.urls.small}
        alt={articles.description}
      />
    </div>
  );
};

export default ImageCard;
