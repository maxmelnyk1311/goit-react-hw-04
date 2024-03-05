import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import ModalWindow from '../ModalWindow/ModalWindow.jsx';

import { fetchImagesByQuery } from '../../API/imagesAPI.js';


export default function App() {
  const [query, setQuery] = useState("");  
  const [page, setPage] = useState(1);  
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imgItems, setImgItems] = useState({});
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getData() {
      try {
        setLoading(true);
        const {results, total_pages} = await fetchImagesByQuery(query, page);
        setShowBtn(total_pages && total_pages !== page);
        setImages((prevImages) => {
          return [...prevImages, ...results]
        })
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [page, query])
    
  function handleSearch(query) {
    setPage(1);
    setQuery(query);
    setImages([]);
  }

  function handleLoadMore() {
    setPage(page + 1);
  }

  function handleOpenModal(imgItems) {
    setIsOpen(true);
    setImgItems(imgItems);
  }

  function handleModalClose() {
    setIsOpen(false);
    setImgItems({});
  }

  return (
    <>
      <SearchBar onSearch={handleSearch}/>
      {images.length > 0 && 
        <ImageGallery 
          images={images}
          handleOpenModal={handleOpenModal}
        />}
      {loading && <Loader />}
      {showBtn && <LoadMoreBtn handleLoadMore={handleLoadMore}/>}
      {error && <ErrorMessage />}
      {modalIsOpen && 
        <ModalWindow 
          isOpen={modalIsOpen}
          imgItems={imgItems}
          handleModalClose={handleModalClose}
        />
      }
    </>
  )
}


