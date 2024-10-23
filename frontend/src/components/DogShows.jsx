import "../styles/DogShows.css";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";
import BackButton from "./BackButton";
import { useFadeIn } from "../customHooks/useFadeIn";

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
  return new Date(`${year}-${month}=${day}`);
}

export default function DogShows({ showsData }) {
  const isVisible = useFadeIn();

  const { dogName } = useParams();
  const { translation, language } = useContext(LanguageContext);

  const rows = Array.isArray(showsData?.values) ? showsData.values : [];
  const filteredShows = rows.filter((row) => row[1] === dogName);

  const sortedShows = filteredShows.sort((a, b) => {
    const dateA = normalizeDate(a[4]);
    const dateB = normalizeDate(b[4]);
    return dateA - dateB;
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
              {language === "pl" ? `${show[2]}` : `${show[7]}`}
            </h3>
            <p className="show-place">
              <span className="show-titles">{translation.dogShows.place}</span>
              {`${show[3]}`}
            </p>
            <p className="show-date">
              <span className="show-titles">{translation.dogShows.date}</span>
              {` ${show[4]}`}
            </p>
            <p className="show-judge">
              <span className="show-titles">{translation.dogShows.judge}</span>
              {`${show[5]}`}
            </p>
            <p className="show-opinion">
              <span className="show-titles">{translation.dogShows.rate}</span>
              {language === "pl" ? `${show[6]}` : `${show[8]}`}
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
