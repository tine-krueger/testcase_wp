import styled from 'styled-components/macro'
import { Link, useLocation } from 'react-router-dom'
import Main from './Main'
import Divider from './Divider'
import DynamicItems from './DynamicItems'

export default function Content() {
    let query = useQuery()

    return(
        <ContentStyled>
            <Main />
            <Divider>Welcome to Hamburg</Divider>
            <NavText>
                See <Link to="/items?number=all" >all items</Link> or only 
                the <Link to="/items?number=3" >first three</Link>
            </NavText>
            <DynamicItems  number={query.get('number') !== null ? query.get('number') : 'all'}/>
        </ContentStyled>
    )

    function useQuery() {
        return new URLSearchParams(useLocation().search)
    }
}

const ContentStyled = styled.div`
    background: var(--secondaryFont);
    position: relative;
    margin-top: -2em;

    @media (min-width: 992px) {
        margin-left: 4em;
        margin-right: 4em;
    }

    @media (min-width: 992px) {
        margin: -4em 6em 0;
    }

    @media (min-width: 1200px) {
        max-width: 1200px;
        margin: -8em auto 0;
    }
`
const NavText = styled.p`
    padding: 1em;
    font-weight: bold;
    text-align: center;

    a {
        color: var(--link);
    }

    @media (min-width: 1200px) {
        font-size: 1.3em;
    }
`