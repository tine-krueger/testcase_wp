import { useState, useEffect } from 'react'
import { getItems } from '../services/handleItems'

export default function useItems(number) {
    const [ queriedItems, setQueriedItems ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState(false)
    
    useEffect(() => {
        error && setError(false)
        getItems()
        .then(data => {
            if(number.number === 'all') {
                setQueriedItems(data.reverse())
            } 
            else if( number.number >= 0 && number.number <= data.length) {
                setQueriedItems(data.slice(0, number.number))
            } else {
                setError('Keine Einträge zu dieser Anfrage gefunden!')
            }
            setTimeout(() => setIsLoading(false), 1000)
        })

    }, [number])

    return { queriedItems, isLoading, error }

}

export function getExcerpt(item) {
    const excerptArray = (item.split(' ')).slice(0,37)
    const excerpt = excerptArray.join(' ')

    return excerpt
}
