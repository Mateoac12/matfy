import ListOfGifs from 'components/ListOfGifs'
import PrincipalTitle from 'components/PrincipalTitle'
import Loading from 'components/Loading'
import { UseGifs } from 'hooks/useGifs'
import React from 'react'

const GifsTrending = () => {
    const {gifs, loading} = UseGifs({ trending: true})
    return <>
    <PrincipalTitle title={"Tendencias!"} />
    {
        loading ? <Loading /> : <ListOfGifs gifs={ gifs } />
    }
    </>
}

export default GifsTrending