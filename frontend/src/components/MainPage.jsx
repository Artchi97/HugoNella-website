import "../styles/MainPage.css";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import Feed from "./Feed";
import mainPhoto from "../assets/MainPage.jpg";
import { useFadeIn } from "../customHooks/useFadeIn";

export default function MainPage() {
  const isVisible = useFadeIn();
  const { translation } = useContext(LanguageContext);

  return (
    <>
      <div
        className={`photo-description-div fade-in ${
          isVisible ? "fade-in-active" : ""
        }`}
      >
        <div className="main-photo">
          <img src={mainPhoto} alt="Teddy" />
        </div>
        <div className="main-sentence">
          {translation.main.description}
          <span className="main-quote">
            {translation.main.lowerDescription}
          </span>
        </div>
      </div>
      <Feed />
    </>
  );
}
