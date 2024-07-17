import { ImgProfile } from "../App/App.types";

export interface ImageGalleryProfile {
  articles: ImgProfile[];
  openModal: () => void;
  afterOpenModal: (data: ImgProfile) => void;
}
