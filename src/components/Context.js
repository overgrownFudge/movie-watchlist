import React, { useState } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {
    const [watchlist, setWatchlist] = useState([])
    const [watched, setWatched] = useState([])


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