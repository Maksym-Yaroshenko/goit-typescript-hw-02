import Modal from "react-modal";
Modal.setAppElement("#root");
import css from "./ImageModal.module.css";

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

export default function ImageModal({ closeModal, modalIsOpen, articles }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
      closeTimeoutMS={400}
      className={css.modal}
    >
      <img src={articles.regular} alt={articles.alt_description} />
    </Modal>
  );
}
