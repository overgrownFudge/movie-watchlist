import React, { useContext } from 'react'
import MovieCard from './MovieCard';
import { Context } from './Context'

export default function WatchList() {
  const { watchlist } = useContext(Context)

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>

          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} type="watchlist" />
            ))}
          </div>
        ) : (
                    // ADD IMAGE MAYBE?



                    
          <h2 className="no-movies">No movies on your list! <br/> Search some!</h2>
        )}
      </div>
    </div>
  );
}
