import "../styles/Litters.css";
import { useState, useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import { useParams } from "react-router-dom";
import Modal from "./Modal";
import BackButton from "./BackButton";
import { useFadeIn } from "../customHooks/useFadeIn";
import { litters } from "../litters";

export default function Litters({ littersData }) {
  const isVisible = useFadeIn();
  const { type } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeLitterPhotos, setActiveLitterPhotos] = useState([]);
  const { translation } = useContext(LanguageContext);

  const filteredLitters = litters.filter(
    (litter) => litter.litterStatus === type
  );

  function handleOpenModal(photos, index) {
    setActiveLitterPhotos(photos);
    setActiveImageIndex(index);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleShowPreviousImage() {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? activeLitterPhotos.length - 1 : prevIndex - 1
    );
  }

  function handleShowNextImage() {
    setActiveImageIndex((prevIndex) =>
      prevIndex === activeLitterPhotos.length - 1 ? 0 : prevIndex + 1
    );
  }

  function handleMainImgClick(photo) {
    setActiveLitterPhotos([photo]);
    setActiveImageIndex(0);
    setIsModalOpen(true);
  }

  return (
    <>
      <div
        className={`dog-details-gallery-container fade-in ${
          isVisible ? "fade-in-active" : ""
        }`}
      >
        <h2 className="h2-litter-status">
          {type === "current"
            ? `${translation.currentLittersSection.title}`
            : type === "previous"
            ? `${translation.previousLittersSection.title}`
            : `${translation.plannedLittersSection.title}`}
        </h2>
        {filteredLitters.length > 0 ? (
          filteredLitters.map((litter) => {
            const photos = litter.litterPhotos;

            return (
              <div className="litter-container" key={litter.id}>
                <h2 className="litter-h2">{litter.litterName}</h2>
                <div className="litter-main-img-container">
                  <img
                    src={litter.litterMainPhoto}
                    alt="plakat miotu"
                    className="main-img"
                    loading="lazy"
                    onClick={() => handleMainImgClick(litter.litterMainPhoto)}
                  />
                </div>
                <p className="litter-date">{litter.litterDate}</p>
                <p className="parent-litter">
                  <span className="parent-litter-title">
                    {translation.littersSection.mother}
                  </span>
                  {litter.mother}
                </p>
                <p className="parent-litter">
                  <span className="parent-litter-title">
                    {translation.littersSection.father}
                  </span>
                  {litter.father}
                </p>
                <div className="litter-gallery">
                  {photos.map((photo, index) => (
                    <div
                      key={index}
                      className="litter-photo-container"
                      onClick={() => handleOpenModal(photos, index)}
                    >
                      <img
                        className="litter-photo"
                        src={photo}
                        alt={litter.litterName}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-litters-info">
            {type === "current"
              ? `${translation.littersSection.noCurrentLitters}`
              : type === "planned"
              ? `${translation.littersSection.noPlannedLitters}`
              : "Brak miotów do wyświetlenia"}
          </div>
        )}
        <BackButton className="back-button" />
      </div>

      {isModalOpen && (
        <Modal
          images={activeLitterPhotos}
          activeImageIndex={activeImageIndex}
          closeModal={handleCloseModal}
          showNextImage={handleShowNextImage}
          showPrevImage={handleShowPreviousImage}
        />
      )}
    </>
  );
}
