import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import hydrogen from "../assets/HYDROGEN-min.jpg";
import green from "../assets/FOSSIL_GREEN-min.jpg";
import { useTranslation } from "react-i18next";

function Hydrogen() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <style>
        {`
     .img-header{
   
      width: 100%;
      height: 100%;  


     }

    
    
    `}
      </style>

      <header className="relative h-[50vh] lg:h-[100vh] w-full overflow-hidden">
        <img className="img-header" src={hydrogen} />
        <div className="container mx-auto px-2 lg:px-14 md:px-0  absolute h-full  flex items-center z-10 inset-0 justify-center  lg:justify-center">
          {/* <div className="font-extrabold absolute bottom-0">
            <h1
              style={{
                fontFamily: "Montserrat",
                fontWeight: "900",
                letterSpacing: "3px",
              }}
              className="text-[13px] md:text-3xl text-center mb-16 text-white px-5 bg-[#8080807a] rounded-lg py-5 "
            >
              THE POWER OF HYDROGEN
            </h1>
          </div> */}
        </div>
      </header>
      <section className="mt-0 container lg:px-14  flex justify-center">
        <ScrollToTop />
        <div className="px-4 lg:px-14 md:px-0 mb-6 md:w-[80Vw] lg:w-[60vw] bg-white text-start">
          <div className="flex flex-col items-center mt-10 justify-around h-[120px] mb-[20px]">
            <h1 className="tracking-[1px] w-fit text-lg md:text-xl text-center text-black  font-semibold  ">
              {t("hydrogen-title")}
            </h1>
            <span className="w-[50px] h-[4px] bg-bg-color"></span>
          </div>
          <div className="">
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              {t("hydrogen-desc1")}
            </p>
          </div>
        </div>
      </section>
      <header className="relative h-[50vh] lg:h-[100vh] my-20 md:h-[100vh] w-full overflow-hidden">
        <img className="img-header" src={green} />
        <div className="container mx-auto px-2 lg:px-14 md:px-0  absolute h-full  flex items-center z-10 inset-0 justify-center  lg:justify-center">
          {/* <div className="font-extrabold absolute bottom-0">
            <h1
              style={{
                fontFamily: "Montserrat",
                fontWeight: "900",
                letterSpacing: "3px",
              }}
              className="text-[13px] md:text-3xl text-center mb-28 md:mb-48 text-white px-5 bg-[#8080807a] rounded-lg py-5 "
            >
              OUR STRATEGY
            </h1>
          </div> */}
        </div>
      </header>
      <section className="mt-0 container lg:px-14 my-20 flex justify-center">
        <div className="px-4 lg:px-14 md:px-0 mb-6 my-10 md:w-[80Vw] lg:w-[60vw] bg-white text-start">
          {/* <div className="flex justify-center my-[60px]">
            <h1 className="page-title tracking-[1px] w-fit text-xl text-center mb-5 mt-5 text-black  font-semibold py-5 ">
              THE POWER OF HYDROGEN
            </h1>
          </div> */}
          <div className="">
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              {t("hydrogen-challenge")}
              <ul className="list-disc ml-5">
                <li>{t("hydrogen-challenge-item1")}</li>
                <li>{t("hydrogen-challenge-item2")}</li>
              </ul>
              {t("hydrogen-challenge-item3")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hydrogen;
