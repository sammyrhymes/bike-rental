
import BikeList from "./components/BikeList";

export default function Home() {
  const url="http://localhost:4500/bikes"
  return <>
    <BikeList url={url} />
  </>
}
