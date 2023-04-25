import React from "react";
import { BsArrow90DegDown, BsArrow90DegRight } from "react-icons/bs";
import ScrollToTop from "../components/ScrollToTop";
import train_img from "../assets/TRAIN-min.jpg";
import PELLET from "../assets/Pellet_2_Electricity.png";
import { useTranslation } from "react-i18next";

function Energy() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <style>
        {`
       .img-header{
     
        width: 100%;
        height: 100%;
        // object-fit: cover;


       }

      @media (max-width: 767px) {
        .img-header{
          min-height: 100%

        }
      }
      `}
      </style>
      <header className="relative h-[50vh] lg:h-[100vh] w-full overflow-hidden">
        <img className="img-header" src={train_img} />
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
              THE POWER OF STEAM
            </h1>
          </div> */}
        </div>
      </header>
      <section className="mt-0 container lg:px-14  flex justify-center">
        <ScrollToTop />
        <div className="px-4 lg:px-14 md:px-0 mb-6 md:w-[80Vw] lg:w-[60vw] bg-white text-start">
          {/* <div className="flex justify-center my-[60px]">
            <h1 className="page-title3 tracking-[1px] w-fit text-xl text-center mb-5 mt-5 text-black  font-semibold py-5 ">
              THE POWER OF STEAM
            </h1>
          </div> */}
          <div className="flex flex-col items-center justify-around mt-10 h-[120px] mb-[20px]">
            <h1 className="tracking-[1px] w-fit text-xl text-center text-black  font-semibold  ">
              {t("energy-title")}
            </h1>
            <span className="w-[50px] h-[4px] bg-bg-color"></span>
          </div>
          <div className="">
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("energy-content-1")}
            </p>

            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("energy-content-2")}
            </p>

            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("energy-content-3")}
            </p>

            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("energy-content-4")}
            </p>

            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("energy-content-5")}
            </p>

            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("energy-content-6")}
            </p>

            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("energy-content-7")}
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("energy-content-8")}
            </p>

            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("energy-content-9")}
            </p>
          </div>
          <img className="mt-24 mb-24" src={PELLET} alt="PELLET" />
        </div>
      </section>
    </>
  );
}

export default Energy;
