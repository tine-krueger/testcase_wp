import styled from 'styled-components/macro'
import Header from '../components/Header'
import Content from '../components/Content'

export default function LandingPage() {
    return(
        <PageStyled>
            <Header />
            <Content />
        </PageStyled>
    )
}

const PageStyled = styled.div`
    padding-bottom: 10em;
`
