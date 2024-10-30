

export default function BikeCard({bikes}) {
  return (
    <>
        {bikes ? bikes.map((bike) =>
          <a key={bike.id} href={`http://localhost:4500/bikes/${bike.id}`}>
              <div className="relative border bg-white rounded-lg" >
                <img src={bike.image_url} alt={bike.brand + bike.model}/>
                <div className=" absolute top-2 right-2 rounded overflow-hidden text-primary text-xs">
                    {(bike.availability === true) ? <p className="p-1 bg-accent ">available</p>:
                        <p className="p-1 bg-red-400 ">taken</p>
                    }
                    
                </div>
                <div className=" py-4 px-4 flex flex-col gap-2">
                  <h1 className="text-accent text-lg tracking-wide font-bold">{bike.brand}</h1>
                  <p className=" text-xs">{bike.model}</p>
                   <div className="flex justify-between items-center">
                      <p className="">ksh {bike.price_per_hour}<span className="text-xs font-bold text-accent ">/hr</span></p>
                      <p className="text-lg bg-accent hover:bg-highlight transition duration-500 px-2 rounded-full text-white">+</p>
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
