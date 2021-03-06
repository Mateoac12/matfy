import React from 'react'
import { useLocation } from 'wouter'
import './index.scss'
import { RATING_TYPE, LANG_TYPE } from 'config/searchConfig'
import { useForm } from './hook'

const SearchBar = ({ placeholder = ""} = {}) => {
    // eslint-disable-next-line
    const [_, setLocation] = useLocation()

    const { keyword, rating, lang, updateKeyword, updateRating, updateLanguage } = useForm()

    const handleSubmit = (e) => {
        e.preventDefault()
        setLocation(`/search/${keyword}/${rating}/${lang}`)
    }
    
    const handleChange = (e) => {
        updateKeyword(e.target.value)
    }

    const handleRatingChange = (e) => {
        updateRating(e.target.value)
    }

    const handleLanguageChange = (e) => {
        updateLanguage(e.target.value)
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
        <select onChange={handleLanguageChange} className="searchbar__select">
            <option disabled>Language</option>
            { LANG_TYPE.map(singleLang => <option className="searchbar__option" key={singleLang}>{singleLang}</option>) }
        </select>
        <button className="searchbar__button">SEARCH</button>
    </form>
}

export default React.memo(SearchBar)