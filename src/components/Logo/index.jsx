import React from 'react'
import { Link } from 'wouter'
import logo from 'logo.svg'

const Logo = () => {
    return <Link to="/">
        <img
            alt="logo de matfy"
            className="header__logo"    
            src={logo}
        />
    </Link>
}

export default Logo