import { render } from '@testing-library/react'
import 'jest-styled-components'
import Main from './Main'

describe ('Main', () => {
    it('renders correctly', () => {
        const { container } = render(
            <Main />
        )
        expect(container).toMatchSnapshot()
    })

    it('shows the correct item information', () => {
        const { getByRole } = render(
            <Main />
        )
        expect(getByRole('img', {name: /Hamburg Hochbahn/i })).toBeInTheDocument()
        expect(getByRole('heading', {name:/This is just a Testcase/i})).toBeInTheDocument()
        expect(getByRole('heading', {name:/Dies ist ein Typoblindtext/i})).toBeInTheDocument()
    })
})