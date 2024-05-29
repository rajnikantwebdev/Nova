import React from "react";
import Slide from "../components/Slide";
import ImageCard from "../components/ImageCard";

const WhatWeDo = () => {
  return (
    <Slide
      heading={
        <div className="w-full z-10">
          <h1 className="font-sans text-8xl">WHAT WE DO</h1>
        </div>
      }
      mainContent={
        <div className="flex gap-8 items-center w-[1500px] ">
          <ImageCard src={"/branding.jpg"} title={"Branding"} height={"h-60"} />
          <ImageCard
            src={"/sale.webp"}
            title={"Graphic Design"}
            height={"h-80"}
          />
          <ImageCard src={"/3d.jpg"} title={"3d design"} height={"h-72"} />
          <ImageCard src={"/ai.jpg"} title={"Ai Design"} height={"h-64"} />
          <ImageCard src={"/robot.jpg"} title={"Robotics"} height={"h-80"} />

          <ImageCard src={"/uiux.jpg"} title={"Ui/Ux design"} height={"h-48"} />
        </div>
      }
      prevPage={"Who we are"}
      nextPage={"Our Team"}
      nextPageUrl={"/ourTeam"}
      prevPageUrl={"/introduction"}
    />
  );
};

export default WhatWeDo;
