import { useEffect, useState } from "react";
import { getGallary } from "../../Api";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import "./App.css";

export default function App() {
  const [artgallery, setArtgallery] = useState([]);
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

        setArtgallery((prevState) => [...prevState, ...results]);
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
    setArtgallery([]);
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
      {artgallery.length > 0 && (
        <ImageGallery images={artgallery} onOpenModal={openImageModal} />
      )}
      {isLoader && <Loader />}
      {isError && <ErrorMessage />}
      {artgallery.length > 0 && !isLoader && totalPages && (
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
