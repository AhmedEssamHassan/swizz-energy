import React from "react";
import Main_home from "../components/main-home/Main_home";
import video from "../assets/Video_Energy_80MB.mp4";
import AnimatedText from "react-animated-text-content";

function Home() {
  return (
    <div>
      <header className="relative h-[100%] xl:h-[100vh] w-full overflow-hidden">
        <div className="bg-transparent font-extrabold absolute flex items-center justify-center md:justify-start w-full h-full">
          {/* <AnimatedText
            className="text-2xl w-full text-center md:text-start px-5 md:px-0 md:w-1/3 lg:w-1/3 ml-0 md:ml-14 text-[#fff]"
            type="chars"
            interval={0.1}
            duration={0.3}
            // animationType="bounce"
            animation={{
              ease: "ease-out",
              scale: -0.3,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            pariatur saepe magnam laborum voluptate.
          </AnimatedText> */}
        </div>
        <video autoPlay loop muted className="w-[full] object-contain">
          <source src={video} type="video/mp4" />
        </video>
      </header>
      <Main_home />
    </div>
  );
}

export default Home;
