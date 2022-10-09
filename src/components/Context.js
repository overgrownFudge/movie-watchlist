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

    return (
        <Context.Provider value={{
            watchlist,
            watched,
            addToWatchlist,
            removeFromWatchlist,
            emptyWatchlist,
            addToWatched,
            removeFromWatched
        }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }