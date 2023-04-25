import ScrollToTop from "../components/ScrollToTop";
import PELLET from "../assets/PELLET-min.jpg";
import pampoo from "../assets/BAMBOO-min.jpg";
import { useTranslation } from "react-i18next";

function Pellets() {
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
        <img className="img-header" src={PELLET} />
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
              PELLETS
            </h1>
          </div> */}
        </div>
      </header>
      <section className="mt-0 container lg:px-14  flex justify-center">
        <ScrollToTop />
        <div className="px-4 lg:px-14 md:px-0 mb-6 md:w-[80Vw] lg:w-[60vw] bg-white text-start">
          <div className="flex flex-col items-center justify-around mt-10 h-[120px] mb-[20px]">
            <h1 className="tracking-[1px] w-fit text-xl text-center text-black  font-semibold  ">
              {t("pellets-title-1")}
            </h1>
            <span className="w-[50px] h-[4px] bg-bg-color"></span>
          </div>
          <div className="">
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              {t("pellets-sec-1")}
            </p>
          </div>
        </div>
      </section>
      <header className="relative h-[50vh] lg:h-[100vh] my-20 w-full overflow-hidden">
        <img className="img-header" src={pampoo} />
        <div className="container mx-auto px-2 lg:px-14 md:px-0  absolute h-full  flex items-center z-10 inset-0 justify-center  lg:justify-center">
          <div className="font-extrabold absolute bottom-0">
            {/* <h1
              style={{
                fontFamily: "Montserrat",
                fontWeight: "900",
                letterSpacing: "3px",
              }}
              className="text-[13px] md:text-3xl text-center mb-16 text-white px-5 bg-[#8080807a] rounded-lg py-5 "
            >
              OUR STRATEGY
            </h1> */}
          </div>
        </div>
      </header>
      <section className="mt-0 container lg:px-14 my-20 flex justify-center">
        <div className="px-4 lg:px-14 md:px-0 mb-6 md:w-[80Vw] lg:w-[60vw] bg-white text-start">
          <div className="flex flex-col items-center justify-around h-[120px] mb-[20px]">
            <h1 className="tracking-[1px] w-fit text-xl text-center text-black  font-semibold  ">
              {t("pellets-title-2")}
            </h1>
            <span className="w-[50px] h-[4px] bg-bg-color"></span>
          </div>
          <div className="">
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              {t("pellets-sec-2")}
            </p>

            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              <span className="font-bold">{t("pellets-ul-title")}</span>
              <ul className="list-disc ml-5">
                <li>{t("pellets-ul-li-1")}</li>
                <li>{t("pellets-ul-li-2")}</li>
                <li>{t("pellets-ul-li-3")}</li>
                <li>{t("pellets-ul-li-4")}</li>
                <li>{t("pellets-ul-li-5")}</li>
                <li>{t("pellets-ul-li-6")}</li>
                <li>{t("pellets-ul-li-7")}</li>
                <li>{t("pellets-ul-li-8")}</li>
              </ul>
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              {t("pellets-end")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pellets;
