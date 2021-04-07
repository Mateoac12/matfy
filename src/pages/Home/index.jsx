import PrincipalTitle from 'components/PrincipalTitle'
import React from 'react'
import GifsTrending from 'components/GifsTrending'

const Home = () => {
    return <>
        <PrincipalTitle title={"Tendencias!"} />
        <GifsTrending />
    </>
}

export default Home