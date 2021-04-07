import React from 'react'

const SearchResults = ({ params }) => {
    const { keyword } = params
    return <>
        Resultado: {keyword}
    </>
}

export default SearchResults
