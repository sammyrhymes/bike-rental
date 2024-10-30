import { useEffect, useState } from 'react'

export default function useFetch(url) {
    const [ data, setData ] = useState()
    const [ error, setError ] = useState()

    useEffect(() => {
      if (!url) return; // If URL is missing, do nothing

      // Clear previous data on URL change
      setData(null);
      setError(null);

        fetch(url)
         .then(res => res.json())
         .then(dumb => setData(dumb))
         .catch(err => setError(err))
       }, [url])

  return (
    {data, error, setData}
  )
}
