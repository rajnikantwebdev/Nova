import { BsArrowRight } from "react-icons/bs";
import HeroFooter from "./HeroFooter";
import Slide from "./Slide";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="gradient-overlay" />
      <Slide
        heading={
          <div className="w-full z-10">
            <h1 className="font-sans text-8xl">WE CREATE</h1>
            <h1 className="font-sans text-8xl text-center">BEST DIGITAL</h1>
            <h1 className="font-sans text-8xl">PRODUCTS.</h1>{" "}
          </div>
        }
        nextPage={"Who we are"}
        mainContent={
          <div className="flex justify-between items-center">
            <button>
              Discuss <br />
              The Project
            </button>
            <Link href={"/introduction"} className="flex gap-2 items-center">
              <BsArrowRight />
              <span>Who we are</span>
            </Link>
          </div>
        }
        mainPageFooter={<HeroFooter />}
      />
    </>
  );
};

export default Hero;
