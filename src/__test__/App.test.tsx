import '@testing-library/jest-dom';
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../utils/testUtils'
import App from '../App';

describe('<App/> Test', () => {
    renderWithProviders(<App/>)

    it('App renders all components', () => {
        const headerText = screen.getByText('An entire library in the palm of your hand...')
        const mainPageText = screen.getByText("Discover new books you'll love")
        expect(headerText).toBeInTheDocument()
        expect(mainPageText).toBeInTheDocument()
    })
})