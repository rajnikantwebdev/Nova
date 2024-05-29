import React from "react";
import Slide from "../components/Slide";
import ImageCard from "../components/ImageCard";
import brandingImg from "../../public/branding.jpeg";
import salesImg from "../../public/sale.webp";
import threeDImg from "../../public/3d.jpg";
import aiImg from "../../public/ai.jpg";
import robotImg from "../../public/robot.jpg";
import uiUx from "../../public/uiux.jpg";

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
          <ImageCard src={brandingImg} title={"Branding"} height={"h-60"} />
          <ImageCard src={salesImg} title={"Graphic Design"} height={"h-80"} />
          <ImageCard src={threeDImg} title={"3d design"} height={"h-72"} />
          <ImageCard src={aiImg} title={"Ai Design"} height={"h-64"} />
          <ImageCard src={robotImg} title={"Robotics"} height={"h-80"} />

          <ImageCard src={uiUx} title={"Ui/Ux design"} height={"h-48"} />
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
