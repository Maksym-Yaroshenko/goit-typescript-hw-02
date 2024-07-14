import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getArticles = async (topic, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: topic,
      page: page,
      per_page: 18,
      client_id: "duCeDk0DC7PPxBSLAtblsNuvhoKEeMQjPIFw5fYUIyg",
    },
  });

  return response.data;
};
