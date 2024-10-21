import "../styles/Gallery.css";
import { useContext } from "react";
import { showsImages, dailyImages } from "../galleryImages";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";
import { useFadeIn } from "../customHooks/useFadeIn";

export default function Gallery() {
  const isVisible = useFadeIn();
  const { translation } = useContext(LanguageContext);

  return (
    <div
      className={`gallery-container fade-in ${
        isVisible ? "fade-in-active" : ""
      }`}
    >
      <Link to={"/gallery-photos/shows"} className="detail-container">
        <div>
          <div className="gallery-photo-div">
            <img
              src={showsImages[70]}
              alt="wystawy"
              className="shows-gallery-photo"
            />
          </div>
          <p className="gallery-sentence">{translation.gallerySection.shows}</p>
        </div>
      </Link>
      <Link to={"/gallery-photos/daily"} className="detail-container">
        <div>
          <div className="gallery-photo-div">
            <img
              src={dailyImages[12]}
              alt="życie codzienne"
              className="daily-gallery-photo"
            />
          </div>
          <p className="gallery-sentence">
            {translation.gallerySection.dailyLife}
          </p>
        </div>
      </Link>
    </div>
  );
}
