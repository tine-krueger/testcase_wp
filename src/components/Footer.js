import styled from 'styled-components/macro'

export default function Footer() {

    return(
        <BlackFooter>
            <p>Web Dev Testcase</p>
            <p>©2021 Wechselpilot</p>
            <p>No rights reserved</p>
        </BlackFooter>
    )
}

const BlackFooter = styled.div`
    padding: 1em 0;
    width: 100%;
    position: absolute;
    bottom: -.2em;
    left: 0;
    display: grid;
    background: var(--footerBackground);
    color: var(--secondaryFont);

    p {
        justify-self: center;
        text-transform: uppercase;
        margin: .5em 0;
    }

    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr;
        height: 4em;

        p {
            align-self: center;
        }

        p:first-child {
            justify-self: end;
        }

        p:last-child {
            justify-self: start;
        }
    }

`