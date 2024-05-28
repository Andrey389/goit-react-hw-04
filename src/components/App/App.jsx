import { useEffect, useState } from "react";
import { getGallary } from "../../Api";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallary from "../ImageGallary/ImageGallary";
import "./App.css";

export default function App() {
  const [artgallary, setArtgallary] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchGallary() {
      try {
        setIsLoader(true);
        const fetchGallary = await getGallary("cars");
        setArtgallary(fetchGallary);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }
    fetchGallary();
  }, []);

  return (
    <>
      <SearchBar />
      {artgallary.length > 0 && <ImageGallary images={artgallary} />}
      {isLoader && <Loader />}
      {isError && <ErrorMessage />}
    </>
  );
}
