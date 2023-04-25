import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { MouseContextProvider } from "custom-pointer-react";
import "./i18n/config";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ParallaxProvider>
      <MouseContextProvider>
        <App />
      </MouseContextProvider>
    </ParallaxProvider>
  </BrowserRouter>
);
