import React from "react";

import { useContext } from "react";
import { Context } from "./Context";

import { motion } from "framer-motion";

export default function MovieCard({ movie }) {
  const { watchlist, watched, addToWatchlist, addToWatched } =
    useContext(Context);

  let storedMovie = watchlist.find((o) => o.imdbID === movie.imdbID);
  let storedMovieWatched = watched.find((o) => o.imdbID === movie.imdbID);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className='result-card'>
        <div className='poster-wrapper'>
          {movie.Poster ? (
            <img src={`${movie.Poster}`} alt={`${movie.Title} Poster`} />
          ) : (
            <div className='filler-poster'></div>
          )}
        </div>

        <div className='info'>
          <div className='header'>
            <h3 className='title'>{movie.Title}</h3>
            <h4 className='release-date'>{movie.Year}</h4>
          </div>

          <div className='controls'>
            <button
              className='btn'
              disabled={watchlistDisabled}
              onClick={() => addToWatchlist(movie)}
            >
              Add to Watchlist
            </button>

            <button
              className='btn'
              disabled={watchedDisabled}
              onClick={() => addToWatched(movie)}
            >
              Add to Watched
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
