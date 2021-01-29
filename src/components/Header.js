import styled from 'styled-components/macro'
import elphi_450 from '../assets/elphi_450.jpg'

export default function Header() {

    return (
        <HeaderElphi>
            <h1>Moin Moin</h1>
        </HeaderElphi>
    )
}

const HeaderElphi =  styled.div`
    padding: 1em;    
    height: 10em;
    background-image: url(${elphi_450});
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

    h1 {
        text-transform: uppercase;
        position: absolute;
        top: 40%;
        left: 39%;
        transform: translate(-39%, -40%);
        color: #fff;
    }
    
`