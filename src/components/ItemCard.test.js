import { render } from '@testing-library/react'
import 'jest-styled-components'
import ItemCard from './ItemCard'

const item = [
        '../../public/img/speicherstadt_600.jpg',
        'Headline 1',
        'Text example'
]

describe ('Item Card', () => {
    it('renders correctly', () => {
        const { container } = render(
            <ItemCard
                item={item}
            />
        )
        expect(container).toMatchSnapshot()
    })

    it('shows the correct item information', () => {
        const { getByRole, getByText } = render(
            <ItemCard
                item={item}
            />
        )
        expect(getByRole('img', {name: /Speicherstadt-Cristina-Gottardi/i })).toBeInTheDocument()
        expect(getByRole('heading', {name:/Headline 1/i})).toBeInTheDocument()
        expect(getByText(/Text example/i)).toBeInTheDocument()
    })
})