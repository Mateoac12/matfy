import ListOfGifs from 'components/ListOfGifs'
import PrincipalTitle from 'components/PrincipalTitle'
import Loading from 'components/Loading'
import { UseGifs } from 'hooks/useGifs'
import React from 'react'
import './index.scss'

const GifsTrending = () => {
    const {gifs, loading} = UseGifs({ trending: true})
    return <section className="gifstrending">
    <PrincipalTitle title={"Tendencias!"} />
    {
        loading ? <Loading /> : <ListOfGifs gifs={ gifs } />
    }
    </section>
}

export default GifsTrending