import { useState, useEffect } from 'react'
import { getGifs } from 'services/getGifs'

export const UseGifs = ({ keyword = ""} = {}) => {
    const [loading, setLoading] = useState(true)
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword }).then(data => {
            const gifs = data.map(({id, title, images}) => {
                const img = images.downsized.url
                const gifs = {id, title, img}
                return gifs
            })
            setGifs(gifs)
            setLoading(false)
        })
    }, [keyword])

    return {gifs, loading}
}