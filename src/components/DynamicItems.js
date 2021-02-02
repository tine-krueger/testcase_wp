import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import useItems from '../hooks/useItems'
import ItemCard from './ItemCard'

DynamicItems.propTypes = {
    number: PropTypes.string
}

export default function DynamicItems(number) {
    const { queriedItems, isLoading, error } = useItems(number)

    return(
        <ItemsList>
            {
                isLoading ? 'Loading...' :
                error ? <p>{error}</p> : 
                queriedItems.map((item, i) => <ItemCard key={i} item={item} />)
            }
        </ItemsList>

    )
}

const ItemsList = styled.ul`
    list-style-type: none;
    padding: 0 1.5em 1em;
    margin-bottom: 0;

    @media (min-width: 768px) {
        padding: 0 2.5em 1em;
    }

    @media (min-width: 1200px) {
        padding: 0 10em 1em;
    }
`