import styled from 'styled-components/macro'
import public_transport_600 from '../assets/public_transport_600.jpg'

export default function Main() {
    return(
        <StaticStyled>
            <TextWrapper>
                <h2>This is just a Testcase</h2>
                <h3>Dies ist ein Typoblindtext</h3>
                <p>
                    An ihm kann man sehen, ob alle Buchstaben da sind und wie sie 
                    aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks 
                    oder Handgloves, um Schriften zu testen. 
                </p>
                <p>
                    Manchmal Sätze, die alle Buchstaben des Alphabets enthalten - man 
                    nennt diese Sätze "Pangrams". Sehr bekannt ist dieser: The quick 
                    brown fox jumps over the lazy old dog. Oft werden in 
                    Typoblindtexte auch fremdsprachige Satzteile eingebaut 
                    (AVAIL and Wefox are testing aussi la Kerning), um die Wirkung in 
                    anderen Sprachen zu testen. 
                </p>
                <p>
                    In Lateinisch sieht zum Beispiel fast jede Schrift gut aus. Quod 
                    erat demonstrandum. Seit 1975 fehlen in den meisten Testtexten 
                    die Zahlen, weswegen nach TypoGb.
                </p>
            </TextWrapper>
            <ImageWrapper>
                <img src={public_transport_600} alt='Hamburg Hochbahn' />
            </ImageWrapper>
        </StaticStyled>
    )

}

const StaticStyled = styled.div`
    display: grid;
`
const TextWrapper = styled.div`
    padding: 1.5em;   
`
const ImageWrapper = styled.div`
    width: 100vw;

    img {
        width: 100%;
    }
`