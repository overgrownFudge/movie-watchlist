import React, { useState, useEffect } from 'react'
import ResultCard from './ResultCard'

export default function SearchMovies() {

  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])


  useEffect(() => {
    document.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        console.log('Enter key clicked')
      }

    })

  }, [])

  const onChange = event => {
    event.preventDefault()

    setSearch(event.target.value.trim().toLowerCase())
  }

  const onClick = () => {
    fetch(`https://www.omdbapi.com/?page=1&s=${search}&apikey=ce1cd3c7`)
      .then(res => res.json())
      .then(data => {
        search.length > 2 && !data.errors ? setResults(data.Search) : setResults([])
      })
  }


  return (
    <>
      <div className='search--page'>
        <div className='container'>
          <div className='add-content'>
            <div className='input-wrapper'>
              <input
                type='text'
                placeholder='Find a movie'
                vlaue={search}
                onChange={onChange}
              />
            </div>

            <input
              type='button'
              value='search'
              onClick={onClick}
            />

            {results.length > 0 && (
              <ul className='results'>
                {results.map((movie) => (
                  <li key={movie.imdbID}>
                    <ResultCard movie={movie} />
                  </li>
                ))}
              </ul>
            )}

          </div>
        </div>

      </div>
    </>
  )
}
