import React from 'react'
import { Link } from 'wouter'
import './index.scss'

const Category = ({ title }) => {
    return <Link href={`/search/${title}`} className="category">{title}</Link>
}

export default Category