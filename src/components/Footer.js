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
    bottom: -11em;
    left: 0;
    display: grid;
    background: var(--footerBackground);
    color: var(--secondaryFont);

    p {
        justify-self: center;
        text-transform: uppercase;
        margin: .5em 0;
    }

`