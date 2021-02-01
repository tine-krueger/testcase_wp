import styled from 'styled-components'
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

`

const NavText = styled.p`
    padding: 1em;
    font-weight: bold;

    a {
        color: var(--link);
    }
`