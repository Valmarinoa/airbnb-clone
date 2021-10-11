import Image from "next/image";
import banner_bg from "../components/media/banner_bg.png";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:[600px] 2xl:[700px] bg-fixed">
      <Image src={banner_bg} layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm lg:text-md">Not sure where to go? Perfect.</p>
        <button className="bg-white text-purple-500 text-sm lg:text-md font-bold my-3 px-10 py-3 rounded-full shadow-md hover:shadow-xl active:scale-80 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
