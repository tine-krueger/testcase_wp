import { render } from '@testing-library/react'
import 'jest-styled-components'
import Divider from './Divider'

const children = 'Hello Hamburg'

describe ('Divider', () => {
    it('renders correctly', () => {
        const { container } = render(
            <Divider
                children={children}
            />
        )
        expect(container).toMatchSnapshot()
    })

    it('shows the correct item information', () => {
        const { getByRole } = render(
            <Divider
                children={children}
            />
        )
        expect(getByRole('heading', {name:/Hello Hamburg/i})).toBeInTheDocument()
    })
})