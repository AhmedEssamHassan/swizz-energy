import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Footer from "./components/footer/Footer";
import ProgressBar from "react-progressbar-on-scroll";
import { Cursor } from "custom-pointer-react";
import Aside from "./components/Aside";
import Energy from "./pages/Energy";
import Pellets from "./pages/Pellets";
import Recycling from "./pages/Recycling";
import Hydrogen from "./pages/Hydrogen";
import About from "./pages/About";
import Knowledge from "./pages/Knowledge";
import Vision from "./pages/Vision";
import Mission from "./pages/Mission";
import GTC from "./pages/GTC";
import { QuestionCircleOutlined } from "@ant-design/icons";
import Services from "./pages/Services";
import i18n from "./i18n/config";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState("transparent");
  const [lang, setLang] = useState("en");
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 100) {
      setNavbarColor("white");
    } else {
      setNavbarColor("transparent");
    }
  }, [scrollPosition]);

  console.log({ scrollPosition });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (lang == "en") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("de");
    }
  }, [lang]);

  return (
    <>
      <Cursor color="#fff" ringSize={"20px"} cursorSize="5px" />
      <a
        href="https://calendly.com/swissenergyhub"
        target={"_blank"}
        className="fixed z-30 bottom-3 right-3 px-5 py-2 rounded-[20px] text-base tracking-[1px] bg-gray-500 text-white w-fit flex items-center justify-center"
      >
        <p className="text-[12px] font-bold"> Let's Talk </p>
      </a>
      <div className="App max-w-[100vw] overflow-hidden">
        <ProgressBar color="#972A17" gradient={true} height={5} />
        {screenWidth > 1024 ? (
          <Navbar
            setLang={setLang}
            lang={lang}
            scrollPosition={scrollPosition}
            navbarColor={navbarColor}
            screenWidth={screenWidth}
          />
        ) : (
          <Aside
            scrollPosition={scrollPosition}
            screenWidth={screenWidth}
            navbarColor={navbarColor}
          />
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/recycling"
            element={<Recycling screenWidth={screenWidth} />}
          />
          <Route path="/energy" element={<Energy />} />
          <Route path="/hydrogen" element={<Hydrogen />} />
          <Route path="/pellets" element={<Pellets />} />
          <Route path="/gtc" element={<GTC />} />
          <Route path="/about" element={<About />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/about/vision" element={<Vision />} />
          <Route path="/about/mission" element={<Mission />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
