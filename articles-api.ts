import axios from "axios";
import { FetchImagesResponse } from "./src/components/App/App.types";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getArticles = async (
  topic: string,
  page: number
): Promise<FetchImagesResponse> => {
  const response = await axios.get<FetchImagesResponse>("/search/photos", {
    params: {
      query: topic,
      page: page,
      per_page: 18,
      client_id: "duCeDk0DC7PPxBSLAtblsNuvhoKEeMQjPIFw5fYUIyg",
    },
  });

  return response.data;
};
