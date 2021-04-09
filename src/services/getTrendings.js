import { API_KEY, BASE_URL, TRENDING_LIMIT } from 'config/apiConfig'

export const GetTrendings = ({ rating = "g" } = {}) => {
    return fetch(`${BASE_URL}/trending?api_key=${API_KEY}&limit=${TRENDING_LIMIT}&rating=${rating}`)
        .then(data => data.json())
        .then(res => {
            const { data } = res
            return data
        })
}