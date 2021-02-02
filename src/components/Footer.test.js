import { render } from '@testing-library/react'
import 'jest-styled-components'
import Footer from './Footer'

describe ('Footer', () => {
    it('renders correctly', () => {
        const { container } = render(
            <Footer />
        )
        expect(container).toMatchSnapshot()
    })

    it('shows the correct text', () => {
        const { getByText} = render(
            <Footer />
        )
        expect(getByText(/Web Dev Testcase/i)).toBeInTheDocument()
        expect(getByText(/©2021 Wechselpilot/i)).toBeInTheDocument()
        expect(getByText(/No rights reserved/i)).toBeInTheDocument()
    })
})