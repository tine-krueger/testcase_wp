import { render } from '@testing-library/react'
import 'jest-styled-components'
import Header from './Header'

describe ('Header', () => {
    it('renders correctly', () => {
        const { container } = render(
            <Header />
        )
        expect(container).toMatchSnapshot()
    })

    it('shows the correct text', () => {
        const { getByText} = render(
            <Header />
        )
        expect(getByText(/Moin Moin/i)).toBeInTheDocument()
    })
})