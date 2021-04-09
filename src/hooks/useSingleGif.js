import { useState, useEffect } from 'react'
import { GetSingleGif } from 'services/getSingleGif'

const UseSingleGif = ({ id }) => {
    const [infoGif, setInfoGif] = useState([])

    useEffect(() => {

        GetSingleGif({ id })
            .then(data => {
                const { title, user, rating, images } = data
                const image = images.original.url
                if (user) {
                    const { username, is_verified: isVerified, description, avatar_url: avatarURL} = user   
                    const dataGif = { title, rating, image, username, isVerified, description, avatarURL }
                    setInfoGif(dataGif)
                } else {
                    const dataGif = { title, rating, image }
                    setInfoGif(dataGif)
                }
            })
    }, [id])
    
    return {infoGif}
}

export default UseSingleGif