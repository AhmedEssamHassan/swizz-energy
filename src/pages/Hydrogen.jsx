import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import hydrogen from "../assets/HYDROGEN-min.jpg";
import green from "../assets/FOSSIL_GREEN-min.jpg";
function Hydrogen() {
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
        <img className="img-header" src={hydrogen} />
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
              THE POWER OF HYDROGEN
            </h1>
          </div> */}
        </div>
      </header>
      <section className="mt-0 container lg:px-14  flex justify-center">
        <ScrollToTop />
        <div className="px-4 lg:px-14 md:px-0 mb-6 md:w-[80Vw] lg:w-[60vw] bg-white text-start">
          <div className="flex justify-center my-[60px]">
            <h1 className="page-title3 tracking-[1px] w-fit text-xl text-center mb-5 mt-5 text-black  font-semibold py-5 ">
              THE POWER OF HYDROGEN
            </h1>
          </div>
          <div className="">
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              Hydrogen gas is a clean and renewable source of energy that could
              replace fossil fuels in a wide range of applications, from
              transportation to power generation. One of the most promising
              methods of producing hydrogen gas is through the process of
              electrolysis, which involves using electricity to split water into
              hydrogen and oxygen molecules On average, producing 1 kilogram of
              hydrogen gas requires approximately 50 kilowatt-hours (kWh) of
              electricity. This means that the efficiency of the process is
              approximately 60-70%, depending on the specific equipment and
              conditions used. To put this into perspective, a typical car with
              a 100-kilowatt fuel cell engine would require approximately 1 kg
              of hydrogen gas to travel 100 km. To produce this amount of
              hydrogen gas would require approximately 50 kWh of electricity. In
              terms of percentages, this means that approximately 30-40% of the
              energy used to produce the hydrogen gas is lost as waste heat
              during the electrolysis process. The remaining 60-70% of the
              energy is stored in the hydrogen gas. Also wind or solar power,
              can further improve the environmental sustainability of the
              process. In conclusion, producing hydrogen gas from electricity
              and water is an efficient and promising method of producing clean,
              renewable energy.
            </p>
          </div>
        </div>
      </section>
      <header className="relative h-[50vh] my-20 md:h-[100vh] w-full overflow-hidden">
        <img className="img-header" src={green} />
        <div className="container mx-auto px-2 lg:px-14 md:px-0  absolute h-full  flex items-center z-10 inset-0 justify-center  lg:justify-center">
          {/* <div className="font-extrabold absolute bottom-0">
            <h1
              style={{
                fontFamily: "Montserrat",
                fontWeight: "900",
                letterSpacing: "3px",
              }}
              className="text-[13px] md:text-3xl text-center mb-28 md:mb-48 text-white px-5 bg-[#8080807a] rounded-lg py-5 "
            >
              OUR STRATEGY
            </h1>
          </div> */}
        </div>
      </header>
      <section className="mt-0 container lg:px-14 my-20 flex justify-center">
        <div className="px-4 lg:px-14 md:px-0 mb-6 my-10 md:w-[80Vw] lg:w-[60vw] bg-white text-start">
          {/* <div className="flex justify-center my-[60px]">
            <h1 className="page-title tracking-[1px] w-fit text-xl text-center mb-5 mt-5 text-black  font-semibold py-5 ">
              THE POWER OF HYDROGEN
            </h1>
          </div> */}
          <div className="">
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              There are still some challenges to go through in order to have
              hydrogen usage becoming very popular, mainly the safety issues:
              <ul className="list-disc ml-5">
                <li>
                  Storage: hydrogen is a very small molecule and can escape from
                  storage tanks or pipelines more easily than other gases. If
                  there is a leak, the hydrogen can quickly disperse and
                  represent danger.
                </li>
                <li>
                  Hydrogen is often stored in high-pressure tank (700 bars),
                  which can rupture if the pressure exceeds the tank's capacity.
                </li>
              </ul>
              To avoid these issues high-quality materials should be used,
              maintenance, regular inspections and implementing safety features
              like pressure relief valves and leak detection systems should be
              applied. By optimizing the efficiency of the electrolysis process,
              and the safety challenges we could reduce our dependence on fossil
              fuels and contribute to a more sustainable future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hydrogen;
