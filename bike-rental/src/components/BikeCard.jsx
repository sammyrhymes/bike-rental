

export default function BikeCard({bikes}) {
  return (
    <>
        {bikes ? bikes.map((bike) =>
          <a key={bike.id} href={`http://localhost:5173/bike/${bike.id}`}>
              <div className="relative bg-white border rounded-lg" >
                <img src={bike.image_url} alt={bike.brand + bike.model}/>
                <div className="absolute overflow-hidden text-xs rounded top-2 right-2 text-primary">
                    {(bike.availability === true) ? <p className="p-1 bg-accent ">available</p>:
                        <p className="p-1 bg-red-400 ">taken</p>
                    }
                    
                </div>
                <div className="flex flex-col gap-2 px-4 py-4 ">
                  <h1 className="text-lg font-bold tracking-wide text-accent">{bike.brand}</h1>
                  <p className="text-xs ">{bike.model}</p>
                   <div className="flex items-center justify-between">
                      <p className="">ksh {bike.price_per_hour}<span className="text-xs font-bold text-accent ">/hr</span></p>
                      <p className="px-2 text-lg text-white transition duration-500 rounded-full bg-accent hover:bg-highlight">+</p>
                   </div>
                </div>
  
              </div>
            </a>) : <div>
                  <p>..loading...</p>
              </div>

        }
    </>
  )
}
