import axios from "axios";

const baseURL = "https://api.unsplash.com/";

const API_KEY = "4J8jSPPSjIZBvyaks-vAdWLGI8o9eC1m7FXYBkS6hx8";

export const getGallary = async (topic, page) => {
  const response = await axios.get(`${baseURL}/search/photos`, {
    params: { query: topic, client_id: API_KEY, page },
  });
  return response.data.results;
};
