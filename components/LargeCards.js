import Image from "next/dist/client/image";

function LargeCards({ image, title, description, button_text }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl w-64 mb-2">{title}</h3>
        <p>{description}</p>
        <button className="text-sm bg-gray-900 text-white mt-5 px-4 py-2 rounded-lg cursor-pointer hover:scale-105 transition transform duration-200">
          {button_text}
        </button>
      </div>
    </section>
  );
}

export default LargeCards;
