import React from 'react'
import './index.scss'
import { Link } from 'wouter'

const Gif = ({ gifs }) => {
    return <>
    {
        gifs.map(({title, img, id}) => 
            <Link href={`/detail/${id}`} className="gif" key={`container-${id}`}>
                <img
                    alt="title"
                    className="gif__img"
                    key={`img-${id}`}
                    src={img}
                    loading="lazy"
                />
                <span key={`title-${id}`} className="gif__title">{title}</span>
            </Link>
        )
    }

    </>
}

export default Gif