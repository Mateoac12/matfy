import { API_KEY, TERMS_URL } from 'config/apiConfig'

export const UseTerms = () => {
    return fetch(`${TERMS_URL}?api_key=${API_KEY}`)
        .then(data => data.json())
        .then(res => {
            const { data } = res
            return data
        })
}