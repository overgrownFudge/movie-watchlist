import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <>
            <header>
                <div className='nav'>
                    <h2 className="brand">Find your film</h2>
                    <div>
                        <ul className='nav--links'>
                            <li>
                                <Link to={"/"}>Search</Link>
                            </li>
                            <li>
                                <Link to={"/watchlist"}>Watchlist</Link>
                            </li>
                            <li>
                                <Link to={"/watched"}>Watched</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}
