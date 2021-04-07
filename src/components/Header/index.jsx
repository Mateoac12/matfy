import React from 'react'
import logo from 'logo.svg'
import SearchBar from 'components/SearchBar'
import { Link } from 'wouter'

import './index.scss'

const Header = () => {
    return <>
        <header className="header">
            <Link to="/">
                <img
                    alt="logo de matfy"
                    className="header__logo"    
                    src={logo}
                />
            </Link>
            <SearchBar
                placeholder={"Search gifs here..."}
            />
        </header>
    </>
}

export default Header