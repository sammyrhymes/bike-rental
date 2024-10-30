
import BikeList from "./components/BikeList";
import Hero from "./components/Hero";

export default function Home() {
  const url="http://localhost:4500/bikes"
  return <>
    <Hero />
    <BikeList url={url} />
  </>
}
