import styled from 'styled-components/macro'
import public_transport_600 from '../assets/public_transport_600.jpg'
import public_transport_1000 from '../assets/public_transport_1000.jpg'

export default function Main() {
    return(
        <TextWrapper>
            <h2>This is just a Testcase</h2>
            <ContentWrapper>
                <div>
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
                </div>
                <ImageWrapper>
                    <img src={public_transport_600} srcSet={`${public_transport_600} 300w, ${public_transport_1000} 768w` } alt='Hamburg Hochbahn' />
                </ImageWrapper>
            </ContentWrapper>
        </TextWrapper>
    )

}


const TextWrapper = styled.div`
    padding: 1.5em 1.5em;  
    
    @media (min-width: 1200px) {
        font-size: 1.2em;
    }
`

const ContentWrapper = styled.div`
    @media (min-width: 922px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2em;
    }
`

const ImageWrapper = styled.div`
    margin-left: -1.5em;

    img {
        width: 100vw;
    }

    @media (min-width: 922px) {
        margin-left: 0;
        margin-top: 1em;

        img {
            width: 100%;
        }
    }
`
