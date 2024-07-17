import { ImgProfile } from "../../App/App.types";

export interface ImageCardProps {
  articles: ImgProfile;
  openModal: () => void;
  afterOpenModal: (data: ImgProfile) => void;
}
