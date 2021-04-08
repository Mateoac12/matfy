import { useState, useEffect } from 'react'

export const UseStorage = ({ key }) => {
    const [storage, setStorage] = useState([])

    useEffect(() => {
        if (localStorage.getItem(`${key}`)) {
            const storageInfo = JSON.parse(localStorage.getItem(`${key}`))
            setStorage(storageInfo)
        }
    }, [key])

    return { storage }
}