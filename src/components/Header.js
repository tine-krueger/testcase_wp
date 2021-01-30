import styled from 'styled-components/macro'
import elphi_600 from '../assets/elphi_600.jpg'

export default function Header() {

    return (
        <HeaderElphi>
            <Headline>
                <h1>Moin Moin</h1>
            </Headline>
           
        </HeaderElphi>
    )
}

const HeaderElphi =  styled.div`
    padding: 1em;    
    height: 50vh;
    background: url(${elphi_600});
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

    &:before {
        content: '';
        display: block;
        background-image: radial-gradient(#3e3e3e 33%, transparent 33%);
        backdrop-filter: saturate(2);
        background-size: 3px 3px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

    }

`
const Headline = styled.div`
    background: rgba(0,0,0,.2);
    backdrop-filter: blur(3px);
    border-radius: 5px;
    border: 1px solid var(--secondaryFont);
    position: absolute;
    top: 50%;
    left: 29%;
    transform: translate(-19%,-50%);

    h1 {
        text-transform: uppercase;
        color: var(--secondaryFont);
        margin: .25em .5em;
    } 
`