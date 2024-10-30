import { useState, useEffect  } from "react"
import BikeCard from "./BikeCard"

export default function BikeList() {
    const [ bikes, setBikes ] = useState()
    useEffect(() => {
      fetch('http://localhost:4500/bikes')
       .then(res => res.json())
       .then(data=>setBikes(data))
     })
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 text-secondary lg:grid-cols-3  xl:grid-cols-4 gap-8 md">
        <BikeCard bikes={bikes} />
      </div>
    )
}
