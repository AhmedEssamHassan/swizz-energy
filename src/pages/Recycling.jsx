import Main_section from "../components/main-home/Main_section";
import ScrollToTop from "../components/ScrollToTop";
import recycle from "../assets/RECYCLE-min.jpg";
import samara from "../assets/SAMARA-min.jpg";
import img from "../assets/CO2-min.jpg";
import { useTranslation } from "react-i18next";

function Recycling({ screenWidth }) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <style jsx="true">
        {`
          th,
          td {
            text-align: center;
            padding: 8px;
          }

          @media (max-width: 1023px) {
            td {
              color: #fff;
            }
          }
          .img-header {
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
              Recycling & waste management
            </h1>
          </div> */}
        </div>
      </header>

      <section className="mt-0">
        <ScrollToTop />
        <div className=" bg-white text-center">
          <div className="flex flex-col items-center justify-around h-[120px] mb-[20px]">
            <h1 className="tracking-[1px] w-fit text-xl text-center text-black  font-semibold  ">
              {t("recycling-title")}
            </h1>
            <span className="w-[50px] h-[4px] bg-bg-color"></span>
          </div>

          <div className="px-4 mt-9 w-full md:w-[80Vw] lg:w-[60vw] text-justify md:text-justify flex mx-auto lg:px-14">
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] mb-16">
              {t("recycling-description")}
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Main_section
            windowWidth="1024"
            content={
              <>
                <table className="w-[350px] text-white md:text-text-color">
                  <tbody>
                    <tr className="text-lg">
                      <td className="text-white md:text-text-color">
                        {t("recycling-first-method")}
                      </td>
                      <td className="text-white md:text-text-color">
                        {t("recycling-second-method")}
                      </td>
                    </tr>
                    <tr className="text-lg">
                      <td className="text-white md:text-text-color">
                        {t("recycling-third-method")}
                      </td>
                      <td className="text-white md:text-text-color">
                        {t("recycling-fourth-method")}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h1 className="text-xl text-center mb-5 mt-5 text-white md:text-black   font-semibold py-5 ">
                  {t("recycling-waste-heading")}
                </h1>
                <ul className="pl-[20px] list-disc">
                  <li className="px-3 md:px-0 text-white md:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                    {t("recycling-waste-first-method")}
                  </li>
                  <li className="px-3 md:px-0 text-white md:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                    {t("recycling-waste-second-method")}
                  </li>
                  <li className="px-3 md:px-0 text-white md:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                    {t("recycling-waste-third-method")}
                  </li>
                  <li className="px-3 md:px-0 text-white md:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                    {t("recycling-waste-fourth-method")}
                  </li>
                </ul>
              </>
            }
            title={t("recycling-method-heading")}
            reverse={true}
            imgSrc={recycle}
          />

          <Main_section
            windowWidth="1024"
            content={
              <>
                {screenWidth > 700 ? (
                  <table className="w-full ">
                    <tbody>
                      <tr className="text-lg ">
                        <th className="w-[50%]  text-white md:text-black">
                          {t("recycling-first-type")}
                        </th>
                        <th className="w-[50%]  text-white md:text-black">
                          {t("recycling-second-type")}
                        </th>
                      </tr>
                      <tr className="text-lg">
                        <td>
                          <ul className="text-white md:text-black">
                            <li className="text-start">
                              <span className="font-bold text-start text-lg block mb-1">
                                {t("recycling-first-type-title1")}
                              </span>
                              {t("recycling-first-type-desc1")}
                            </li>
                            <br />
                            <li className="mb-1 text-start">
                              <span className="font-bold text-start text-lg block mb-1">
                                {t("recycling-first-type-title2")}
                              </span>
                              {t("recycling-first-type-desc2")}
                            </li>
                            <br />
                            <li className="mb-1 text-start">
                              <span className="font-bold text-start text-lg block mb-1">
                                {t("recycling-first-type-title3")}
                              </span>
                              {t("recycling-first-type-desc3")}
                              <br />
                              <ul className="text-lg ">
                                <li className="text-start">
                                  {t("recycling-first-type-first-item")}
                                  <br />
                                  {t("recycling-first-type-second-item")}
                                </li>
                                <li className="text-start">
                                  {t("recycling-first-type-third-item")}
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </td>
                        <td className="flex">
                          <ul className="text-lg ml-12 text-white md:text-black">
                            <li className="mb-1 text-start">
                              {t("recycling-second-type-item1")}
                            </li>
                            <li className="mb-1 text-start">
                              {t("recycling-second-type-item2")}
                            </li>
                            <li className="mb-1 text-start">
                              {t("recycling-second-type-item3")}
                            </li>
                            <li className="mb-1 text-start">
                              {t("recycling-second-type-item4")}
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="text-white w-[100vw] flex flex-col justify-center items-center">
                    <h2 className="text-xl">{t("recycling-first-type")} </h2>
                    <br />
                    <ul className="text-center px-3">
                      <li>
                        <h2 className="font-bold">
                          {t("recycling-first-type-title1")}
                        </h2>
                        <p> {t("recycling-first-type-desc1")}</p>
                      </li>
                      <li>
                        <h2 className="font-bold">
                          {t("recycling-first-type-title2")}
                        </h2>
                        <p>{t("recycling-first-type-desc2")}</p>
                      </li>
                      <li>
                        <h2 className="font-bold">
                          {t("recycling-first-type-title3")}
                        </h2>
                        <p>{t("recycling-first-type-desc3")}</p>
                      </li>
                    </ul>
                    <br />
                    <h2 className="text-center text-xl">
                      {t("recycling-second-type")}
                    </h2>
                    <br />
                    <p className="text-center">
                      organic waste wet waste kitchen waste vegetables, fruits,
                      flowers garden leaves
                      {t("recycling-second-type-item1")}
                      {t("recycling-second-type-item2")}
                      {t("recycling-second-type-item3")}
                      {t("recycling-second-type-item4")}
                    </p>
                  </div>
                )}
              </>
            }
            title={t("recycling-type-heading")}
            reverse={false}
            imgSrc={samara}
          />
        </div>
      </section>

      <section className="mt-20 container lg:px-14 mb-20 flex justify-center">
        <ScrollToTop />
        <div className="px-4 lg:px-14 md:px-0 mb-6 md:w-[80Vw] lg:w-[60vw] bg-white text-start">
          <div className="flex flex-col items-center justify-around h-[120px] mb-[20px]">
            <h1 className="tracking-[1px] w-fit text-xl text-center text-black  font-semibold  ">
              {t("recycling-fuel-heading")}
            </h1>
            <span className="w-[50px] h-[4px] bg-bg-color"></span>
          </div>
          <div className="">
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("recycling-fuel-desc1")}
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("recycling-fuel-desc2")}
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("recycling-fuel-desc3")}
            </p>

            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("recycling-fuel-desc4")}
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("recycling-fuel-desc5")}
            </p>

            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("recycling-fuel-desc6")}
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("recycling-fuel-desc7")}
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("recycling-fuel-desc9")}
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("recycling-fuel-desc10")}
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {t("recycling-fuel-desc11")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Recycling;
