import React, { useState } from 'react'
import './index.scss'
import GifModal from 'components/GifModal'

const Gif = ({ gifs }) => {
    const [showModal, setShowModal] = useState(false)

    const handleViewGif = (e) => {
        setShowModal(true)
        console.log(e)
    }


    return <>
    {
        gifs.map(({title, img, id}) => 
            <div onClick={handleViewGif} className="gif">
                <img
                    alt="title"
                    className="gif__img"
                    key={`img-${id}`}
                    src={img}
                />
                <span key={`title-${id}`} className="gif__title">{title}</span>
            </div>
        )
    }
    {
        showModal ? <GifModal /> : null
    }
    </>
}

export default Gif