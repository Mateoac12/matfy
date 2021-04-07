import Gif from 'components/Gif'
import Loading from 'components/Loading'
import { UseGifs } from 'hooks/useGifs'
import React from 'react'

const ListOfGifs = ({ keyword }) => {
    const {gifs, loading} = UseGifs({keyword})

    return <>
        {
            loading ? <Loading /> : <Gif gifs={ gifs } />
        }
    </>
}

export default ListOfGifs