import React from "react";
import Main_home from "../components/main-home/Main_home";
import video from "../assets/Video_Energy_80MB.mp4";

function Home() {
  return (
    <div>
      <header className="relative h-[100%] xl:h-[100vh] w-full overflow-hidden">
        <div className="bg-transparent font-extrabold absolute flex items-center justify-center md:justify-start w-full h-full"></div>
        <video autoPlay loop muted className="w-[full] object-contain">
          <source src={video} type="video/mp4" />
        </video>
      </header>
      <Main_home />
    </div>
  );
}

export default Home;
