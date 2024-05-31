import { useEffect, useState } from "react";
import { getGallary } from "../../Api";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallary from "../ImageGallary/ImageGallary";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import "./App.css";

export default function App() {
  const [artgallary, setArtgallary] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalPages, setTotalPages] = useState(false);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }
    async function fetchGallary() {
      try {
        setIsLoader(true);
        setIsError(false);
        const { fetchGallary, total } = await getGallary(searchQuery, page);

        setArtgallary((prevState) => [...prevState, ...fetchGallary]);
        setTotalPages(page < Math.ceil(total / 15));
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }
    fetchGallary();
  }, [page, searchQuery]);

  const handleSearch = async (topic) => {
    setSearchQuery(topic);
    setPage(1);
    setArtgallary([]);
  };

  const handleLoadMoreBtn = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {artgallary.length > 0 && <ImageGallary images={artgallary} />}
      {isLoader && <Loader />}
      {isError && <ErrorMessage />}
      {artgallary.length > 0 && !isLoader && totalPages && (
        <LoadMoreBtn onClick={handleLoadMoreBtn} />
      )}
    </>
  );
}
