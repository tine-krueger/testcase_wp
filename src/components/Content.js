import styled from 'styled-components'
import Main from './Main'
import Divider from './Divider'

export default function Content() {
    return(
        <ContentStyled>
            <Main />
            <Divider>Welcome to Hamburg</Divider>
        </ContentStyled>
    )
}

const ContentStyled = styled.div`
    background: var(--secondaryFont);
    position: relative;
    margin-top: -2em;
`

