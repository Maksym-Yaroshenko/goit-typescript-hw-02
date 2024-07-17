export interface ImgProfile {
  alt_description: string;
  id: string;
  description: string;
  urls: { small: string; regular: string; [key: string]: string };
  [key: string]: unknown;
}

export interface FetchImagesResponse {
  results: ImgProfile[];
  total_pages: number;
}
