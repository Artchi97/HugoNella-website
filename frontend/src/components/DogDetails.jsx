import "../styles/DogDetails.css";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";
import dogsData from "../dogsData";
import BackButton from "./BackButton";
import { useFadeIn } from "../customHooks/useFadeIn";

export default function DogDetails() {
  const isVisible = useFadeIn();
  const { dogName } = useParams();
  const navigate = useNavigate();
  const { translation, language } = useContext(LanguageContext);

  const dog = dogsData.find((d) => d.dogName === dogName);

  if (!dog) {
    return <h2 className="dog-not-found">Pies nie został znaleziony!</h2>;
  }

  function handleShowsClick() {
    navigate(`/shows/${dogName}`);
  }

  function handleDogGalleryClick() {
    navigate(`/dog-gallery/${dogName}`);
  }

  return (
    <div
      className={`dog-details-main-div fade-in ${
        isVisible ? "fade-in-active" : ""
      }`}
    >
      <div className="dog-details-above-img">
        <h2 className="dog-details-fullname">{dog.fullName}</h2>
        <p className="dog-details-name">"{dog.dogName}"</p>
        {dog.titles[language].map((title, index) => (
          <p key={index} className="dog-details-title">
            {title}
          </p>
        ))}
      </div>
      <div className="dog-details-main-photo">
        <img
          className="dog-details-image"
          src={dog.images[0]}
          alt={dog.dogName}
          loading="lazy"
        />
      </div>
      <div className="details-below-img">
        <p className="dog-type">{dog.type[language]}</p>
        <p className="dog-birthday">
          <span className="detail-title">
            {translation.ourDogDetailsSection.born}
          </span>
          {dog.birthday}
        </p>
        <p className="parents-name">
          <span className="detail-title">
            {translation.ourDogDetailsSection.parents}
          </span>
          {dog.parents}
        </p>

        <div className="test-results">
          {dog.tests.length > 0 ? (
            <>
              <span className="detail-title">
                {translation.ourDogDetailsSection.tests}
              </span>
              {dog.tests.map((test, index) => (
                <p key={index} className="detail-test">
                  {test}
                </p>
              ))}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="details-buttons-section">
        {dog.lineage !== "" ? (
          <a href={dog.lineage} target="_blank" rel="noreferrer">
            <button className="details-button">
              {translation.ourDogDetailsSection.checkLineageBtn}
            </button>
          </a>
        ) : (
          ""
        )}

        <button className="details-button" onClick={handleShowsClick}>
          {" "}
          {translation.ourDogDetailsSection.showsBtn}
        </button>
        <button className="details-button" onClick={handleDogGalleryClick}>
          {translation.ourDogDetailsSection.galleryBtn}
        </button>
      </div>
      <BackButton className="back-button" />
    </div>
  );
}
