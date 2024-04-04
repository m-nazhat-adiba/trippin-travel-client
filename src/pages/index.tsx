import Button from "@/components/buttons";
import DestinationCard from "@/components/cards/DestinationCard";
import ProductCard from "@/components/cards/ProductCard";
import PromoCard from "@/components/cards/PromoCard";
import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useGetCategory } from "@/api/useGetCategory";
import { ReactNode, useEffect } from "react";
import { useGetActivities } from "@/api/useGetActivity";
import { useGetPromo } from "@/api/useGetPromo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const category = useGetCategory();
  const activites = useGetActivities();
  const promos = useGetPromo();

  const destinationMapper = (): ReactNode => {
    if (category.loading) {
      return <div>Loading...</div>;
    } else if (category.error) {
      return <div>Error: {category.error.message}</div>;
    } else {
      return category.data.map((item, key) =>
        key < 5 ? <DestinationCard data={item} key={key} /> : null
      );
    }
  };

  const activityMapper = (): ReactNode => {
    if (activites.loading) {
      return <div>Loading...</div>;
    } else if (activites.error) {
      return <div>Error: {activites.error.message}</div>;
    } else {
      return activites.data.map((item, key) =>
        key < 8 ? <ProductCard data={item} key={key} /> : null
      );
    }
  };

  const promoMapper = (): ReactNode => {
    if (promos.loading) {
      return <p>Loading...</p>;
    } else if (promos.error) {
      return <p>Error: {promos.error.message}</p>;
    } else {
      return promos.data.map((item, key) =>
        key < 4 ? <PromoCard data={item} key={key} /> : null
      );
    }
  };

  useEffect(() => {}, []);

  return (
    <main
      className={`flex gap-40 min-h-screen w-full max-w-screen flex-col items-center justify-between overflow-x-hidden ${inter.className}`}
    >
      <header className="w-full min-h-screen relative flex flex-col">
        {/* Hero Background */}
        <div className="bg-blue-900 opacity-40 absolute w-full h-screen top-0 -z-30" />
        <Image
          src="/Hero.jpg"
          className=" w-full h-screen object-cover absolute -z-40 top-0"
          alt="hero"
          width={1920}
          height={1116}
        />
        {/* Hero */}
        <div className="container mx-auto">
          <Navbar />
        </div>
        <div className="container mx-auto h-[calc(100vh_-_72px)] px-64 pb-20 w-full flex flex-col justify-center items-center text-white">
          <h1 className="text-6xl text-center mb-6">
            Exploring The Wonders of The World
          </h1>
          <p className="text-center mb-14">
            Join us on epic adventures as we journey around the world visiting
            some of the most breathtaking and iconic destination on the planet
          </p>

          <form className="w-full mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                className="rounded-full text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="container mx-auto w-full h-32 bg-white flex items-center justify-between px-20">
          <div className="text-nowrap">
            <p>Follow us on:</p>
          </div>
          <div className="w-fit flex items-center gap-8">
            <img src="/Trivago.png" alt="airbnb" className="h-8 w-auto" />
            <img src="/Skyscanner.png" alt="airbnb" className="h-8 w-auto" />
            <img src="/Airbnb.png" alt="airbnb" className="h-20 w-auto" />
            <img src="/Garuda.png" alt="airbnb" className="h-24 w-auto pb-3" />
          </div>
        </div>
      </header>

      <section className="container mx-auto flex flex-col justify-between px-20">
        <div className="flex justify-between mb-16 gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-medium">
              Top Destination Around The World
            </h2>
            <p>Where do you want to go?</p>
          </div>
          <div className="h-fit w-1/4">
            <Button variant="primary">See All Destination</Button>
          </div>
        </div>
        <div className="flex justify-between">{destinationMapper()}</div>
      </section>

      <section className="container mx-auto flex px-20 items-center justify-between py-10">
        <figure className="max-w-[45%]">
          <Image src="/Why-Us.jpg" height={1000} width={1000} alt="whyus" />
        </figure>

        <article className="flex flex-col justify-center gap-2 max-w-[50%]">
          <h2 className="text-4xl mb-4">Why Us?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            culpa commodi nemo repellat ipsam tempore natus. Cupiditate libero
            doloribus optio repudiandae pariatur asperiores, porro nesciunt sit
            eos ut non qui?
          </p>
          <ul className="list-disc list-inside">
            <li>Affordable</li>
            <li>Responsive</li>
            <li>Comfortable</li>
            <li>Satisfying</li>
          </ul>
        </article>
      </section>

      <section className="container mx-auto flex flex-col px-20 w-full">
        <div className="flex flex-col mb-16 gap-4">
          <h2 className="text-4xl font-mendium">Most Popular Tours</h2>
          <p className="max-w-[50%]">
            Make unforgettable memories with exclussive tours, VIP access, small
            groups and perfectly
          </p>
        </div>
        <div className="grid grid-cols-4 gap-8">{activityMapper()}</div>
      </section>

      <section className="container mx-auto px-20 grid">
        <h2 className="text-4xl font-medium mb-16">
          Our Fantastic Promotion For Our Traveller
        </h2>
        <div className="grid grid-cols-4 gap-8">{promoMapper()}</div>
      </section>

      <footer className="container mx-auto">
        <Footer />
      </footer>
    </main>
  );
}
