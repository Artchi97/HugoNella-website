import "../styles/Feed.css";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import { feedData } from "../feed";

export default function Feed() {
  const { translation, language } = useContext(LanguageContext);

  return (
    <>
      <h2 className="feed-main-title">{translation.feed}</h2>
      <div className="feed-container">
        {feedData.length > 0 ? (
          feedData.map((feed, index) => (
            <div className="new-feed-container" key={index}>
              <h2 className="feed-title">
                {language === "pl"
                  ? `${feed.feedTitle}`
                  : `${feed.feedTitleEng}`}
              </h2>
              <p className="feed-date">{feed.date}</p>
              <div className="description-photo-div">
                <p className="feed-content">
                  {language === "pl"
                    ? `${feed.description}`
                    : `${feed.descriptionEng}`}
                </p>
                <img
                  src={feed.photo}
                  alt={feed.feedTitle}
                  className="feed-photo"
                />{" "}
              </div>{" "}
            </div>
          ))
        ) : (
          <p>{translation.noContent}</p>
        )}
      </div>
    </>
  );
}
