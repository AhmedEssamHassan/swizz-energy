import Main_section from "../components/main-home/Main_section";
import ScrollToTop from "../components/ScrollToTop";
import recycle from "../assets/RECYCLE-min.jpg";
import samara from "../assets/SAMARA-min.jpg";
import img from "../assets/CO2-min.jpg";
function Recycling() {
  return (
    <>
      <style jsx="true">
        {`
          th,
          td {
            // border: 1px solid #dddddd;
            text-align: center;
            padding: 8px;
          }

          @media (max-width: 1023px) {
            td {
              color: #fff;
            }
          }
          .img-header {
            object-fit: cover;
            min-height: 100vh;
          }

          @media (max-width: 767px) {
            .img-header {
              min-height: 100%;
            }
          }
        `}
      </style>

      <header className="relative border border-red-600 h-[50vh] md:h-[100vh] w-full overflow-hidden">
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
          <div className="flex justify-center my-[60px]">
            <h1 className="page-title tracking-[1px] w-fit text-xl text-center mb-5 mt-5 text-black  font-semibold py-5 ">
              THE POWER OF WASTE
            </h1>
          </div>
          <div className="px-4 mt-9 w-full md:w-[80Vw] lg:w-[60vw] text-justify md:text-justify flex mx-auto lg:px-14">
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] mb-16">
              We are passionate about alternative energy resources through waste
              management and the critical role it plays in reducing our our
              dependence on fossil fuels and mitigating the impacts of climate
              change As we seek moving away from fossil fuels towards
              sustainable alternatives, and waste can be utilized as a viable
              alternative to fossil fuels, waste-to-energy technologies are
              emerging as a promising solution. Waste-to-energy facilities use a
              variety of technologies to generate electricity, heat or biofuels
              from waste materials such as wood, paper, agricultural residues,
              and even household waste. Thus reduce our carbon footprint and
              greenhouse gas emissions Instead of filling up landfills and
              polluting our environment, waste can be used as a valuable
              resource to power homes, businesses, and even transportation. Join
              us to educate everyone to dispose his waste in a systematic manner
              and be able to reuse it as a valuable resource of energy and make
              a positive impact on the environment. This could only happen if we
              work together!
            </p>
          </div>
        </div>
        <Main_section
          windowWidth="1024"
          content={
            <>
              <table className="w-[350px]">
                <tbody>
                  <tr className="text-lg">
                    <td>Landfill</td>
                    <td>Compaction</td>
                  </tr>
                  <tr className="text-lg">
                    <td>Incineration</td>
                    <td>Composting</td>
                  </tr>
                </tbody>
              </table>
              <h1 className="text-xl text-center mb-5 mt-5 text-white lg:text-black  font-semibold py-5 ">
                Simple ways to practise waste segregation
              </h1>
              <ul className="pl-[20px] list-disc">
                <li className="px-3 md:px-0 text-white lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                  Keep separate containers for dry and wet waste in the kitchen.
                </li>
                <li className="px-3 md:px-0 text-white lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                  Keep two bags for dry waste collection- paper and plastic, for
                  the rest of the household waste.
                </li>
                <li className="px-3 md:px-0 text-white lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                  Keep plastic from the kitchen clean and dry and drop into the
                  dry waste bin.
                </li>
                <li className="px-3 md:px-0 text-white lg:text-text-color leading-normal md:leading-8   text-[18px]  font-normal tracking-[1px] mb-2">
                  {" "}
                  Send wet waste out of your home daily.
                </li>
              </ul>
            </>
          }
          title="Basic waste management methods"
          reverse={true}
          imgSrc={recycle}
        />

        <Main_section
          windowWidth="1024"
          content={
            <>
              <table className="w-full">
                <tbody>
                  <tr className="text-lg ">
                    <th className="w-[50%]  text-white lg:text-black">
                      Non-Bio Degradable
                    </th>
                    <th className="w-[50%]  text-white lg:text-black">
                      Bio Degradable
                    </th>
                  </tr>
                  <tr className="text-lg">
                    <td>
                      <ul>
                        <li className="">
                          <span className="font-bold text-lg block mb-1">
                            A. Recyclable Waste
                          </span>
                          Plastics, Paper, Glass, Metal…
                        </li>
                        <br />
                        <li className="mb-1">
                          <span className="font-bold text-lg block mb-1">
                            B. Toxic Waste
                          </span>
                          Old Medicine, paints, Chemicals, bulbs, Spray Cans,
                          fertilizer and pesticide containers, batteries, shoe
                          polish.
                        </li>
                        <br />
                        <li className="mb-1">
                          <span className="font-bold text-lg block mb-1">
                            C. Soiled
                          </span>
                          Hospital waste: <br />
                          <ul className="text-lg">
                            <li>cloth soiled with blood </li>
                            <li>body fluids</li>
                            <li>
                              Toxic & soiled waste must be <br />
                              disposed of with utmost care
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul className="text-lg">
                        <li className="mb-1">organic waste </li>
                        <li className="mb-1">wet waste </li>
                        <li className="mb-1">kitchen waste </li>
                        <li className="mb-1">
                          vegetables, fruits, flowers
                          <br /> garden leaves
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          }
          title="Waste could be:"
          reverse={false}
          imgSrc={samara}
        />
      </section>
    </>
  );
}

export default Recycling;
