import React, { useContext } from 'react'
import MovieCard from './MovieCard';
import { Context } from './Context'

export default function Watched() {
  const { watched } = useContext(Context)

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>

          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Watch some!</h2>
        )}
      </div>
    </div>
  );
}
