import "../styles/Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import cynology from "../assets/cynology-logo.jpg";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

export default function Header({ handleNavTextActive }) {
  const { translation, language, handleChangeLanguage } =
    useContext(LanguageContext);
  return (
    <header>
      <div className="whole-div-content">
        <p className="languages">
          <span
            className={language === "pl" ? "active-language" : ""}
            onClick={() => handleChangeLanguage("pl")}
          >
            {translation.languages.pl}
          </span>{" "}
          |{" "}
          <span
            className={language === "en" ? "active-language" : ""}
            onClick={() => handleChangeLanguage("en")}
          >
            {translation.languages.eng}
          </span>
        </p>
        <Link to="/">
          <div onClick={() => handleNavTextActive("/")} className="header-img">
            <img src={logo} alt="logo hodowla hugonella" />
          </div>
        </Link>
        <div className="header-content">
          <Link to="/">
            <div
              onClick={() => handleNavTextActive("/")}
              className="header-title"
            >
              <h2>HugoNella FCI</h2>
              <p>{translation.header}</p>
            </div>
          </Link>
        </div>
        <div className="cynology-logo">
          <a href="https://www.zkwp.pl/" target="_blank" rel="noreferrer">
            <img src={cynology} alt="cynology logo" />
          </a>
        </div>
      </div>
    </header>
  );
}
