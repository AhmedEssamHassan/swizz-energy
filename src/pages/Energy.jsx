import React from "react";
import { BsArrow90DegDown, BsArrow90DegRight } from "react-icons/bs";
import ScrollToTop from "../components/ScrollToTop";
import train_img from "../assets/TRAIN-min.jpg";
import PELLET from "../assets/Pellet_2_Electricity.png";

function Energy() {
  return (
    <>
      <style>
        {`
       .img-header{
     
         object-fit: cover;
min-height:100vh     


       }

      @media (max-width: 767px) {
        .img-header{
          min-height: 100%

        }
      }
      `}
      </style>
      <header className="relative h-[50vh] md:h-[100vh] w-full overflow-hidden">
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
          <div className="flex justify-center my-[60px]">
            <h1 className="page-title3 tracking-[1px] w-fit text-xl text-center mb-5 mt-5 text-black  font-semibold py-5 ">
              THE POWER OF STEAM
            </h1>
          </div>
          <div className="">
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              One of our core businesses is the ecological generation of
              electricity and heat from steam by burning pellets. Pellets is a
              high efficient and renewable source of energy.
            </p>

            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              Here is an example to show the ratio between heat and electricity
              in case 1 Megawatt electricity is needed.
            </p>

            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              When burning pellets, the process begins by heating water to
              generate steam. This steam is then directed to turbines, where it
              flows over the blades and causes them to rotate. As the turbine
              blades rotate, the mechanical energy generates electricity.
            </p>

            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              1 kg pellets contains 5 megajoules (MJ) energy
            </p>

            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              To generate 1 MW (1000 kwh) of electricity, we need to burn
              approximately 200 kg of pellets per hour (assuming an efficiency
              of 20%). When burning 200 kg of pellets, we generate approximately
              1000 MJ of heat per hour (depending on the energy content of the
              pellets) which means the heat output is about 96% of the
              electrical output.
            </p>

            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              200 kg x 5 MJ/kg = 1000 MJ (1'000’000 kJ){" "}
            </p>

            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              The lost energy during the process is heat which could be captured
              and used for heating buildings, water or even cooling applications
              through a process called cogeneration or combined heat and power
              (CHP) .
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              {" "}
              The leftover heat energy can be captured and used for cooling
              through absorption chillers , which use heat to drive a
              refrigeration cycle instead of electricity. Absorption chillers
              are commonly used in large commercial and industrial applications,
              such as hospitals, universities, and data centers.
            </p>

            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              Overall, generating electricity and heat from steam by burning
              pellets is an efficient method, with a high ratio output of heat
              to electricity. By using pellets as a renewable energy source, we
              can reduce our dependence on fossil fuels and contribute to a more
              sustainable future.
            </p>
          </div>
          <img className="mt-24 mb-24" src={PELLET} alt="PELLET" />
        </div>
      </section>
    </>
  );
}

export default Energy;
