import axios from "axios";

const baseURL = "https://api.unsplash.com/";

const API_KEY = "gyEotlsTfMSlLu_xuTDVFFzdKddQrQNccZ1wXUj9oDQ";

export const getGallary = async (topic, currentPage) => {
  const response = await axios.get(`${baseURL}/search/photos`, {
    params: {
      query: topic,
      client_id: API_KEY,
      page: currentPage,
      per_page: 4,
    },
  });
  return response.data;
};
