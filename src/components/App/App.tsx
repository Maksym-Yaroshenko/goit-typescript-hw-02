import { FC, useEffect, useState } from "react";
import { getArticles } from "../../../articles-api";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

import { ImgProfile, FetchImagesResponse } from "./App.types";

const App: FC = () => {
  const [articles, setArticles] = useState<ImgProfile[]>([]);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [serchQuery, setSerchQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [showBtn, setShowBtn] = useState<boolean>(false);

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<ImgProfile | null>(null);

  useEffect(() => {
    if (!serchQuery.trim()) return;

    const fetchArticles = async (): Promise<void> => {
      try {
        setErrorMessage(false);
        setLoader(true);

        const { results, total_pages }: FetchImagesResponse = await getArticles(
          serchQuery,
          page
        );
        setArticles((prev) => [...prev, ...results]);

        setShowBtn(total_pages > page);
      } catch (error) {
        setErrorMessage(true);
      } finally {
        setLoader(false);
      }
    };

    fetchArticles();
  }, [serchQuery, page]);

  const handleSearch = async (topic: string): Promise<void> => {
    setSerchQuery(topic);
    setPage(1);
    setArticles([]);
  };

  const handleClickBtn = (): void => {
    setPage(page + 1);
  };

  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const afterOpenModal = (photo: ImgProfile): void => {
    setModalImage(photo);
    openModal();
  };

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
      {modalIsOpen && modalImage && (
        <ImageModal
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          articles={modalImage}
        />
      )}
    </>
  );
};

export default App;
