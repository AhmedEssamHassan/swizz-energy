import ScrollToTop from "../components/ScrollToTop";
import gtc from "../assets/GTC.jpg";

function GTC() {
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
        <img className="img-header" src={gtc} />
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
      <section className="mt-0 container lg:px-14 mb-20 flex justify-center">
        <ScrollToTop />
        <div className="px-4 lg:px-14 md:px-0 mb-6 md:w-[80Vw] lg:w-[60vw] bg-white text-start">
          <div className="flex justify-center my-[60px]">
            <h1 className="page-title3 tracking-[1px] w-fit text-xl text-center mb-5 mt-5 text-black  font-semibold py-5 ">
              GENERAL TERMS AND CONDITIONS
            </h1>
          </div>
          <div className="">
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              Swiss Energy Hub Ltd. mentioned below as SEH or in its full name,
              provides consulting services, trading and energy production. our
              services include training, business plans, feasibility studies and
              support to companies, governmental and non-governmental
              organizations, to facilitate the implementation of renewable
              energy projects across Europe, Africa, and the Middle East.
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              we also connect partners with the right technology provider and
              follow-up with them to ensure the best quality of service and a
              project completion fulfilling the our customers’ expectations.
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              we are committed to promoting sustainable waste management
              best-practices and helping governments and organizations to find
              the optimal solution for their challenges.{" "}
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              We are dedicated to raising public awareness about the importance
              of transitioning from fossil fuels to sustainable energy sources.
              We aim to foster responsible behavior among individuals and
              encourage their active participation in promoting this critical
              initiative.
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              SEH and its customers are in a legal relationship. These General
              Terms and Conditions (GTC) apply to this relationship and regulate
              it, unless a different agreement has been made in a written way
              between SEH and ist partners or customers (Art. 13
              Obligationsrecht - Swiss obligation Law).
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              By entering into contract negotiations or business relationships
              with SEH, the customer accepts these GTCs as binding terms. The
              GTCs are available on the website of SWISS ENERGY HUB LTD and are
              applicable to all our offers.
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              By entering into contract negotiations or business relationships
              with SEH, the customer accepts these GTCs as binding terms. The
              GTCs are available on the website of SWISS ENERGY HUB LTD and are
              applicable to all our offers.
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              Contract Negotiations: <br />
              The description of products and services in brochures,
              advertisements, websites, and other advertising and sales
              materials of SEH is only for information purposes and does not
              constitute a binding assurance of specific properties. There is no
              guarantee of the accuracy and content of each advertising and
              sales document or the content of our website.
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              The prices mentioned in the offers of SEH are gross prices
              (including the swiss value-added tax) and are valid for 30 days
              unless other is stated.
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              Regarding property and copyright rights to offer documents, clause
              6 of these GTCs applies.
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              Payment Terms: <br />
              Invoicing by SEH follows mainly 100% advance payment or depending
              on each agreement. Any delayed payment should be settled within 30
              days as of the invoice issuing date.
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              After this period, SEH has the rights to charge reminder fees. If
              prices for services or components purchased by SEH increase after
              the contract is concluded, the offered price is subject to
              surcharges. For contracts concluded for longer period of time
              (such as long-term consulting, project management or similar) the
              relevant rates may be adjusted quarterly.
            </p>
            <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal tracking-[1px] text-justify ">
              The customer agrees that SEH will pass on information about
              payment processing to Creditreform Associations to check the
              customer's creditworthiness in case of delayed payments
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
//
export default GTC;
