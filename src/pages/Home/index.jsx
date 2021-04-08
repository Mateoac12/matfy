import React, { Suspense } from 'react'
import GifsTrending from 'components/GifsTrending'
import ListOfTrendings from 'components/ListOfTrendings'
import LastSearches from 'components/LastSearches'
import Loading from 'components/Loading'
import { UseNearScreen } from 'hooks/useNearScreen'

const Home = () => {
    const { isNear, elementRef } = UseNearScreen()

    return <>
        <Suspense fallback={<Loading />}>
            <GifsTrending />
            <LastSearches />
            <section ref={elementRef} className="listOfTrendings">
                { isNear ? <ListOfTrendings /> : null }
            </section>
        </Suspense>
    </>
}

export default Home