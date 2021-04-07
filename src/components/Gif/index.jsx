import React from 'react'
import './index.scss'

const Gif = ({ gifs }) => {
    return <>
    {
        gifs.map(({title, img, id}) => 
            <div className="gif">
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
    </>
}

export default Gif