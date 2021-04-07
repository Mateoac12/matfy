import ListOfGifs from 'components/ListOfGifs'
import Loading from 'components/Loading'
import { UseGifs } from 'hooks/useGifs'
import React from 'react'

const GifsTrending = () => {
    const {gifs, loading} = UseGifs({ trending: true})
    return <>
    {
        loading ? <Loading /> : <ListOfGifs gifs={ gifs } />
    }
    </>
}

export default GifsTrending