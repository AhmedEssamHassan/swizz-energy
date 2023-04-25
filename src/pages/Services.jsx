import React from "react";
import img from "../assets/Services.jpg";
import ScrollToTop from "../components/ScrollToTop";
function Services() {
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
      <header className="relative h-[50vh] lg:h-[100vh] w-full overflow-hidden">
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
              <p className="mb-5">GLOBAL CONSULTING SERVICES</p>
              <span className="mt-72">All out of one hand</span>
            </h1>
            <span className="w-[50px] h-[4px] bg-bg-color"></span>
          </div>
          <div className="">
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              Our consulting services in the domain of renewable energy and
              waste management including feasibility studies, business plan
              development, product and service provider selection, and project
              management.
            </p>
            <h2 className="mt-7 leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] text-justify font-semibold">
              Feasibility Studies
            </h2>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              Our team conducts in-depth feasibility studies to assess the
              technical, economic, environmental and social aspects of renewable
              energy and waste management projects. We provide our clients with
              detailed reports and recommendations based on our findings,
              helping them make informed decisions about their projects.
            </p>
            <h2 className="mt-7 leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] text-justify font-semibold">
              Business Plan Development
            </h2>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              Our consultants work closely with our clients to develop
              comprehensive business plans that outline project scopes, risks,
              opportunities and financial projections. Our goal is to help our
              clients maximize their return on investment and achieve their
              project objectives.
            </p>

            <h2 className="mt-7 leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] text-justify font-semibold">
              Product and Service Provider Selection
            </h2>

            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              We leverage our extensive knowledge of the renewable energy and
              waste management markets to help our clients select the best
              products and service providers for their projects. Our team
              evaluates technical specifications, quality, price, and other
              relevant factors to ensure our clients select the most appropriate
              products and services.
            </p>
            <h2 className="mt-7 leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] text-justify font-semibold">
              Project Management Services
            </h2>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              Our experienced project managers provide comprehensive planning
              and monitoring services, establishing project timelines,
              identifying key performance indicators, and monitoring project
              quality and progress. We provide regular project reports to keep
              our clients informed of project status, ensuring projects are
              completed on time and within budget.
            </p>

            <p className="mt-7 leading-10 px-3 md:px-0 text-text-color text-[18px] tracking-[1px] font-normal text-justify ">
              At our consulting firm, we are committed to providing our clients
              with exceptional services, tailored to meet their unique needs.
              Contact us today to learn more about how we can help you achieve
              your renewable energy and waste management project objectives.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
