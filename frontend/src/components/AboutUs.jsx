import "../styles/AboutUs.css";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import AboutUsImage from "../assets/AboutUs.jpg";
import { useFadeIn } from "../customHooks/useFadeIn";

export default function AboutUs() {
  const isVisible = useFadeIn();
  const { translation } = useContext(LanguageContext);

  return (
    <div
      className={`about-us-container fade-in ${
        isVisible ? "fade-in-active" : ""
      }`}
    >
      <div className="about-us-photo-div">
        <img
          className="about-us-img"
          src={AboutUsImage}
          alt="Owners with all dogs"
          loading="lazy"
        />
      </div>
      <section className="about-us-section">
        <p className="paragraph-one">
          {translation.aboutUsSection.descriptionOne}
        </p>{" "}
        <p className="paragraph-two">
          {translation.aboutUsSection.descriptionTwo}
        </p>
      </section>
    </div>
  );
}
