import ScrollToTop from "../components/ScrollToTop";
import gtc from "../assets/GTC.jpg";
import { useTranslation } from "react-i18next";
function GTC() {
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
      <header className="relative h-[50vh] md:h-[100vh] w-full overflow-hidden">
        <img className="img-header" src={gtc} />
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
      <section className="mt-0 container lg:px-14 mb-20 flex justify-center">
        <ScrollToTop />
        <div className="px-4 lg:px-14 md:px-0 mb-6 md:w-[80Vw] lg:w-[60vw] bg-white text-start">
          <div className="flex justify-center my-[60px]">
            <h1 className="page-title3 tracking-[1px] w-fit text-xl text-center mb-5 mt-5 text-black  font-semibold py-5 ">
              {t("gtc-title")}
            </h1>
          </div>
          <div className="">
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              {t("gtc-desc1")}
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              {t("gtc-desc2")}
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              {t("gtc-desc3")}
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              {t("gtc-desc4")}
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              {t("gtc-desc5")}
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              {t("gtc-desc6")}
            </p>

            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              {t("gtc-nego")}
              <br />
              {t("gtc-desc7")}
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              {t("gtc-desc8")}
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              {t("gtc-desc9")}
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              {t("gtc-payment")}
              <br />
              {t("gtc-desc10")}
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              {t("gtc-desc11")}
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              The customer agrees that SEH will pass on information about
              payment processing to Creditreform Associations to check the
              customer's creditworthiness in case of delayed payments
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
//
export default GTC;
