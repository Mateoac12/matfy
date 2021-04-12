import { useState, useEffect, useCallback } from 'react'
import { getGifs } from 'services/getGifs'
import { GetTrendings } from 'services/getTrendings'

export const UseGifs = ({ keyword = "", trending = false, rating, lang } = {}) => {
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

    // update search results
    useEffect(() => {
        if (keyword !== "") {
            getGifs({ keyword, rating, lang }).then(data => {
                handleGetGifs(data).then(gifs => {
                    setGifs(gifs)
                    localStorage.setItem("lastSearches", JSON.stringify(gifs))
                    setLoading(false)
                })
            })
        }
    }, [keyword, handleGetGifs, rating, lang])

    // update trendings on home
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