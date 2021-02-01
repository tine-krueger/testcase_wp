import { useState, useEffect } from 'react'
import { getItems } from '../services/handleItems'

export default function useItems(number) {
    const [ queriedItems, setQueriedItems ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    
    useEffect(() => {
        
        getItems()
        .then(data => {
            if(number.number === 'all') {
                setQueriedItems(data.reverse())
            } 
            else if( number.number !== 'all') {
                setQueriedItems(data.slice(0, number.number))
            }
            setTimeout(() => setIsLoading(false), 1000)
        })

    }, [number])

    return { queriedItems, isLoading }

}
