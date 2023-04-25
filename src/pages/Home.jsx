import React, { useRef } from "react";
import Main_home from "../components/main-home/Main_home";
import video from "../assets/Video_Energy_80MB.mp4";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import ScrollToTop from "../components/ScrollToTop";
import { InfoCircleFilled, QuestionCircleOutlined } from "@ant-design/icons";
function Home() {
  return (
    <div>
      <style>
        {`
        .container-animate {
          width: 100%;
          height: 220px;
          position: relative;
       }
        .container-animate h1, .container-animate h2 {
          font-family: "helvetica-light" sans-serif;
          margin-bottom:10px;
          letter-spacing: 1.5px;
          font-size:30px;
          font-weight: 600;
          text-transform: uppercase;
       }
        .container-animate h1 {
          width: 100%;
          float: left;
          color: #333;
          -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
          clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
          transform: translateY(-50px);
          opacity: 0;
          animation-name: titleAnimation;
          animation-timing-function: ease;
          animation-duration: 7s;
          animation-iteration-count:infinite;
       }
       .container-animate h1.title1 {
          animation-delay: 1s;
       }
       .container-animate h1.title2 {
          animation-delay: 1.5s;
       }
       .container-animate h1.title3 {
          animation-delay: 2s;
       }
       .container-animate h1.title4 {
          animation-delay: 2.5s;
       }
       .container-animate h2 {
          top: 0;
          position: absolute;
       }
       

       @keyframes titleAnimation {
        0% {
          transform: translateY(-50px);
          opacity: 0;
          -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
          clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
       }
        20% {
          transform: translateY(0);
          opacity: 1;
          -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
          clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
       }
        80% {
          transform: translateY(0);
          opacity: 1;
          -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
          clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
       }
        100% {
          transform: translateY(50px);
          opacity: 0;
          -webkit-clip-path: polygon(100% 0, 100% 0%, 0 100%, 0 100%);
          clip-path: polygon(100% 0, 100% 0%, 0 100%, 0 100%);
       }
     }
       
        `}
      </style>
      <ScrollToTop />
      <header className="relative h-[100%] xl:h-[100vh] w-full overflow-hidden  ">
        <video autoPlay loop muted className="w-[full] object-contain    ">
          <source src={video} type="video/mp4" />
        </video>
        <div className="container mx-auto px-2 lg:px-14 md:px-0  absolute h-full  flex items-center z-10 inset-0 justify-center  lg:justify-start">
          <div className="  font-extrabold  l   ">
            {/* <h1 className="  text-white lg:text-text-color text-center lg:text-start text-base h-[20px] sm:text-3xl md:text-2xl xl:text-5xl  sm:h-[150px] md:h-[175px] lg:h-[200px]  transition ease-out transition-duration ">
              <Typewriter
                options={{
                  strings: [
                    "SUSTAINARBLE ENGERGY <br/> GREEN HYDROGEN  <br /> CAPTURING CARBON    <br /> WASTE MANAGEMENT ",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                  delay: 100,
                  deleteSpeed: 5,
                  pauseFor: 2000,
                  skipAddStyles: true,
                }}
              />
            </h1> */}
            {/* <section className="container-animate">
              <h1 class="title1">SUSTAINABLE ENERGY</h1>
              <h1 class="title2">GREEN HYDROGEN</h1>
              <h1 class="title3">CAPTURING CARBON</h1>
              <h1 class="title4">WASTE MANAGEMENT</h1>
            </section> */}
          </div>
        </div>
      </header>
      {/* <Main_home /> */}
    </div>
  );
}

export default Home;
