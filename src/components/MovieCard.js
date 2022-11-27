import React from "react";
import MovieControls from "./MovieControls";

import { motion } from "framer-motion";

export default function MovieCard({ movie, type }) {
  return (
    <div className='movie-card'>
      <div className='overlay'></div>

      <img src={`${movie.Poster}`} alt={`${movie.Title} Poster`} />

      <MovieControls type={type} movie={movie} />
    </div>
  );
}
