import React, { useEffect } from 'react'

export default function useFetch(url) {
  return (
    useEffect(() => {
        fetch(url)
         .then(res => res.json())
         .catch(err => console)
       }, [url])
  )
}
