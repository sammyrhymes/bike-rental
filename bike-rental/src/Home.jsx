
import BikeList from "./components/BikeList";
import Hero from "./components/Hero";
import Team from "./components/Team";

export default function Home() {
  const url="http://localhost:4500/bikes?_start=10&_limit=4"
  return <>
    <Hero />
    <h2 className="text-3xl font-bold text-center mb-6">Checkout Our Bikes</h2>
    <BikeList url={url} />
    <Team />
  </>
}
