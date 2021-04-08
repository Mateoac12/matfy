import React from 'react'
import GifsTrending from 'components/GifsTrending'
import ListOfTrendings from 'components/ListOfTrendings'
import LastSearches from 'components/LastSearches'

const Home = () => {
    return <>
        <GifsTrending />
        <LastSearches />
        <ListOfTrendings />
    </>
}

export default Home