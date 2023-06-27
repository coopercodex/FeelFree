import './frontpage.css'
import requests from '../../requests'

import React, { useEffect, useState } from 'react'

export const FrontPage = () => {
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

  return (
    <div className='frontpage-container'>
      <h1>Just In</h1>
        <h2>{movies.title || movies.name || movies.original_name}</h2>
      <div className='justin-container'>
        <img className='justin-picture' src={`${baseUrl}${movies?.poster_path || movies?.backdrop_path }`} alt={movies?.name} />
        <p>{movies.overview}</p>
      </div>
    </div>
  )
}
