import ScrollToTop from "../components/ScrollToTop";

function Recycling() {
  return (
    <section className="mt-0 container lg:px-14  pt-8">
      <ScrollToTop />
      <div className="px-3 md:px-0 my-[100px] bg-white text-start">
        <h1 className="text-2xl text-center mb-5 text-black border-0 border-b-2 border-b-black font-semibold py-5 ">
          Recycling & waste management
        </h1>
        <p className="leading-10 px-3 md:px-0 text-text-color text-[17px] lg:text-[22px] font-normal md:font-medium ">
          We are passionate about alternative energy resources through waste
          management and the critical role it plays in reducing our our{" "}
          dependence on fossil fuels and mitigating the impacts of climate
          change
        </p>
        <p className="leading-10 px-3 md:px-0 text-text-color text-[17px] lg:text-[22px] font-normal md:font-medium ">
          As we seek moving away from fossil fuels towards sustainable
          alternatives, and waste can be utilized as a viable alternative to
          fossil fuels, waste-to-energy technologies are emerging as a promising
          solution.
        </p>
        <p className="leading-10 px-3 md:px-0 text-text-color text-[17px] lg:text-[22px] font-normal md:font-medium ">
          Waste-to-energy facilities use a variety of technologies to generate
          electricity, heat or biofuels from waste materials such as wood,
          paper, agricultural residues, and even household waste.
        </p>
        <p className="leading-10 px-3 md:px-0 text-text-color text-[17px] lg:text-[22px] font-normal md:font-medium ">
          Thus reduce our carbon footprint and greenhouse gas emissions
        </p>
        <p className="leading-10 px-3 md:px-0 text-text-color text-[17px] lg:text-[22px] font-normal md:font-medium ">
          Instead of filling up landfills and polluting our environment, waste
          can be used as a valuable resource to power homes, businesses, and
          even transportation.
        </p>
        <p className="leading-10 px-3 md:px-0 text-text-color text-[17px] lg:text-[22px] font-normal md:font-medium ">
          Join us to educate everyone to dispose his waste in a systematic
          manner and be able to reuse it as a valuable resource of energy and
          make a positive impact on the environment.
        </p>
        <p className="leading-10 px-3 md:px-0 text-text-color text-[17px] lg:text-[22px] font-normal md:font-medium ">
          This could only happen if we work together!
        </p>
        <h1 className="text-2xl text-center mb-5 text-black border-0 border-b-2 border-b-black font-semibold py-5 ">
          Basic waste management methods
        </h1>
        <p className="leading-10 px-3 md:px-0 text-text-color text-[17px] lg:text-[22px] font-normal md:font-medium ">
          <span className="xl:flex xl:justify-between xl:max-w-[40%] ">
            <span>Landfill</span> <span>Incineration</span>{" "}
            <span>Compaction</span> <span>Composting</span>
          </span>
          <br />
          <span className="text-text-color">
            Waste segregation methods according to type of waste
          </span>
        </p>
        <div className="flex gap-4 flex-wrap justify-center md:justify-start ">
          <div className="bg-[#05cf054a] text-center p-3  min-w-[300px] mb-2 md:mb-0">
            <h4 className="font-bold text-base mb-1">Bio Degradable </h4>
            <ul>
              <li>organic waste </li> <li>wet waste </li>
              <li>kitchen waste </li>
              <li>
                vegetables, fruits, flowers
                <br /> garden leaves
              </li>
            </ul>
          </div>
          <div className="bg-[#05cf054a] text-center py-3 px-4 min-w-[300px]">
            <h4 className="font-bold text-base mb-2">Non-Bio Degradable </h4>

            <ul>
              <li className="">
                <span className="font-bold text-base block mb-1">
                  A. Recyclable Waste
                </span>
                Plastics, Paper, Glass, Metal…
              </li>
              <br />
              <li className="">
                <span className="font-bold text-base block mb-1">
                  B. Toxic Waste
                </span>
                Old Medicine, paints, Chemicals, bulbs,
                <br /> Spray Cans, fertilizer and pesticide <br />
                containers, batteries, shoe polish.
              </li>
              <br />
              <li className="">
                <span className="font-bold text-base block mb-1">
                  C. Soiled
                </span>
                Hospital waste: <br />
                <ul>
                  <li>cloth soiled with blood </li>
                  <li>body fluids</li>
                  <li>
                    Toxic & soiled waste must be <br />
                    disposed of with utmost care
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <p className="px-3 md:px-0 text-text-color leading-normal md:leading-8 text-[15px] lg:text-xl font-normal md:font-medium mb-2">
          Simple ways to practise waste segregation{" "}
        </p>
        <ul className="pl-[20px] list-disc">
          <li className="px-3 md:px-0 text-text-color leading-normal md:leading-8 text-[15px] lg:text-xl font-normal md:font-medium mb-2">
            Keep separate containers for dry and wet waste in the kitchen.
          </li>
          <li className="px-3 md:px-0 text-text-color leading-normal md:leading-8 text-[15px] lg:text-xl font-normal md:font-medium mb-2">
            Keep two bags for dry waste collection- paper and plastic, for the
            rest of the household waste.
          </li>
          <li className="px-3 md:px-0 text-text-color leading-normal md:leading-8 text-[15px] lg:text-xl font-normal md:font-medium mb-2">
            Keep plastic from the kitchen clean and dry and drop into the dry
            waste bin.
          </li>
          <li className="px-3 md:px-0 text-text-color leading-normal md:leading-8 text-[15px] lg:text-xl font-normal md:font-medium mb-2">
            {" "}
            Send wet waste out of your home daily.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Recycling;
