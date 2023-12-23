"use client"
import { useState } from "react"
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

function Search() {
    let [active, setActive] = useState(false)
    return (
        <div className="search">
            <Link href="#"><FaSearch onClick={() => setActive(true)} /></Link>

            <div className={`search-area ${active ? 'active' : ''}`}>
                <form action="">
                    <input type="text" name="searchItem" placeholder="Search Here..." />
                    <button type="submit">
                        <FaSearch />
                    </button>
                </form>
            </div>
            <div className={`overflow ${active ? 'active' : ''}`} onClick={() => setActive(false)}></div>
        </div>
    )
}

export default Search