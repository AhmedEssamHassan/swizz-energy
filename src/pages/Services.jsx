import React from "react";
import img from "../assets/Services.jpg";
import ScrollToTop from "../components/ScrollToTop";
import { useTranslation } from "react-i18next";

function Services() {
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
      <section className="mt-0 container lg:pt-14 mb-20 flex justify-center">
        <ScrollToTop />
        <div className="px-4 lg:px-14 md:px-0 mb-6 md:w-[80Vw] lg:w-[60vw] bg-white text-start">
          {/* <div className="flex justify-center my-[60px]">
            <h1 className="page-title2 tracking-[1px] w-fit text-xl text-center mb-5 mt-5 text-black  font-semibold py-5 ">
              <p className="mb-5">GLOBAL CONSULTING SERVICES</p>
              <span className="mt-72">All out of one hand</span>
            </h1>
          </div> */}
          <div className="test flex flex-col mt-16 items-center justify-around h-[120px] mb-[20px]">
            <h1 className="tracking-[1px] w-fit text-xl text-center text-black  font-semibold  ">
              <p className="mb-5"> {t("service-title")} </p>
              <span className="mt-72"> {t("service-subtitle")} </span>
            </h1>
            <span className="w-[50px] h-[4px] bg-bg-color"></span>
          </div>
          <div className="">
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("service-description")}
            </p>
            <h2 className="mt-7 leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] text-justify font-semibold">
              {t("serv-first-plan-title")}
            </h2>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("serv-first-plan-desc")}
            </p>
            <h2 className="mt-7 leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] text-justify font-semibold">
              {t("serv-second-plan-title")}
            </h2>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("serv-second-plan-desc")}
            </p>

            <h2 className="mt-7 leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] text-justify font-semibold">
              {t("serv-third-plan-title")}
            </h2>

            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("serv-third-plan-desc")}
            </p>
            <h2 className="mt-7 leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] text-justify font-semibold">
              {t("serv-fourth-plan-title")}
            </h2>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("serv-fourth-plan-desc")}
            </p>

            <h2 className="mt-7 leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] text-justify font-semibold">
              {t("serv-fifth-plan-title")}
            </h2>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("serv-fifth-plan-desc")}
            </p>
            <h2 className="mt-7 leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] text-justify font-semibold">
              {t("serv-sixth-plan-title")}
            </h2>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("serv-sixth-plan-desc")}
            </p>
            <h2 className="mt-7 leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] text-justify font-semibold">
              {t("serv-seventh-plan-title")}
            </h2>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("serv-seventh-plan-desc")}
            </p>
            <h2 className="mt-7 leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] text-justify font-semibold">
              {t("serv-eighth-plan-title")}
            </h2>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("serv-eighth-plan-desc")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
