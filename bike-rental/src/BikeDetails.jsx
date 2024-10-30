import { useParams } from "react-router-dom"
import BikeList from "./components/BikeList"
import useFetch from "./lib/utils/useFetch"


export default function BikeDetails() {

    const { id } = useParams()
    const { data: bike, error} = useFetch('http://localhost:4500/bikes/' + id)
    const url = 'http://localhost:4500/bikes/'



  return (
    <div className="text-sm text-secondary">
        {bike && <div className="justify-between gap-8 transition duration-500 sm:flex" key={bike.id}>
            <div className=" sm:w-3/5">
                <img src={bike.image_url} alt={bike.model} />
                </div>    
            <div className="flex flex-col justify-between transition duration-500 lg:gap-8 lg:justify-normal sm:w-2/5">
                <p className="text-3xl md:text-4xl lg:text-5xl text-accent">{bike.brand}</p>
                <p className="text-md md:text-xl lg:text-2xl text-highlight">{bike.model}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet iusto, aut tempore, molestias cum atque quas amet quae reprehenderit porro rem assumenda? Accusamus dolorum nisi eveniet vel voluptatum? Sint, deleniti.</p>
                <p className="text-xl md:text-3xl lg:text-5xl text-accent">ksh {bike.price_per_hour}<span className="text-lg text-secondary">/hr</span></p>
                <a className="w-full p-2 text-center transition duration-500 text-primary bg-accent hover:bg-highlight" href="#">RENT</a>
            </div>
        </div>}
        <div>
            <h1 className="py-2 text-lg">Similar Bikes</h1>
            <BikeList url={url} />
        </div>
    </div>
  )
}
