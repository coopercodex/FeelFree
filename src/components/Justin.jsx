import './justin.css'
import requests from '../../requests'

import React, { useEffect, useState } from 'react'

export const Justin = () => {
  const [movies, setMovies] = useState([])
  const baseUrl = "https://image.tmdb.org/t/p/original"


  const getData = () => {
    fetch(requests.horrorMovies)
      .then(res => res.json())
      .then(data => setMovies(data.results[Math.floor(Math.random() * data.results.length - 1)]))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])
  console.log(movies)
  return (
    <div className='frontpage-container'>
      {/* <h1 className='justin-title'>Just In</h1> */}
      <h1>{movies.title || movies.name || movies.original_name}</h1>
      <div className='justin-container'>
        <img className='justin-picture' src={`${baseUrl}${movies.backdrop_path || movies.poster_path}`} alt={movies?.name} />
        <p className='justin-overview'>{movies.overview}</p>
      </div>
      <div className='divider'>
      </div>
    </div>
  )
}
