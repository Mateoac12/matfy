import { useState, useEffect, useRef } from 'react'

export const UseNearScreen = ({margin = "100px"} = {}) => {
    const [isNear, setIsNear] = useState(false)
    const elementRef = useRef()

    useEffect(() => {
        const handleObserve = (entries) => {
            const el = entries[0]
            if(el.isIntersecting) {
                setIsNear(true)
            }
        }

        const observer = new IntersectionObserver(handleObserve, {
            "rootMargin": `${margin}`
        })

        observer.observe(elementRef.current)
    }, [elementRef, margin])

    return { isNear, elementRef }
}