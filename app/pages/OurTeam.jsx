import React from "react";
import Slide from "../components/Slide";
import Image from "next/image";

const OurTeam = () => {
  return (
    <Slide
      heading={
        <div className="w-full z-10">
          <h1 className="font-sans text-8xl">OUR TEAM</h1>
        </div>
      }
      mainContent={
        <div className="flex">
          <div className="z-10 flex-1 flex flex-col gap-4 ">
            <h1 className="font-sans text-5xl text-center tracking-wider text-gray-500 hover:text-black">
              JOSEPH RAY
            </h1>
            <h1 className="font-sans text-5xl tracking-wider text-gray-500 hover:text-black">
              MICHAEL WALKER
            </h1>
            <h1 className="font-sans text-5xl text-end tracking-wider text-gray-500 hover:text-black">
              DIANA CAMPBELL
            </h1>
            <h1 className="font-sans text-5xl tracking-wider text-gray-500 hover:text-black">
              LORI HOUSTON
            </h1>
            <h1 className="font-sans text-5xl text-end tracking-wider text-gray-500 hover:text-black">
              THERESA FULLER
            </h1>
          </div>
          <div className="flex flex-1 justify-center gap-4">
            <div>
              <Image
                src={"/passport.jpg"}
                width={200}
                height={200}
                alt={"profile-picture"}
                objectFit="cover"
              />
            </div>
            <div>
              <h2>MICHAEL WALKER</h2>
              <h6 className="text-sm text-gray-600 mb-3">team lead designer</h6>
              <p>
                I am the chief designer
                <br /> and supervise the rest
                <br />
                of the guys. Together
                <br />
                we create promising
                <br />
                and useful products
                <br />
                for our customers.
              </p>
            </div>
          </div>
        </div>
      }
      prevPage={"What we do"}
      nextPage={"Contact us"}
      nextPageUrl={"/contactUs"}
      prevPageUrl={"/whatWeDo"}
    />
  );
};

export default OurTeam;
