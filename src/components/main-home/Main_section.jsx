import { RightOutlined } from "@ant-design/icons";
import { Parallax } from "react-scroll-parallax";
import img from "../../assets/img-2.jpg";

const Main_section = ({ reverse }) => {
  return (
    <>
      <style jsx="true">
        {`
          @media (max-width: 768px) {
            .main_section {
              position: relative;
              background-image: url(../${img});
              z-index: 1;
              background-repeat: no-repeat;
              background-size: cover;
              padding: 50px 25px;
            }
            .main_section:after {
              content: "";
              background: rgba(0, 0, 0, 0.6);
              height: 100%;
              width: 100%;
              position: absolute;
              inset: 0;
              z-index: -1;
            }
          }
        `}
      </style>
      <section className="  main_section grid  grid-cols-1 md:grid-cols-2  items-stretch  ">
        <div
          className={`img-container   hidden md:block ${
            reverse ? "order-2" : ""
          } `}
        >
          <img
            src={img}
            alt="img"
            className="h-[100%] w-[100%]  object-cover "
          />
        </div>
        <div className="info  max-w-[90%] md:max-w-[85%] lg:max-w-[75%]  mx-auto  md:pb-12   ">
          <h2 className="heading  text-2xl  sm:text-3xl  text-white md:text-text-color font-bold text-center mb-5  py-5 md:py-10 xl:py-14 lg:text-3xl xl:text-5xl ">
            Enabling Logistics Decarbonisation
          </h2>
          <p className="text-white md:text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium text-justify">
            Climate action is a global imperative, requiring collective action
            as we navigate the energy transition. As a leading company, MSC has
            a crucial role to play in decarbonising logistics. Collaboration
            across the supply and value chain is key to enable the investments
            needed to decarbonise as well as accelerate solutions at scale.
          </p>
          <p className="text-white md:text-text-color leading-normal md:leading-8 text-[17px] lg:text-xl font-normal md:font-medium text-justify mt-4 lg:mt-8">
            We enable logistics decarbonisation by aiming for
            <b className="md:ml-2 text-justify">
              carbon neutrality; supporting logistics transition solutions; and
              maintaining a focus on energy efficiency.
            </b>
          </p>
          <div className="text-center mt-8">
            <a
              href="#"
              className="no-underline gap-1 bg-main-color  rounded-full h-[50px] mb-4 flex  items-center justify-center  w-[220px]  mx-auto hover:bg-white  border-main-color  border-[3px] font-medium  text-base"
            >
              <b className="text-[14px]  leading-[1px] ">
                <RightOutlined />
              </b>
              Read more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Main_section;
