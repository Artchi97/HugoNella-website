import "../styles/Feed.css";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

export default function Feed({ feedData }) {
  const feedContent = Array.isArray(feedData?.values) ? feedData.values : [];
  const { translation, language } = useContext(LanguageContext);

  return (
    <>
      <h2 className="feed-main-title">{translation.feed}</h2>
      <div className="feed-container">
        {feedContent.length > 1 ? (
          feedContent.slice(1).map((feed, index) => (
            <div className="new-feed-container" key={index}>
              <h2 className="feed-title">
                {language === "pl" ? `${feed[2]}` : `${feed[5]}`}
              </h2>
              <p className="feed-date">{feed[1]}</p>
              <div className="description-photo-div">
                <p className="feed-content">
                  {language === "pl" ? `${feed[3]}` : `${feed[6]}`}
                </p>
                <img src={feed[4]} alt={feed[2]} className="feed-photo" />{" "}
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
