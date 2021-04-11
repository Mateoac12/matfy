import { useState, useEffect, useCallback } from 'react'
import { getGifs } from 'services/getGifs'
import { GetTrendings } from 'services/getTrendings'

export const UseGifs = ({ keyword = "", trending = false, rating } = {}) => {
    const [loading, setLoading] = useState(true)
    const [gifs, setGifs] = useState([])

    const handleGetGifs = useCallback( async (data) => {
        const gifs = await data.map(({id, title, images}) => {
            const img = images.downsized.url
            const gifs = {id, title, img}
            return gifs
        })
        return gifs
    }, [])

    useEffect(() => {
        if (keyword !== "") {
            getGifs({ keyword, rating }).then(data => {
                handleGetGifs(data).then(gifs => {
                    setGifs(gifs)
                    localStorage.setItem("lastSearches", JSON.stringify(gifs))
                    setLoading(false)
                })
            })
        }
    }, [keyword, handleGetGifs, rating])

    useEffect(() => {
        if (trending) {
            GetTrendings().then(data => {
                handleGetGifs(data).then(gifs => {
                    setGifs(gifs)
                    setLoading(false)
                })
            })
        }
    }, [trending, handleGetGifs])

    return {gifs, loading}
}