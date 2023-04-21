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

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState("transparent");

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

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/recycling" element={<Recycling />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/hydrogen" element={<Hydrogen />} />
        <Route path="/pellets" element={<Pellets />} />
        <Route path="/gtc" element={<GTC />} />
        <Route path="/about" element={<About />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/about/vision" element={<Vision />} />
        <Route path="/about/mission" element={<Mission />} />
      </Routes>
    </>
  );
}

export default App;
