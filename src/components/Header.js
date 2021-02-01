import styled from 'styled-components/macro'
import elphi_600 from '../assets/elphi_600.jpg'
import elphi_1000 from '../assets/elphi_1000.jpg'
import elphi_1900 from '../assets/elphi_1900.jpg'

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
    background-size: cover;
    position: relative;

    @media (min-width: 768px) {
        background: url(${elphi_1000});
        background-position: center;
        background-repeat: no-repeat;
    }

    @media (min-width: 992px) {
        background: url(${elphi_1900});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 5em;
    }

    @media (min-width: 1200px) {
        padding: 10em;
    }


`
const Headline = styled.div`
    background: rgba(0,0,0,.2);
    backdrop-filter: blur(3px);
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

    @media (min-width: 768px) {
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

    }

    @media (min-width: 992px) {
        top: 4em;
        left: 9em;
    }

    @media (min-width: 1200px) {
        top: 6em;
        left: 13em;

        h1 {
            font-size: 2.8rem;
        }
    }
`