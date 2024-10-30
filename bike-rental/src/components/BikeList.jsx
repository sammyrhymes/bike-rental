import BikeCard from "./BikeCard"
import useFetch from "../lib/utils/useFetch"

export default function BikeList({ url }) {
 
  console.log(url)

    const {data: bikes, setData: setBikes, error } = useFetch(url)
    return (
      <div className="grid grid-cols-1 gap-2 lg:gap-4 sm:grid-cols-2 text-secondary lg:grid-cols-3 2xl:grid-cols-4 md">
        <BikeCard bikes={bikes} error={error} />
      </div>
    )
}
