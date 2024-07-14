import css from "./ImageCard.module.css";

export default function ImageCard({ urls, openModal, afterOpenModal }) {
  const handleClick = () => {
    openModal();
    afterOpenModal(urls);
  };
  return (
    <>
      <div className={css.container} onClick={handleClick}>
        <img className={css.image} src={urls.small} alt={urls.alt} />
      </div>
    </>
  );
}
