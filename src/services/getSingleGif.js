import {API_KEY, BASE_URL} from 'config/apiConfig'

export const GetSingleGif = ({id = ""} = {}) => {
    return fetch(`${BASE_URL}/${id}?api_key=${API_KEY}`)
        .then(data => data.json())
        .then(res => {
            const { data } = res
            return data
        })
}
