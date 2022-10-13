import React, { useContext } from 'react'
import { FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa'

import { Context } from './Context'

export default function MovieControls(movie, type) {
    const { removeFromWatchlist,
        addToWatchlist,
        addToWatched,
        removeFromWatched } = useContext(Context)

    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                    <button className="ctrl-btn" onClick={() => addToWatched(movie)}>
                        <i className="fa-fw far fa-eye"><FaEye /></i>
                    </button>

                    <button
                        className="ctrl-btn"
                        onClick={() => removeFromWatchlist(movie.imdbID)}
                    >
                        <i className="fa-fw fa fa-times"><FaTimes /></i>
                    </button>
                </>
            )}

            {type === "watched" && (
                <>
                    <button className="ctrl-btn" onClick={() => addToWatchlist(movie)}>
                        <i className="fa-fw far fa-eye-slash"><FaEyeSlash /></i>
                    </button>

                    <button
                        className="ctrl-btn"
                        onClick={() => removeFromWatched(movie.imdbID)}
                    >
                        <i className="fa-fw fa fa-times"><FaTimes /></i>
                    </button>
                </>
            )}
        </div>
    );
}
