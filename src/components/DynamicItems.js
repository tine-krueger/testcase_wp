import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import useItems from '../hooks/useItems'
import ItemCard from './ItemCard'

DynamicItems.propTypes = {
    number: PropTypes.object
}

export default function DynamicItems(number) {
    const { queriedItems, isLoading, error } = useItems(number)

    return(
        <ItemsList>
            {
                isLoading ? 'Loading...' :
                error ? <p>{error}</p> : 
                queriedItems.map((item) => <ItemCard item={item} />)
            }
        </ItemsList>

    )
}

const ItemsList = styled.ul`
    list-style-type: none;
    padding: 0 1.5em 1em;
`