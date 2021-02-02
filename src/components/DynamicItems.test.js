import renderWithRouter from '../testSetup/setupTests'
import 'jest-styled-components'
import DynamicItems from './DynamicItems'

const mockAll = 'all'

describe ('Dynamic Items', () => {
    it('renders correctly', () => {
        const { container } = renderWithRouter(
            <DynamicItems number={mockAll} />
        )
        expect(container).toMatchSnapshot()

    })

})