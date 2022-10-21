import React from 'react'
import { Link } from 'react-router-dom'

import { FaSearch } from 'react-icons/fa'

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">MyTop10</Link>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to={"/watchlist"}>Watchlist</Link>
                        </li>
                        <li>
                            <Link to={"/watched"}>Watched</Link>
                        </li>
                        <li>
                            <Link to={"/search"} className="btn btn-main">Search | <FaSearch className='seach-icon'/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
