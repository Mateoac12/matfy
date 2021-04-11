import React, { useState } from 'react'
import { useLocation } from 'wouter'
import './index.scss'
import { RATING_TYPE } from 'config/searchConfig'

const SearchBar = ({ placeholder = ""} = {}) => {
    const [keyword, setKeyword] = useState("")
    const [rating, setRating] = useState('g')
    const [location, setLocation] = useLocation()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setLocation(`/search/${keyword}/${rating}`)
    }
    
    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    const handleRatingChange = (e) => {
        setRating(e.target.value)
    }

    return <form onSubmit={handleSubmit} className="searchbar">
        <input
            className="searchbar__input"
            type="text"
            value={keyword}
            placeholder={placeholder}
            onChange={handleChange}
        />
        <select onChange={handleRatingChange} className="searchbar__select">
            <option disabled>Rating</option>
            { RATING_TYPE.map(singleRating => <option className="searchbar__option" key={singleRating}>{singleRating}</option>) }
        </select>
        <button className="searchbar__button">SEARCH</button>
    </form>
}

export default React.memo(SearchBar)