import React from 'react'
import SearchBar from 'components/SearchBar'

import './index.scss'
import Logo from 'components/Logo'

const Header = () => {
    return <>
        <header className="header">
            <Logo />
            <SearchBar
                placeholder={"Search gifs here..."}
            />
        </header>
    </>
}

export default Header