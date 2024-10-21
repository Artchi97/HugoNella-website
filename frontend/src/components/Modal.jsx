import "../styles/Modal.css";
import { useState, useEffect, useRef } from "react";

export default function Modal({
  images,
  activeImageIndex,
  closeModal,
  showNextImage,
  showPrevImage,
}) {
  const [startX, setStartX] = useState(0);
  const modalImageContainerRef = useRef(null);

  function handleTouchStart(e) {
    setStartX(e.touches[0].clientX);
  }

  function handleTouchEnd(e) {
    const endX = e.changedTouches[0].clientX;
    const distance = startX - endX;

    if (distance > 50) {
      showNextImage();
    } else if (distance < -50) {
      showPrevImage();
    }
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowRight") {
        showNextImage();
      } else if (e.key === "ArrowLeft") {
        showPrevImage();
      } else if (e.key === "Escape") {
        closeModal();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showNextImage, showPrevImage, closeModal]);

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        ref={modalImageContainerRef}
      >
        <button className="close-modal" onClick={closeModal}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        {images.length > 1 ? (
          <button className="previous-image" onClick={showPrevImage}>
            &#10094;
          </button>
        ) : (
          ""
        )}
        <div className="modal-image-container">
          <img
            src={images[activeImageIndex]}
            alt="dog-image"
            className="modal-image"
          />
        </div>
        {images.length > 1 ? (
          <button className="next-image" onClick={showNextImage}>
            &#10095;
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
