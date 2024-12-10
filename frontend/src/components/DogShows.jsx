import "../styles/DogShows.css";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";
import BackButton from "./BackButton";
import { useFadeIn } from "../customHooks/useFadeIn";
import { dogShows } from "../shows";

function normalizeDate(dateStr) {
  if (dateStr.includes("-")) {
    const range = dateStr.split("-");
    const endDateStr = range[range.length - 1].trim();
    return parseDate(endDateStr);
  } else {
    return parseDate(dateStr);
  }
}

function parseDate(dateStr) {
  const [day, month, year] = dateStr.split(".");
  return new Date(`${year}-${month}-${day}`);
}

export default function DogShows() {
  const isVisible = useFadeIn();

  const { dogName } = useParams();
  const { translation, language } = useContext(LanguageContext);

  const filteredShows = dogShows.filter((show) => show.dogName === dogName);

  const sortedShows = filteredShows.sort((a, b) => {
    const dateA = normalizeDate(a.showDate);
    const dateB = normalizeDate(b.showDate);
    return dateB - dateA;
  });

  return (
    <div
      className={`shows-section fade-in ${isVisible ? "fade-in-active" : ""}`}
    >
      <span className="shows-title">{translation.dogShows.showMainTitle}</span>
      {sortedShows.length > 0 ? (
        sortedShows.map((show, index) => (
          <div key={index} className="show-container">
            <h3 className="show-name">
              {language === "pl" ? `${show.showName}` : `${show.showNameEng}`}
            </h3>
            <p className="show-place">
              <span className="show-titles">{translation.dogShows.place}</span>
              {`${show.showPlace}`}
            </p>
            <p className="show-date">
              <span className="show-titles">{translation.dogShows.date}</span>
              {` ${show.showDate}`}
            </p>
            <p className="show-judge">
              <span className="show-titles">{translation.dogShows.judge}</span>
              {`${show.showJudge}`}
            </p>
            <p className="show-opinion">
              <span className="show-titles">{translation.dogShows.rate}</span>
              {language === "pl"
                ? `${show.showDescription}`
                : `${show.showDescriptionEng}`}
            </p>
          </div>
        ))
      ) : (
        <p key={Math.random()} className="no-show">
          Brak wystaw dla tego psa.
        </p>
      )}
      <BackButton className="back-button" />
    </div>
  );
}
