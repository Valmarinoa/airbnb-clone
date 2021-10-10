import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCards from "../components/SmallCards";
import MediumCards from "../components/MediumCards";
import LargeCards from "../components/LargeCards";
import Footer from "../components/Footer";

export default function Home({ exploreData, mediumCardsData }) {
  return (
    <div className="">
      <Head>
        <title>Valentina's Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6 ">
          <h2 className="text-4xl font-semibold pb-5">Explore near by:</h2>
          {/*Pull API data from cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCards
                key={img}
                location={location}
                image={img}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section className="pt-6 ">
          <h2 className="text-4xl font-semibold pb-5">Live anywhere:</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {mediumCardsData?.map(({ img, title }) => (
              <MediumCards key={img} image={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCards
          image="http://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlist curated by Airbnb"
          button_text="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const mediumCardsData = await fetch("https://links.papareact.com/zp1").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      mediumCardsData,
    },
  };
}
