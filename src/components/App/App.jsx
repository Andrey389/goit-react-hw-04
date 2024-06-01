import { useEffect, useState } from "react";
import { getGallary } from "../../Api";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallary from "../ImageGallary/ImageGallary";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import "./App.css";

export default function App() {
  const [artgallary, setArtgallary] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalPages, setTotalPages] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selImageUrl, setSelImageUrl] = useState("");

  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }
    async function fetchGallary() {
      try {
        setIsLoader(true);
        setIsError(false);
        const { results, total_pages } = await getGallary(searchQuery, page);

        setArtgallary((prevState) => [...prevState, ...results]);
        setTotalPages(page < Math.ceil(total_pages / 15));
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

  const openImageModal = (imageUrl) => {
    setSelImageUrl(imageUrl);
    setIsOpenModal(true);
  };

  const closeImageModal = () => {
    setSelImageUrl("");
    setIsOpenModal(false);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {artgallary.length > 0 && (
        <ImageGallary images={artgallary} onOpenModal={openImageModal} />
      )}
      {isLoader && <Loader />}
      {isError && <ErrorMessage />}
      {artgallary.length > 0 && !isLoader && totalPages && (
        <LoadMoreBtn onClick={handleLoadMoreBtn} />
      )}
      <ImageModal
        isOpen={isOpenModal}
        onClose={closeImageModal}
        imageUrl={selImageUrl}
      />
    </>
  );
}
