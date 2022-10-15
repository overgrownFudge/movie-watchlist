import React from 'react'
import { Routes, Route } from "react-router-dom"

import Header from './components/Header';
import WatchList from "./components/WatchList"
import WatchedMovies from './components/WatchedMovies';
import SearchMovies from './components/SearchMovies';

export default function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<WatchList />} />

          <Route path="/watched" element={<WatchedMovies />} />

          <Route path="/search" element={<SearchMovies />} />
        </Routes>
      </div>
    </div>
  );
}
