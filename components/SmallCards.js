import Image from "next/image";

function SmallCards({ image, location, distance }) {
  return (
    <div className="flex hover:bg-gray-100 items-center m-3 space-x-4 rounded-xl hover:scale-105 transition transform duration-200 cursor-pointer">
      <div className="relative h-16 w-16">
        <Image
          src={image}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <div className="text-sm">
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCards;
