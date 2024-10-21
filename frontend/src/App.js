import "./App.css";
import { useState, useEffect, Suspense, lazy, useContext } from "react";
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
  const [showsData, setShowsData] = useState([]);
  const [feedData, setFeedData] = useState([]);
  const [littersData, setLittersData] = useState([]);
  const [navTextActive, setNavTextActive] = useState("");
  const { translation } = useContext(LanguageContext);
  const apiKey = process.env.REACT_APP_API_KEY;
  const sheetId = process.env.REACT_APP_SHEET_ID;
  const apiUrl = process.env.REACT_APP_API_URL;
  const showsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Shows?key=${apiKey}`;
  const feedUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Feed?key=${apiKey}`;
  const littersUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Litters?key=${apiKey}`;

  function handleNavTextActive(navText) {
    setNavTextActive(navText);
  }

  useEffect(() => {
    async function fetchShowsAndFeedData() {
      try {
        const [showsResponse, feedResponse, littersResponse] =
          await Promise.all([
            fetch(`${apiUrl}/api/shows`),
            fetch(`${apiUrl}/api/sheets`),
            fetch(`${apiUrl}/api/litters`),
          ]);

        const fetchedShowsData = await showsResponse.json();
        const fetchedFeedData = await feedResponse.json();
        const fetchedLittersData = await littersResponse.json();

        setShowsData(fetchedShowsData);
        setFeedData(fetchedFeedData);
        setLittersData(fetchedLittersData);
      } catch (error) {
        console.error("Błąd pobierania danych: ", error);
      }
    }

    fetchShowsAndFeedData();
  }, [showsUrl, feedUrl, littersUrl, apiUrl]);

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
                <Route path="/" element={<MainPage feedData={feedData} />} />
                <Route path="/our-dogs" element={<OurDogs />} />
                <Route
                  path="/dog-details/:dogName"
                  element={<DogDetails showsData={showsData} />}
                />
                <Route
                  path="/shows/:dogName"
                  element={<DogShows showsData={showsData} />}
                ></Route>
                <Route
                  path="/dog-gallery/:dogName"
                  element={<DogDetailsGallery />}
                ></Route>
                <Route path="/puppies" element={<Puppies />}></Route>
                <Route
                  path="/litters/:type"
                  element={<Litters littersData={littersData} />}
                ></Route>
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
