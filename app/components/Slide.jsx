"use client";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Slide = ({
  heading,
  prevPage,
  nextPage,
  mainContent,
  mainPageFooter,
  nextPageUrl,
  prevPageUrl,
}) => {
  const pathName = usePathname();
  console.log("path: ", pathName);

  return (
    <section
      className={`${
        pathName === "/contactUs" && "background"
      } flex flex-col justify-between flex-grow py-6`}
    >
      {heading}
      <div className={`${pathName === "/whatWeDo" && "-mx-20"} main`}>
        {mainContent}
      </div>
      {pathName !== "/" ? (
        <div className="footer z-10 flex justify-between items-center">
          <Link
            href={prevPageUrl}
            className={`${
              pathName === "/contactUs" && "text-white"
            } prev flex items-center gap-2`}
          >
            <HiOutlineArrowLongLeft />
            {prevPage}
          </Link>
          {pathName !== "/contactUs" ? (
            <Link
              href={nextPageUrl}
              className={`${
                pathName === "/contactUs" && "text-white"
              } next flex items-center gap-2`}
            >
              {nextPage}
              <BsArrowRight />
            </Link>
          ) : (
            <p className="text-white text-sm">©KRUG 2024</p>
          )}
        </div>
      ) : (
        mainPageFooter
      )}
    </section>
  );
};

export default Slide;
