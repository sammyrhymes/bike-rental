import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="relative ">
          <div className="z-20 p-4 sm:flex">
            <div className="flex flex-col items-start justify-between gap-5 sm:w-1/2">
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl text-accent">Discover the Freedom of Two Wheels!</h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-secondary">Rent a Bike Today and Explore the Great Outdoors.</h2>
              <Link to={'/bikes'} className="p-2 transition duration-500 rounded shadow bg-accent hover:bg-highlight text-primary">Browse Our Bikes</Link>
            </div>
            <div className="hidden sm:block sm:w-1/2">
              <img src="/hero-img.jpg" alt="" />
            </div>
          </div>
      </div>
    </>

  )
}
