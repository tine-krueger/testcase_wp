import PropTypes from 'prop-types'
import useItems from '../hooks/useItems'

DynamicItems.propTypes = {
    number: PropTypes.object
}

export default function DynamicItems(number) {

    const { queriedItems, isLoading } = useItems(number)

    return(
        
        <>
            <ul>
                {isLoading ? 'Loading...' : queriedItems.map((item, index) => <li key={index}>{item[1]}</li>)}
            </ul>
        </>

    )


}