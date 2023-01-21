import React, { useContext } from "react";
import MovieCard from "../components/MovieCard";
import { Context } from "../components/Context";
import exploreIcon from "../../src/images/explore-Icon.png";

export default function WatchList() {
  const { watchlist } = useContext(Context);

  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'>My Watchlist</h1>

          <span className='count-pill'>
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className='movie-grid'>
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} type='watchlist' />
            ))}
          </div>
        ) : (
          <div className='no-movies'>
            <h2 className='no-movies'>
              No movies on your list! <br /> Search some!
            </h2>
            <img src={exploreIcon} alt='No movies' />
          </div>
        )}
      </div>
    </div>
  );
}
