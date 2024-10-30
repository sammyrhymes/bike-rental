import React from 'react'
import BikeList from './components/BikeList'

export default function Bikes() {
    const url="http://localhost:4500/bikes"

  return (
    <div>
        <div className='flex flex-col sm:flex-row justify-between items-center'>
        <p className='text-xl'>Search from a rack of bikes</p>
            <form className='p-4'>
                <input className='p-2 border outline-none rounded-l-xl border-accent' type="text" placeholder='Trek'/>
                <button className='p-2 rounded-r-xl border-y border-accent bg-accent' type="submit">search</button>
            </form>
        </div>
        <BikeList url={url} />
    </div>
  )
}
