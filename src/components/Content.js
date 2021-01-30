import styled from 'styled-components'
import Main from './Main'
import Divider from './Divider'
import DynamicItems from './DynamicItems'
import useItems from '../hooks/useItems'


export default function Content() {
    const { items, isLoading } = useItems()

    return(
        <ContentStyled>
            <Main />
            <Divider>Welcome to Hamburg</Divider>
            {isLoading ? <h4>Loading...</h4> : <DynamicItems items={items}/>}
        </ContentStyled>
    )
}

const ContentStyled = styled.div`
    background: var(--secondaryFont);
    position: relative;
    margin-top: -2em;
`

