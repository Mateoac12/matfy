import  UseSingleGif  from 'hooks/useSingleGif'
import React from 'react'
import { Helmet } from 'react-helmet'
import './index.scss'


const Detail = ({ params }) => {
    const { id } = params
    const {infoGif} = UseSingleGif({id})

    return <section className="detail">
        <Helmet>
            <title>Resultado de {infoGif.title || ""} | Matfy</title>
            <meta name="description" content={`Resultado de la busqueda de ${infoGif.title || ""} en el buscador de gifs de Matfy`}/>
        </Helmet>
        <article className="detail__left">
            <figure className="detail__image-box">
                <img className="detail__image" src={infoGif.image} alt={infoGif.title} />
                <h2 className="detail__title">{infoGif.title} <span>{infoGif.rating}</span></h2>
            </figure>
        </article>
        <article className="detail__right">
            <img className="detail__avatar" src={infoGif.avatarURL} alt={infoGif.username} />
            <h2 className="userInfo__title">{infoGif.username}</h2>
            <blockquote className="detail__description">{infoGif.description}</blockquote>
        </article>
    </section>
}

export default Detail

