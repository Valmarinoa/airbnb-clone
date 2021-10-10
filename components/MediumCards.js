import Image from "next/image";

function MediumCards({ image, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image
          src={image}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <div>
        <h3 className="mt-3 text-xl">{title}</h3>
      </div>
    </div>
  );
}

export default MediumCards;
