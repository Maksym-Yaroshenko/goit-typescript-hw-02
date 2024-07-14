import ImageCard from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ articles, openModal, afterOpenModal }) {
  return (
    <>
      <ul className={css.container}>
        {articles.map(({ urls, id }) => (
          <li className={css.memuItem} key={id}>
            <ImageCard
              urls={urls}
              openModal={openModal}
              afterOpenModal={afterOpenModal}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
