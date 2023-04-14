import React from "react";
import Main_section from "../components/main-home/Main_section";
import Secondary_section from "../components/main-home/Secondary_section";
import ScrollToTop from "../components/ScrollToTop";

function WhoWeAre() {
  return (
    <section className="mt-0 pt-8">
      <ScrollToTop />
      <div className="my-[100px] bg-white text-center">
        <h1 className="text-xl text-center mb-5 mt-5 text-black  font-semibold py-5 ">
          who we are?
        </h1>
        <div className="px-4 mt-9 w-full md:w-[80Vw] lg:w-[60vw] text-justify md:text-justify flex mx-auto lg:px-14">
          <p className="leading-10 px-3 md:px-0 text-text-color text-[18px] font-normal md:font-medium md:font-medi text-startumd:m ">
            We are a group of technology & environment gurus with different
            backgrounds, IT, Software engineering, project management,
            mechanical engineering and scientific researchers With our 5 spoken
            languages, multiple cultural and educational backgrounds, modern
            agile mindset and long years of experiences in different domains, we
            are confident that we could make a significant change in helping
            customers to reach their goals and get projects successfully
            completed
          </p>
        </div>
      </div>
      <Main_section
        content={
          <>
            <p className=" text-white md:text-text-color text-[18px] font-normal md:font-medium text-start md:text-justify leading-10">
              Our vision is a future where clean energy powers the world,
              communities flourish in harmony with the environment, and
              sustainable energy is affordable to everyone.
            </p>
            <p className=" text-white md:text-text-color text-[18px] font-normal md:font-medium text-start md:text-justify leading-10">
              As a leading voice and catalyst for change, we are committed to
              inspiring a global movement towards a cleaner, more equitable
              future.
            </p>
            <p className=" text-white md:text-text-color text-[18px] font-normal md:font-medium text-start md:text-justify leading-10">
              We strive to be the go-to partner for all stakeholders who share
              our passion for sustainability, innovation, and social
              responsibility to build together a sustainable and resilient
              future for ourselves and generations to come.
            </p>
            <p className=" text-white md:text-text-color text-[18px] font-normal md:font-medium text-start md:text-justify leading-10">
              Through our consulting services, we enable our clients to
              contribute to the global transition towards clean energy by
              implementing renewable energy solutions across Europe, Africa, and
              the Middle East
            </p>
            {/* <p className=" text-white md:text-text-color text-[18px] font-normal md:font-medium text-start md:text-justify leading-10 mt-4 lg:mt-8">
              We enable logistics decarbonisation by aiming for
              <b className="md:ml-2 text-justify">
                carbon neutrality; supporting logistics transition solutions;
                and maintaining a focus on energy efficiency.
              </b>
            </p> */}
          </>
        }
        title="Vision"
        reverse={false}
      />
      <Main_section
        content={
          <>
            <p className="leading-2 md:leading-9 text-white md:text-text-color text-[18px] font-normal md:font-medium text-start md:text-justify">
              Our mission is dedicated to raising public awareness about the
              importance of transitioning from fossil fuels to sustainable
              energy sources. We aim to foster responsible behavior among
              individuals and encourage their active participation in promoting
              this critical initiative. Moreover, we offer consulting services
              to companies, governmental and non-governmental organizations, to
              facilitate the implementation of renewable energy projects across
              Europe, Africa, and the Middle East. Our ultimate goal is to
              promote sustainable energy solutions and contribute towards the
              global transition towards a clean earth for our next generations.
            </p>
            <p className="leading-2 md:leading-9 text-white md:text-text-color text-[18px] font-normal md:font-medium text-start md:text-justify">
              At our company, we're committed to promoting sustainable waste
              management best-practices and helping governments and
              organizations to find the optimal solution for their challenges.
            </p>
            <p className="leading-2 md:leading-9 text-white md:text-text-color text-[18px] font-normal md:font-medium text-start md:text-justify">
              we also connect partners with the right technology provider and
              follow-up with them to ensure the best quality of service and a
              project completion fulfilling the most added-value to our
              customers.
            </p>
          </>
        }
        reverse={true}
        title="Mission"
      />
      {/* <Secondary_section /> */}
    </section>
  );
}

export default WhoWeAre;
