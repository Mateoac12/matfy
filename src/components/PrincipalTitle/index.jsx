import React from 'react'
import './index.scss'

const PrincipalTitle = ({ title = "", keyword = "" } = {}) => {
    return <h1 className="principaltitle">{title} {keyword}</h1>
}

export default PrincipalTitle