import Gif from 'components/Gif'
import React from 'react'
import './index.scss'

const ListOfGifs = ({ gifs }) => {
    return <section className="listofgifs">
        <Gif gifs={ gifs } />
    </section>
}

export default ListOfGifs