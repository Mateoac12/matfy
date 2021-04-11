import { API_KEY, BASE_URL, SEARCH_LIMIT } from 'config/apiConfig'

export const getGifs = ({ keyword = "", page = 0, rating, lang = "en" } = {}) => {
    return fetch(`${BASE_URL}/search?api_key=${API_KEY}&q=${keyword}&limit=${SEARCH_LIMIT}&offset=${page * SEARCH_LIMIT}&rating=${rating}&lang=${lang}`)
        .then(data => data.json())
        .then(res => {
            const { data } = res
            return data
        })
}