import renderWithRouter from '../testSetup/setupTests'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'
import Content from './Content'


describe ('Content', () => {
    it('renders correctly', () => {
        const { container } = renderWithRouter(
            <Content />
        )
        expect(container).toMatchSnapshot()
    })

    it('shows the correct item information', () => {
        const { getByRole } = renderWithRouter(
            <Content />
        )
        expect(getByRole('link', {name: /all items/i })).toBeInTheDocument()
        expect(getByRole('link', {name: /first three/i })).toBeInTheDocument()
    })

    it('has other parameters if link is clicked', () => {
        const { getByRole, history } = renderWithRouter(
            <Content />
        )

        userEvent.click(getByRole('link', {name: /all items/i }))
        expect(history.location.pathname).toEqual('/items')
    })

    it('has other parameters if three-link is clicked', () => {
        const { getByRole, history } = renderWithRouter(
            <Content />
        )

        userEvent.click(getByRole('link', {name: /first three/i }))
        expect(history.location.pathname).toEqual('/items')
    })
})