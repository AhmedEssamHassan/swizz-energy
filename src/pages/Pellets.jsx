import ScrollToTop from "../components/ScrollToTop";
import PELLET from "../assets/PELLET-min.jpg";
import pampoo from "../assets/BAMBOO-min.jpg";

function Pellets() {
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
          <div className="flex justify-center my-[60px]">
            <h1 className="page-title tracking-[1px] w-fit text-xl text-center mb-5 mt-5 text-black  font-semibold py-5 ">
              THE POWER OF BIOMASS
            </h1>
          </div>
          <div className="">
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              Energy crops are plants which are produced with the express
              purpose of using their biomass energetically and at the same time
              reduce carbon dioxide emission level in the atmosphere. Biofuels
              derived from lignocellulosic plant contains bounded lignin +
              cellulose + hemicellulose material represent an important
              renewable energy alternative that could replace fossil fuels.
              Bamboo is a fast-growing grass that can absorb large amounts of
              carbon dioxide during photosynthesis, and it can continue to store
              carbon in its woody stems, roots, and leaves even after it has
              been harvested. Bamboo has been shown to be an effective tool for
              carbon sequestration due to its rapid growth rate, high biomass
              productivity, and ability to thrive in diverse environmental
              conditions. In fact, some studies have suggested that bamboo can
              sequester up to 4 times more carbon than other tree species.
              Furthermore, bamboo has a wide range of industrial and commercial
              applications, including construction, furniture, textiles, and
              paper production, which can provide additional benefits to the
              environment by reducing the use of fossil fuels and other
              non-renewable resources.
            </p>
          </div>
        </div>
      </section>
      <header className="relative h-[50vh] md:h-[100vh] my-10 w-full overflow-hidden">
        <img className="img-header" src={pampoo} />
        <div className="container mx-auto px-2 lg:px-14 md:px-0  absolute h-full  flex items-center z-10 inset-0 justify-center  lg:justify-center">
          <div className="font-extrabold absolute bottom-0">
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
          </div>
        </div>
      </header>
      <section className="mt-0 container lg:px-14  flex justify-center">
        <div className="px-4 lg:px-14 md:px-0 mb-6 md:w-[80Vw] lg:w-[60vw] bg-white text-start">
          {/* <div className="flex justify-center my-[60px]">
            <h1 className="page-title tracking-[1px] w-fit text-xl text-center mb-5 mt-5 text-black  font-semibold py-5 ">
              THE POWER OF BIOMASS
            </h1>
          </div> */}
          <div className="">
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              Our strategy revolves around the cultivation of Energy crops in
              warm regions like North Africa, utilize treated wastewater to
              establish a closed-loop system for energy production. produce
              pellets from dry, pressed bamboo, generate electricity using
              modern steam turbines apply electrolysis to create high-quality
              green hydrogen out of electricity & water. In addition to our
              focus on sustainable energy production, we are committed to
              embracing alternative fuels and wider adoption of decarbonized
              shipping trade routes “green corridors” by establishing the first
              short-sea shipping line connecting North Africa to Europe to
              enhance delivering clean energy products to the European continent
              as well boosting the African countries’ economy, create job
              opportunities aiming for a win-win-situation for all.
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              Here are some of its advantages: 4 times more CO2 capturing
              Wastewater irrigation 6 months short Lifecycle Bamboos’ dryness of
              8.5% saves additional processing steps in pellet production
              grinding etc. our process contains no deforesting Electricity
              production from pellet is a tightly controlled cycle by dust
              collectors Zero waste, our co2 is being collected in form of ashes
              which is used fertilizers, cements We are eligible for getting
              carbon credits which will be invested in optimizing our process
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              Here are some of its advantages:
              <ul className="list-disc ml-5">
                <li>4 times more CO2 capturing</li>
                <li>Wastewater irrigation</li>
                <li>6 months short Lifecycle</li>
                <li>
                  Bamboos’ dryness of 8.5% saves additional processing steps in
                  pellet production grinding etc.
                </li>
                <li>our process contains no deforesting</li>
                <li>our process contains no deforesting</li>
                <li>
                  Electricity production from pellet is a tightly controlled
                  cycle by dust collectors
                </li>
                <li>
                  Zero waste, our co2 is being collected in form of ashes which
                  is used fertilizers, cements
                </li>
                <li>
                  We are eligible for getting carbon credits which will be
                  invested in optimizing our process
                </li>
              </ul>
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              Waste to needs Loop: To Live we need a drop of water (waterdrop
              image) To Live we need energy (Lamp image) To Live we produce
              carbon, garbage & wastewater (input/output image) The optimum
              would be to create a loop by turning our outputs into usable
              materials to supply our needs…
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pellets;
