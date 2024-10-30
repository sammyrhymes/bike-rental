import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="relative  ">
          <div className="z-20 p-4 sm:flex">
            <div className="sm:w-1/2 flex flex-col gap-5 justify-between items-start">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent">Discover the Freedom of Two Wheels!</h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-secondary">Rent a Bike Today and Explore the Great Outdoors.</h2>
              <Link to={'/bikes'} className="p-2 bg-accent rounded hover:bg-highlight text-primary shadow transition duration-500">Browse Our Bikes</Link>
            </div>
            <div className="hidden sm:block  sm:w-1/2">
              <img src="./public/hero-img.jpg" alt="" />
            </div>
          </div>
      </div>
    </>

  )
}
