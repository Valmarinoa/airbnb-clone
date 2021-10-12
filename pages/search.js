import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
  return (
    <div>
      <Header />
      <main className="flex">
        <section>
          <p className="text-sm">300+ Stays for X amount of guests</p>
          <h1 className="text-2xl font-semibold mt-2 mb-3">
            Stays in Colombia
          </h1>
          <div>
            <p className="px-3 py-1 border rounded-full text-center cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform durat-100 ease-out">
              Cancellation Flexibility
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
