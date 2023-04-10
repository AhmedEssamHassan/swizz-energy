import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recycling from "./pages/Recycling";
import Hydrogen from "./pages/Hydrogen";
import KnolegeHub from "./pages/KnolegeHub";
import WhoWeAre from "./pages/WhoWeAre";
import Vision from "./pages/Vision";
import Mission from "./pages/Mission";
import TargetAudience from "./pages/TargetAudience";
import Electricity from "./pages/Electricity";
import Footer from "./components/footer/Footer";
import ProgressBar from "react-progressbar-on-scroll";
import { Cursor } from "custom-pointer-react";
import Aside from "./components/Aside";

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
      <Cursor color="#fff" ringSize={"20px"} cursorSize="5px" />
      <div className="App max-w-[100vw] overflow-hidden">
        <ProgressBar color="#972A17" gradient={true} height={5} />
        {screenWidth > 767 ? (
          <Navbar
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
          <Route path="/recycling" element={<Recycling />} />
          <Route path="/electricity" element={<Electricity />} />
          <Route path="/hydrogen" element={<Hydrogen />} />
          <Route path="/knolegeHub" element={<KnolegeHub />} />
          <Route path="/Who-we-are" element={<WhoWeAre />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/target-audience" element={<TargetAudience />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
