import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";
import MyChart from "../components/LineChart";
import ScrollToTop from "../components/ScrollToTop";
import img from "../assets/KNOWHOW-min.jpg";
import img2 from "../assets/know-2.png";
import img3 from "../assets/FOOTPRINT-min.jpg";
import { useTranslation } from "react-i18next";
import Main_section from "../components/main-home/Main_section";

function Knowledge() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <style>
        {`
       .img-header{
     
        width: 100%;
        height: 100%;


       }
      }
      `}
      </style>

      <header className="relative h-[50vh] lg:h-[100vh] w-full overflow-hidden">
        <img className="img-header" src={img} />
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

      <section className="mt-0 ">
        <ScrollToTop />
        <div className=" bg-white text-center mb-9">
          <div className="flex flex-col items-center mt-10 justify-around h-[120px] mb-[20px]">
            <h1 className="tracking-[1px] w-fit text-lg md:text-xl text-center text-black  font-semibold  ">
              {t("knowledge-title")}
            </h1>
            <span className="w-[50px] h-[4px] bg-bg-color"></span>
          </div>
          <div className="px-4 w-full md:w-[80Vw] lg:w-[60vw] text-justify md:text-justify mb-28 flex mx-auto lg:px-14">
            <ul className="pl-[20px] list-disc">
              <li className="px-3 md:px-0 lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                {t("knowledge-desc1")}
              </li>
              <li className="px-3 md:px-0 lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                {t("knowledge-desc2")}
              </li>
              <li className="px-3 md:px-0 lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                {t("knowledge-desc3")}
              </li>
              <li className="px-3 md:px-0 lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                {t("knowledge-desc4")}
              </li>
            </ul>
          </div>
        </div>

        <div className="my-8 lg:px-40 flex fle flex-wrap justify-around items-center">
          <div className="px-4 md:px-0 w-full flex justify-center items-center md:w-[47%]">
            <ul className="pl-[20px] list-disc">
              <li className="px-3 md:px-0 lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                {t("knowledge-desc5")}
              </li>
              <li className="px-3 md:px-0 lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                {t("knowledge-desc6")}
              </li>
              <li className="px-3 md:px-0 lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                {t("knowledge-desc7")}
              </li>
            </ul>
          </div>
          <div className="w-full flex justify-center items-center md:w-[47%]">
            <MyChart />
          </div>
        </div>
        <div className="my-0 lg:px-40">
          <Main_section
            content={
              <>
                <ul className="pl-[20px] list-disc">
                  <li className="px-3 md:px-0 text-white lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                    {t("knowledge-desc8")}
                  </li>
                  <li className="px-3 md:px-0 text-white lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                    {t("knowledge-desc9")}
                  </li>
                  <li className="px-3 md:px-0 text-white lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                    {t("knowledge-desc10")}
                  </li>
                </ul>
              </>
            }
            title={null}
            reverse={false}
            imgSrc={img2}
            imgStyle={"72%"}
          />
        </div>
      </section>

      <header className="relative h-[50vh] lg:h-[100vh] md:h-[90vh] my-20 w-full overflow-hidden">
        <img className="img-header" src={img3} />
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
              OUR STRATEGY
            </h1>
          </div> */}
        </div>
      </header>

      <section className="mt-0 container lg:px-14 my-20  flex justify-center">
        <div className="px-4 lg:px-14 md:px-0 mb-6 md:w-[80Vw] lg:w-[60vw] bg-white text-start">
          {/* <div className="flex justify-center my-[60px]">
            <h1 className="page-title tracking-[1px] w-fit text-xl text-center mb-5 mt-5 text-black  font-semibold py-5 ">
              THE POWER OF BIOMASS
            </h1>
          </div> */}
          <div className="">
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              <ul className="list-disc ml-5">
                <li>{t("knowledge-desc11")}</li>
                <li>{t("knowledge-desc12")}</li>
                <li>{t("knowledge-desc13")}</li>
                <li>{t("knowledge-desc14")}</li>
                <li>{t("knowledge-desc15")}</li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Knowledge;
