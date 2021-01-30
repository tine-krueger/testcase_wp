import styled from 'styled-components/macro'

export default function Divider({children}) {

    return(
        <DividingHeadline>
            {children}
        </DividingHeadline>
    )
}

const DividingHeadline = styled.h2`
    padding: 1em 0;
    text-transform: uppercase;
    text-align: center;
    background-color: var(--link);
    color: var(--secondaryFont);
`