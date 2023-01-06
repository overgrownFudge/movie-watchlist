import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import WatchList from "./main/WatchList";
import WatchedMovies from "./main/WatchedMovies";
import SearchMovies from "./main/SearchMovies";
import Home from "./main/Home";

export default function App() {
  return (
    <div className='App'>
      <div>
        <Header />
        <Routes>
          <Route path='/watchlist' element={<WatchList />} />

          <Route path='/watched' element={<WatchedMovies />} />

          <Route path='/search' element={<SearchMovies />} />
        </Routes>
      </div>
    </div>
  );
}
