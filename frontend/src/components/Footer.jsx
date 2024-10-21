import "../styles/Footer.css";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import SocialMedia from "./SocialMedia";
import cynology from "../assets/cynology-logo.jpg";

export default function Footer({ handleNavTextActive }) {
  const { translation } = useContext(LanguageContext);
  return (
    <footer>
      <div className="footer-main-part">
        <div className="footer-contact-data">
          <h2 className="contact-h2">{translation.footer.contactUs}</h2>
          <ul className="contact-list">
            <li className="contact-item">
              <i className="fa-solid fa-location-dot"></i>
              {translation.contactSection.breedingPlace}
            </li>
            <li className="contact-item">
              <i className="fa-solid fa-phone"></i>
              {translation.footer.phone}{" "}
              <a className="tel-nr" href="tel:+48727541233">
                +48 727 541 233
              </a>
            </li>

            <li className="contact-item">
              <i className="fa-solid fa-envelope"></i>E-mail:{" "}
              <a className="mail" href="mailto:kingakatarzynska@gmail.pl">
                kingakatarzynska@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img
            className="logo-img"
            src={logo}
            alt="Logo Hugonella"
            onClick={() => handleNavTextActive("/")}
          />
        </Link>

        <div className="social-media">
          <h2 className="social-media-h2">
            {translation.footer.socialMediaTitle}
          </h2>
          <SocialMedia />
        </div>
        <div className="cynology-logo-footer">
          <a href="https://www.zkwp.pl/" target="_blank" rel="noreferrer">
            <img src={cynology} alt="cynology logo" />
          </a>
        </div>
      </div>
      <p className="all-rights-reserved">
        &copy; Copyright 2024 - all rights reserved
      </p>
    </footer>
  );
}
