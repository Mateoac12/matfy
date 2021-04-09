import React, { Suspense } from 'react'
import GifsTrending from 'components/GifsTrending'
import ListOfTrendings from 'components/ListOfTrendings'
import LastSearches from 'components/LastSearches'
import Loading from 'components/Loading'
import { UseNearScreen } from 'hooks/useNearScreen'
import './index.scss'

const Home = () => {
    const { isNear, elementRef } = UseNearScreen()

    return <>
        <Suspense fallback={<Loading />}>
            <div className="home">
                <GifsTrending />
                <LastSearches />
                <section ref={elementRef} className="listOfTrendings">
                    { isNear ? <ListOfTrendings /> : null }
                </section>
            </div>
        </Suspense>
    </>
}

export default Home