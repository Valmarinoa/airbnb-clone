import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <Header />
      <main className="flex">
        <section>
          <p className="text-sm">300+ Stays for X amount of guests</p>
          <h1 className="text-2xl font-semibold mt-2 mb-3">
            Stays in Colombia
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Rooms & Beds</p>
            <p className="button">Price</p>
            <p className="button">More Filters..</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
