import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { getExcerpt } from '../hooks/useItems'

ItemCard.propTypes = {
    item: PropTypes.array
}

export default function ItemCard(item) {
    const excerpt = getExcerpt(item.item[2])
  
    return(
        <Card>
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
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;
    
    img {
        max-width: 100%;
        object-fit: cover;
        
    }

    @media (min-width: 768px) {
        flex-direction: row;

        img {
            max-width: 45%;
            align-self: flex-start;
        }
    }

    @media (min-width: 992px) {
        img {
            max-width: 30%;
        }
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
