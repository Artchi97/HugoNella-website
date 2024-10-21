import "../styles/Puppies.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";
import prevLittersImg from "../assets/litters/litterK2-large.jpg";
import currentLittersImg from "../assets/litters/litterD1-large.jpg";
import plannedLittersImg from "../assets/litters/litterB4-large.jpg";
import { useFadeIn } from "../customHooks/useFadeIn";

export default function Puppies() {
  const isVisible = useFadeIn();
  const { translation } = useContext(LanguageContext);

  return (
    <div
      className={`puppies-container fade-in ${
        isVisible ? "fade-in-active" : ""
      }`}
    >
      <div className="litters-type-container">
        <Link to={"/litters/planned"} className="litters-container">
          <div className="litter-type-photo-div">
            <img
              src={plannedLittersImg}
              alt="planned litters"
              className="planned-litters-photo"
            />
          </div>
          <p className="litter-type-sentence">
            {translation.puppiesSection.plannedLitters}
          </p>
        </Link>
        <Link to={"/litters/current"} className="litters-container">
          <div className="litter-type-photo-div">
            <img
              src={currentLittersImg}
              alt="current litters"
              className="current-litters-photo"
            />
          </div>
          <p className="litter-type-sentence">
            {translation.puppiesSection.currentLitters}
          </p>
        </Link>
        <Link to={"/litters/previous"} className="litters-container">
          <div className="litter-type-photo-div">
            <img
              src={prevLittersImg}
              alt="previous litter"
              className="previous-litters-photo"
            />
          </div>
          <p className="litter-type-sentence">
            {translation.puppiesSection.previousLitters}
          </p>
        </Link>
      </div>
    </div>
  );
}
