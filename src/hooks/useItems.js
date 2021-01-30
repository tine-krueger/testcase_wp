import { useState, useEffect } from 'react'
import { getItems } from '../services/handleItems'

export default function useItems() {
    const [ items, setItems ] = useState()
    const [ isLoading, setIsLoading ] = useState(true)
    
    useEffect(() => {
        getItems()
        .then(data => {
            setItems(data)
            setTimeout(() => setIsLoading(false), 1000)
        })
    }, [])

    return { items, isLoading }

}