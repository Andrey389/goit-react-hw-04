import { useEffect, useState } from "react";
import { getGallary } from "../../Api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallary from "../ImageGallary/ImageGallary";
import "./App.css";

export default function App() {
  const [artgallary, setArtgallary] = useState([]);
  useEffect(() => {
    async function fetchGallary() {
      const fetchGallary = await getGallary();
      setArtgallary(fetchGallary);
    }
    fetchGallary();
  }, []);

  return (
    <>
      <SearchBar />
      {artgallary.length > 0 && <ImageGallary items={artgallary} />}
    </>
  );
}
