import { useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallary from "../ImageGallary/ImageGallary";
import "./App.css";

export default function App() {
  useEffect(() => {
    async function getGallary() {
      const response = await axios.get(
        "https://api.unsplash.com//search/photos"
      );
      console.log(response.data.hits);
    }
    getGallary();
  }, []);

  return (
    <>
      <SearchBar />
      <ImageGallary />
    </>
  );
}
