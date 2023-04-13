import React from "react";
import { BsArrow90DegDown, BsArrow90DegRight } from "react-icons/bs";
import ScrollToTop from "../components/ScrollToTop";

function Energy() {
  return (
    <section className="mt-0 container lg:px-14  pt-8">
      <ScrollToTop />
      <div className="px-3 md:px-0 my-[100px] bg-white text-start">
        <h1 className="text-2xl text-center mb-5 text-black border-0 border-b-2 border-b-black font-semibold py-5 ">
          Energy
        </h1>
        <div>
          <p className="leading-10 px-3 md:px-0 text-text-color text-[17px] lg:text-[22px] font-normal md:font-medium ">
            One of our core businesses is the ecological generation of
            electricity and heat from steam by burning pellets. Pellets is a
            high efficient and renewable source of energy.
          </p>

          <p className="leading-10 px-3 md:px-0 text-text-color text-[17px] lg:text-[22px] font-normal md:font-medium ">
            Here is an example to show the ratio between heat and electricity in
            case 1 Megawatt electricity is needed.
          </p>

          <p className="leading-10 px-3 md:px-0 text-text-color text-[17px] lg:text-[22px] font-normal md:font-medium ">
            When burning pellets, the process begins by heating water to
            generate steam. This steam is then directed to turbines, where it
            flows over the blades and causes them to rotate. As the turbine
            blades rotate, the mechanical energy generates electricity.
          </p>

          <p className="leading-10 px-3 md:px-0 colored text-bg-color text-[17px] lg:text-[22px] font-normal md:font-medium ">
            <BsArrow90DegDown /> 1 kg pellets contains 5 megajoules (MJ) energy
          </p>

          <p className="leading-10 px-3 md:px-0 colored text-text-color text-[17px] lg:text-[22px] font-normal md:font-medium ">
            To generate 1 MW (1000 kwh) of electricity, we need to burn
            approximately 200 kg of pellets per hour (assuming an efficiency of
            20%). When burning 200 kg of pellets, we generate approximately 1000
            MJ of heat per hour (depending on the energy content of the pellets)
            which means the heat output is about 96% of the electrical output.
          </p>

          <p className="leading-10 px-3 md:px-0 colored text-bg-color text-[17px] lg:text-[22px] font-normal md:font-medium ">
            <BsArrow90DegDown /> 200 kg x 5 MJ/kg = 1000 MJ (1'000’000 kJ){" "}
          </p>

          <p className="leading-10 px-3 md:px-0 colored text-text-color text-[17px] lg:text-[22px] font-normal md:font-medium ">
            The lost energy during the process is heat which could be captured
            and used for heating buildings, water or even cooling applications
            through a process called cogeneration or combined heat and power
            (CHP) .
          </p>
          <p className="leading-10 px-3 md:px-0 colored text-text-color text-[17px] lg:text-[22px] font-normal md:font-medium ">
            {" "}
            The leftover heat energy can be captured and used for cooling
            through absorption chillers , which use heat to drive a
            refrigeration cycle instead of electricity. Absorption chillers are
            commonly used in large commercial and industrial applications, such
            as hospitals, universities, and data centers.
          </p>

          <p className="leading-10 px-3 md:px-0 colored text-text-color text-[17px] lg:text-[22px] font-normal md:font-medium ">
            Overall, generating electricity and heat from steam by burning
            pellets is an efficient method, with a high ratio output of heat to
            electricity. By using pellets as a renewable energy source, we can
            reduce our dependence on fossil fuels and contribute to a more
            sustainable future.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Energy;
