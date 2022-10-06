import React, { useState } from 'react'

export default function SearchMovies() {

  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const onChange = event => {
    event.preventDefault()

    setSearch(event.target.value)
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
          <div className='add-movie'>
            <div className='input-wrapper'>
              <input
                type='text'
                placeholder='Find a movie'
                vlaue={search}
                onChange={onChange}
              />
              <input
                type='button'
                value='search'
                onClick={onClick}
              />
            </div>

            {results.length > 0 && (
              <ul className='results'>
                {results.map((movie) => (
                  <li>{movie.Title}</li>
                ))}
              </ul>
            )}

          </div>
        </div>

      </div>
    </>
  )
}
