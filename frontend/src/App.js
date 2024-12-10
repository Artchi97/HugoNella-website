import "./App.css";
import { useState, Suspense, lazy, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider, LanguageContext } from "./LanguageContext.js";

const ScrollToTop = lazy(() => import("./components/ScrollToTop.jsx"));
const Header = lazy(() => import("./components/Header.jsx"));
const NavBar = lazy(() => import("./components/NavBar.jsx"));
const MainPage = lazy(() => import("./components/MainPage.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const OurDogs = lazy(() => import("./components/OurDogs.jsx"));
const DogDetails = lazy(() => import("./components/DogDetails.jsx"));
const DogShows = lazy(() => import("./components/DogShows.jsx"));
const AboutUs = lazy(() => import("./components/AboutUs.jsx"));
const Puppies = lazy(() => import("./components/Puppies.jsx"));
const Litters = lazy(() => import("./components/Litters.jsx"));
const DogDetailsGallery = lazy(() =>
  import("./components/DogDetailsGallery.jsx")
);
const Gallery = lazy(() => import("./components/Gallery.jsx"));
const GalleryPhotos = lazy(() => import("./components/GalleryPhotos.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));

function App() {
  const [navTextActive, setNavTextActive] = useState("");
  const { translation } = useContext(LanguageContext);

  function handleNavTextActive(navText) {
    setNavTextActive(navText);
  }

  return (
    <LanguageProvider>
      <Router>
        <Suspense
          fallback={<div className="loading">{translation.loading}</div>}
        >
          <ScrollToTop />
          <Header handleNavTextActive={handleNavTextActive} />
          <div id="container">
            <NavBar
              handleNavTextActive={handleNavTextActive}
              navTextActive={navTextActive}
            />
            <main>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/our-dogs" element={<OurDogs />} />
                <Route path="/dog-details/:dogName" element={<DogDetails />} />
                <Route path="/shows/:dogName" element={<DogShows />}></Route>
                <Route
                  path="/dog-gallery/:dogName"
                  element={<DogDetailsGallery />}
                ></Route>
                <Route path="/puppies" element={<Puppies />}></Route>
                <Route path="/litters/:type" element={<Litters />}></Route>
                <Route path="/about-us" element={<AboutUs />}></Route>
                <Route path="/gallery" element={<Gallery />}></Route>
                <Route
                  path="/gallery-photos/:style"
                  element={<GalleryPhotos />}
                ></Route>
                <Route path="/contact" element={<Contact />}></Route>
              </Routes>
            </main>
          </div>
          <Footer handleNavTextActive={handleNavTextActive} />
        </Suspense>
      </Router>
    </LanguageProvider>
  );
}

export default App;
