import React from "react";
import MovieControls from "./MovieControls";

import { motion } from "framer-motion";

export default function MovieCard({ movie, type }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className='movie-card'>
        <div className='overlay'></div>

        <img src={`${movie.Poster}`} alt={`${movie.Title} Poster`} />

        <MovieControls type={type} movie={movie} />
      </div>
    </motion.div>
  );
}
