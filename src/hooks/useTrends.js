import { useState, useEffect } from 'react'
import { UseTerms } from 'services/getTrens'

export const UseTrends = () => {   
    const [trends, setTrends] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        UseTerms().then(trends => {
            setTrends(trends)
            setLoading(false)
        })
    }, [])

    return { trends, loading }
}