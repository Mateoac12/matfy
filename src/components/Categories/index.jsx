import React from 'react'
import Category from 'components/Category'


const Categories = ({ categories }) => {
    return <>
    { categories.map(category => <Category title={category} key={category} />)}
    </>
}

export default Categories