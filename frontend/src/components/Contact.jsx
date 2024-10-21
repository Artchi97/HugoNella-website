import "../styles/Contact.css";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import SocialMedia from "../components/SocialMedia";
import { dailyImages } from "../galleryImages";
import { useFadeIn } from "../customHooks/useFadeIn";

export default function Contact() {
  const isVisible = useFadeIn();
  const { translation } = useContext(LanguageContext);

  return (
    <div
      className={`contact-container fade-in ${
        isVisible ? "fade-in-active" : ""
      }`}
    >
      <h2 className="contact-title">
        {translation.contactSection.contactTitle}
      </h2>
      <p className="breed-owners">{translation.contactSection.owners}</p>
      <img src={dailyImages[2]} alt="contact" className="contact-photo" />

      <p className="contact-info">{translation.contactSection.findUs}</p>
      <p className="contact-details">
        {translation.contactSection.breedingPlace}
      </p>
      <div className="map">
        <iframe
          className="google-map"
          title="google-map"
          frameBorder="0"
          scroll="no"
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Gaj%20Gosty%C5%84+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>{" "}
      </div>

      <p className="contact-info">{translation.contactSection.contactUs}</p>
      <p className="phone-number">
        <span>{translation.contactSection.contactTel}</span>
        <a href="tel:+48727541233">+48 727 541 233</a>
      </p>
      <p className="contact-info">{translation.contactSection.messageUs}</p>
      <p className="email-address">
        <span>E-mail:</span>{" "}
        <a href="mailto:kingakatarzynska@gmail.pl">
          kingakatarzynska@gmail.com
        </a>
      </p>
      <SocialMedia />
    </div>
  );
}
