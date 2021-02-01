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
    display: grid;
    gap: 0 1em;
    margin-bottom: 2em;
    
    img {
        max-width: 100%;
        height: auto;
    }

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 992px) {
        grid-template-columns: 2fr 5fr;
    }

    @media (min-width: 1200px) {
        grid-template-columns: 1fr 3fr;
    }
`
const Text = styled.div`
    padding: .5em 1em;

    h3 {
        margin-top: .5em;
        margin-bottom: .5em;
    }

    p {
        font-size: .8em;
    }

    @media (min-width: 992px) {
        padding: 0 1em;

        p {
            margin: .75em 0;
        }
    }

    @media (min-width: 1200px) {
        p {
            font-size: 1em;
        }
    }
`
