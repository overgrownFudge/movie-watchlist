import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {
    const [watchlist, setWatchlist] = useState([])
    const [watched, setWatched] = useState([])

    useEffect(() => {
        setWatchlist(localStorage.getItem("watchlist")
            ? JSON.parse(localStorage.getItem("watchlist"))
            : [])

        setWatched(localStorage.getItem("watched")
            ? JSON.parse(localStorage.getItem("watched"))
            : [])
    }, [])

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(watchlist))

        localStorage.setItem('watched', JSON.stringify(watched))
    }, [watchlist, watched])

    function addToWatchlist(newMovie) {
        setWatchlist(prevItems => [...prevItems, newMovie])
    }

    function removeFromWatchlist(id) {
        setWatchlist(prevItems => prevItems.filter(item => item.imdbID !== id))
    }

    function emptyWatchlist() {
        setWatchlist([])
    }

    function addToWatched(newMovie) {
        setWatched(prevItems => [...prevItems, newMovie])
    }

    function removeFromWatched(id) {
        setWatched(prevItems => prevItems.filter(item => item.imdbID !== id))
    }

    function moveToWatchlist(movie) {
        setWatchlist(prevItems => [...prevItems, movie])
        setWatched(prevItems => prevItems.filter(item => item.imdbID !== movie.imdbID))
    }

    function moveToWatched(movie) {
        setWatched(prevItems => [...prevItems, movie])
        setWatchlist(prevItems => prevItems.filter(item => item.imdbID !== movie.imdbID))
    }

    return (
        <Context.Provider value={{
            watchlist,
            watched,
            addToWatchlist,
            removeFromWatchlist,
            emptyWatchlist,
            addToWatched,
            removeFromWatched,
            moveToWatchlist,
            moveToWatched
        }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }