import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";
import MyChart from "../components/LineChart";
import ScrollToTop from "../components/ScrollToTop";
import img from "../assets/KNOWHOW-min.jpg";
import img2 from "../assets/know-2.png";
import img3 from "../assets/FOOTPRINT-min.jpg";
import Main_section from "../components/main-home/Main_section";

function Knowledge() {
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

      <section className="mt-0 ">
        <ScrollToTop />
        <div className=" bg-white text-center mb-9">
          <div className="flex justify-center my-[60px]">
            <h1 className="page-title3 tracking-[1px] w-fit text-xl text-center mb-5 mt-5 text-black  font-semibold py-5 ">
              THE POWER OF KNOWLEDGE
            </h1>
          </div>
          <div className="px-4 w-full md:w-[80Vw] lg:w-[60vw] text-justify md:text-justify mb-28 flex mx-auto lg:px-14">
            <ul className="pl-[20px] list-disc">
              <li className="px-3 md:px-0 text-white lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                The global average atmospheric carbon dioxide level is nearly
                417 ppm parts per million due to 2400 Gigatons of carbon dioxide
                (CO2) caused by human activities since the industrial era start.
                This includes emissions from fossil fuels, deforestation and
                other land-use changes.
              </li>
              <li className="px-3 md:px-0 text-white lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                The concentration of carbon dioxide in the atmosphere has
                increased by more than 40% since the beginning of the industrial
                era.
              </li>
              <li className="px-3 md:px-0 text-white lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                To put this in perspective, it is estimated that the Earth's
                atmosphere can absorb a maximum of around 3,000 Gt of CO2 before
                reaching dangerous levels of global warming.
              </li>
              <li className="px-3 md:px-0 text-white lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                To limit the most severe impacts of climate change, it is
                necessary to reduce carbon dioxide emissions and transition to a
                low-carbon economy. Paris Agreement, signed by 197 countries in
                2015, aims to limit global warming to well below 2°C above
                pre-industrial levels and pursue efforts to limit the
                temperature increase to 1.5°C. To achieve this goal, countries
                have pledged to reduce their greenhouse gas emissions and work
                towards a carbon-neutral economy.
              </li>
            </ul>
          </div>
        </div>

        <div className="my-8 lg:px-40 flex fle flex-wrap justify-around items-center">
          <div className="w-full flex justify-center items-center md:w-[47%]">
            <ul className="pl-[20px] list-disc">
              <li className="px-3 md:px-0 text-white lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                Within the last 50 years The ppm jumped from 315 to 415 Let’s
                imagine that the critical level for a human being to live and
                breath is 800 ppm (recommended indoor averages are between 600
                to 1000 ppm).
              </li>
              <li className="px-3 md:px-0 text-white lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                burning of fossil fuels for energy is the largest contributor to
                global carbon dioxide emissions, accounting for around 75%-85%
                of total emissions, mainly used for Industry, heat + electricity
                + transportation
              </li>
              <li className="px-3 md:px-0 text-white lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                Fossil fuel use created 33.2 billion tons of carbon dioxide
                emissions in 2011 worldwide
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
                    The aviation industry is responsible for around 2.5% of
                    global carbon dioxide emissions, with emissions projected to
                    triple by 2050 if no action is taken.
                  </li>
                  <li className="px-3 md:px-0 text-white lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                    The use of coal as an energy source is declining in many
                    countries, but it still accounts for around 40% of global
                    electricity generation and is the largest source of carbon
                    dioxide emissions from electricity generation.
                  </li>
                  <li className="px-3 md:px-0 text-white lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                    Carbon capture and storage (CCS) is a technology that can
                    capture carbon dioxide emissions from power plants and
                    industrial processes and store them underground. It is
                    currently in use in some parts of the world, but more
                    widespread deployment is needed to reach global climate
                    goals.
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

      <header className="relative h-[50vh] md:h-[90vh] my-20 w-full overflow-hidden">
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
                <li>
                  Forests, oceans and other land ecosystems absorb around 30% of
                  human-caused carbon dioxide emissions each year, leading to
                  ocean acidification which threatens marine life and
                  highlighting the importance of protecting forests to limit
                  climate change.
                </li>
                <li>
                  Climate change is causing more frequent and intense extreme
                  weather events, such as heatwaves, droughts, floods, and
                  hurricanes.
                </li>
                <li>
                  Around 1.1 billion people worldwide lack access to
                  electricity, with many relying on fossil fuels such as
                  kerosene for lighting and cooking. Transitioning to renewable
                  energy sources can provide access to electricity while
                  reducing carbon emissions.
                </li>
                <li>
                  The Intergovernmental Panel on Climate Change (IPCC) has
                  stated that to limit global warming to 1.5°C, carbon dioxide
                  emissions need to be reduced by approximately 45% by 2030,
                  compared to 2010 levels.
                </li>
                <li>
                  Methane is a potent greenhouse gas with a global warming
                  potential 28 times higher than carbon dioxide over a 100-year
                  timescale. Agriculture and livestock contribute around 44% of
                  human-caused methane emissions, highlighting the need for
                  sustainable farming practices.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Knowledge;
