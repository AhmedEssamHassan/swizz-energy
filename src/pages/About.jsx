import React from "react";
import Main_section from "../components/main-home/Main_section";
import Secondary_section from "../components/main-home/Secondary_section";
import team from "../assets/Team.jpg";
import ScrollToTop from "../components/ScrollToTop";
import img1 from "../assets/Team2.jpg";
import img2 from "../assets/Team3.jpg";
import { useTranslation } from "react-i18next";

function WhoWeAre({ screenWidth }) {
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
        <img className="img-header" src={team} />
        {/* <div className="container mx-auto px-2 lg:px-14 md:px-0  absolute h-full  flex items-center z-10 inset-0 justify-center  lg:justify-center">
          <div className="font-extrabold absolute bottom-0">
            <h1
              style={{
                fontFamily: "Montserrat",
                fontWeight: "900",
                letterSpacing: "3px",
              }}
              className="text-[13px] md:text-3xl text-center mb-16 text-white px-5 bg-[#8080807a] rounded-lg py-5 "
            >
              who we are?
            </h1>
          </div>
        </div> */}
      </header>
      <section className="mt-0 ">
        <ScrollToTop />
        <div className=" bg-white text-center mb-9">
          <div className="flex flex-col items-center justify-around mt-10 h-[120px] mb-[20px]">
            <h1 className="tracking-[1px] w-fit text-xl text-center text-black  font-semibold  ">
              {t("about-title")}
            </h1>
            <span className="w-[50px] h-[4px] bg-bg-color"></span>
          </div>

          <div className="px-4 w-full md:w-[80Vw] lg:w-[60vw] text-justify md:text-justify flex mx-auto lg:px-14">
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px]">
              {t("about-head")}
            </p>
          </div>
        </div>
        <div className="mt-24">
          <Main_section
            screenWidth={screenWidth}
            title="Vision"
            reverse={false}
            imgSrc={img1}
            content={
              <div>
                <p className=" text-white md:text-text-color text-[18px] font-norma tracking-[1px] text-center md:text-justify leading-10">
                  {t("about-vision-1")}
                </p>
                <p className=" text-white md:text-text-color text-[18px] font-norma tracking-[1px] text-center md:text-justify leading-10">
                  {t("about-vision-2")}
                </p>
                <p className=" text-white md:text-text-color text-[18px] font-norma tracking-[1px] text-center md:text-justify leading-10">
                  {t("about-vision-3")}
                </p>
                <p className=" text-white md:text-text-color text-[18px] font-norma tracking-[1px] text-center md:text-justify leading-10">
                  {t("about-vision-4")}
                </p>
                {/* <p className=" text-white md:text-text-color text-[18px] font-norma tracking-[1px] text-center md:text-justify leading-10 mt-4 lg:mt-8">
              We enable logistics decarbonisation by aiming for
              <b className="md:ml-2 text-justify">
                carbon neutrality; supporting logistics transition solutions;
                and maintaining a focus on energy efficiency.
              </b>
            </p> */}
              </div>
            }
          />
          <Main_section
            screenWidth={screenWidth}
            reverse={true}
            title="Mission"
            imgSrc={img2}
            content={
              <>
                <p className="leading-2 md:leading-9 text-white md:text-text-color text-[18px] font-norma tracking-[1px] text-center md:text-justify">
                  {t("about-mission-1")}
                </p>
                <p className="leading-2 md:leading-9 text-white md:text-text-color text-[18px] font-norma tracking-[1px] text-center md:text-justify">
                  {t("about-mission-2")}
                </p>
                <p className="leading-2 md:leading-9 text-white md:text-text-color text-[18px] font-norma tracking-[1px] text-center md:text-justify">
                  {t("about-mission-3")}
                </p>
              </>
            }
          />
        </div>
        {/* <Secondary_section /> */}
      </section>
    </>
  );
}

export default WhoWeAre;
