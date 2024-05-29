import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const ImageCard = ({ src, title, height }) => {
  return (
    <div className={`flex flex-col min-w-52 ${height}`}>
      <div className="w-full relative flex-grow">
        <Image src={src} layout="fill" objectFit="cover" alt="picture" />
      </div>
      <div className="w-full flex bg-white items-center justify-between p-4">
        <span className="font-sans text-lg">{title}</span>
        <button className="bg-black p-1 rounded-full">
          <GoArrowUpRight className="text-white w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
