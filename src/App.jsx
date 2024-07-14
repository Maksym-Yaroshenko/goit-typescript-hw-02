import { useEffect, useState } from "react";
import { getArticles } from "../articles-api";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [articles, setArticles] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loader, setLoader] = useState(false);
  const [serchQuery, setSerchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    if (!serchQuery.trim()) return;

    const fetchArticles = async () => {
      try {
        setErrorMessage(false);
        setLoader(true);

        const { results, total_pages } = await getArticles(serchQuery, page);
        setArticles((prev) => [...prev, ...results]);

        setShowBtn(total_pages && total_pages !== page);
      } catch (error) {
        setErrorMessage(true);
      } finally {
        setLoader(false);
      }
    };

    fetchArticles();
  }, [serchQuery, page]);

  const handleSearch = async (topic) => {
    setSerchQuery(topic);
    setPage(1);
    setArticles([]);
  };

  const handleClickBtn = () => {
    setPage(page + 1);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function afterOpenModal(photo) {
    setModalImage(photo);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {articles.length > 0 && (
        <ImageGallery
          articles={articles}
          openModal={openModal}
          afterOpenModal={afterOpenModal}
        />
      )}
      {loader && <Loader />}
      {errorMessage && <ErrorMessage />}
      {showBtn && <LoadMoreBtn handleClickBtn={handleClickBtn} />}
      {modalIsOpen && (
        <ImageModal
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          articles={modalImage}
        />
      )}
    </>
  );
}

export default App;
