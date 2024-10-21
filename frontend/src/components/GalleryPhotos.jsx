import "../styles/GalleryPhotos.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { showsImages, dailyImages } from "../galleryImages";
import BackButton from "./BackButton";
import Modal from "./Modal";
import { useFadeIn } from "../customHooks/useFadeIn";

export default function GalleryPhotos() {
  const isVisible = useFadeIn();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { style } = useParams();

  const images = style === "shows" ? showsImages : dailyImages;

  function handleOpenModal(index) {
    setActiveImageIndex(index);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleShowPreviousImage() {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  function handleShowNextImage() {
    setActiveImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <>
      <div
        className={`gallery-photos-container fade-in ${
          isVisible ? "fade-in-active" : ""
        }`}
      >
        {style === "shows"
          ? showsImages.map((image, index) => (
              <img
                key={index}
                src={image}
                className="gallery-photo"
                alt="dog show"
                onClick={() => handleOpenModal(index)}
              />
            ))
          : dailyImages.map((image, index) => (
              <img
                key={index}
                src={image}
                className="gallery-photo"
                alt="daily"
                onClick={() => handleOpenModal(index)}
              />
            ))}
        <BackButton className="back-button" />
      </div>

      {isModalOpen && (
        <Modal
          images={images}
          activeImageIndex={activeImageIndex}
          closeModal={handleCloseModal}
          showNextImage={handleShowNextImage}
          showPrevImage={handleShowPreviousImage}
        />
      )}
    </>
  );
}
