import React from "react";
import Slide from "../components/Slide";
import Image from "next/image";

const Introduction = () => {
  return (
    <Slide
      heading={
        <div className="w-full z-10">
          <h1 className="font-sans text-8xl">WHO WE ARE</h1>
        </div>
      }
      prevPage={"Main"}
      nextPageUrl={"/whatWeDo"}
      nextPage={"What we do"}
      prevPageUrl={"/"}
      mainContent={
        <div className="flex justify-between">
          <div className="flex gap-12">
            <h4 className="text-sm">
              We are creative
              <br />
              agency design your best products.
              <br />
              We help companies create
              <br />
              or launch refreshed brand,
              <br />
              website design
              <br />
              and modern visual
              <br />
              communications.
            </h4>
            <h4 className="text-sm">
              The company is based
              <br />
              out of London. Our agency
              <br />
              specialized in human-centric
              <br />
              digital experiences
              <br />
              and improves the products
              <br />
              every single day. Together
              <br />
              with a team of professionals
              <br />
              we come up with cool
              <br />
              and important concept, we
              <br />
              will help your business reach
              <br />a new level.
            </h4>
          </div>
          <div>
            <Image src={"/office.avif"} width={400} height={400} alt="office" />
          </div>
        </div>
      }
    />
  );
};

export default Introduction;
