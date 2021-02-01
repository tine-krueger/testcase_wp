import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { getExcerpt } from '../hooks/useItems'

ItemCard.propTypes = {
    item: PropTypes.array
}

export default function ItemCard(item) {
    const excerpt = getExcerpt(item.item[2])
  
    return(
        <Card key={item.index}>
            <img src={item.item[0]} alt='Speicherstadt-Cristina-Gottardi/unsplash'/>
            <Text>
                <h3>{item.item[1]}</h3>
                <p>{excerpt}</p>
            </Text>
        </Card>
    )
}

const Card = styled.li`
    background: var(--cards);
    
    img {
        width: 100%;
    }
`
const Text = styled.div`
    padding: .5em 1em;
    margin-bottom: 1em;

    h3 {
        margin-top: .5em;
        margin-bottom: .5em;
    }

    p {
        font-size: .8em;
    }


`
