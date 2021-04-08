import React, { Suspense } from 'react'
import GifsTrending from 'components/GifsTrending'
import ListOfTrendings from 'components/ListOfTrendings'
import LastSearches from 'components/LastSearches'
import Loading from 'components/Loading'

const Home = () => {

    return <>
        <Suspense fallback={<Loading />}>
            <GifsTrending />
            <LastSearches />
            <ListOfTrendings />
        </Suspense>
    </>
}

export default Home