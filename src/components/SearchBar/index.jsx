import React, { useState } from 'react'
import { useLocation } from 'wouter'
import './index.scss'

const SearchBar = ({ placeholder = ""} = {}) => {
    const [keyword, setKeyword] = useState("")
    const [location, setLocation] = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault()
        setLocation(`/search/${keyword}`)
    }

    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    return <form onSubmit={handleSubmit} className="searchbar">
        <input
            className="searchbar__input"
            type="text"
            value={keyword}
            placeholder={placeholder}
            onChange={handleChange}
        />
        <button className="searchbar__button">SEARCH</button>
    </form>
}

export default SearchBar