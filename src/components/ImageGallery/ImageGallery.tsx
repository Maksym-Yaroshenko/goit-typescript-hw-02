import { FC } from "react";
import ImageCard from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProfile } from "./ImageGallery.types";

const ImageGallery: FC<ImageGalleryProfile> = ({
  articles,
  openModal,
  afterOpenModal,
}) => {
  return (
    <>
      <ul className={css.container}>
        {articles.map((article) => (
          <li className={css.memuItem} key={article.id}>
            <ImageCard
              articles={article}
              openModal={openModal}
              afterOpenModal={afterOpenModal}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
