import "../styles/NavBar.css";
import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";

export default function NavBar({ handleNavTextActive }) {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const { translation } = useContext(LanguageContext);
  const location = useLocation();

  function showMenu() {
    setMenuIsVisible(!menuIsVisible);
  }

  function handleNavBarClick(path) {
    handleNavTextActive(path);
    setMenuIsVisible(false);
  }

  useEffect(() => {
    handleNavTextActive(location.pathname);
  }, [location.pathname, handleNavTextActive]);

  return (
    <nav>
      <div
        className={`hamburger-icon ${menuIsVisible ? "open fixed" : ""}`}
        onClick={showMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-list ${menuIsVisible ? "open" : ""}`}>
        {[
          { label: translation.navBar.mainPage, path: "/" },
          { label: translation.navBar.aboutUs, path: "/about-us" },
          { label: translation.navBar.ourDogs, path: "/our-dogs" },
          { label: translation.navBar.puppies, path: "/puppies" },
          { label: translation.navBar.gallery, path: "/gallery" },
          { label: translation.navBar.contact, path: "/contact" },
        ].map((item) => (
          <Link key={item.path} to={item.path}>
            <li
              className={
                location.pathname === item.path ||
                (item.path === "/puppies" &&
                  location.pathname.startsWith("/litters")) ||
                (item.path === "/gallery" &&
                  location.pathname.startsWith("/gallery-photos")) ||
                (item.path === "/our-dogs" &&
                  (location.pathname.startsWith("/dog-details") ||
                    location.pathname.startsWith("/dog-gallery") ||
                    location.pathname.startsWith("/shows")))
                  ? "active"
                  : ""
              }
              onClick={() => handleNavBarClick(item.path)}
            >
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
