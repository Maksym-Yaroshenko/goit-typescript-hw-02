import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { ImgProfile } from "../App/App.types";
import { FC } from "react";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
};

interface ImageModalProfile {
  closeModal: () => void;
  modalIsOpen: boolean;
  articles: ImgProfile;
}

const ImageModal: FC<ImageModalProfile> = ({
  closeModal,
  modalIsOpen,
  articles,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
      closeTimeoutMS={400}
      className={css.modal}
    >
      <img src={articles.urls.regular} alt={articles.alt_description} />
    </Modal>
  );
};

export default ImageModal;
