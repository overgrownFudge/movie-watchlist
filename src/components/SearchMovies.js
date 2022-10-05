import React, {useState} from 'react'

export default function SearchMovies() {

  const [search, setSearch] = useState('')

  const onChange = event => {
    event.preventDefault()

    setSearch(event.target.value)
  }

  return (
    <>
    <div className='search--page'>
      <div className='container'>
        <div className='add-movie'>
          <div className='input-wrapper'>
            <input 
            type='text'
            placeholder='Search for a movie'
            vlaue= {search} 
            onChange={onChange}
            />
            <input 
            type='button'
            value='search'
            />
          </div>
        </div>
      </div>

    </div>
    </>
  )
}
