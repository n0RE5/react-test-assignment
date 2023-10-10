import '@testing-library/jest-dom';
import Header from "../Header/Header"
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../utils/testUtils'
import { BrowserRouter } from "react-router-dom";

describe('<Header/> Test', () => {
    renderWithProviders(
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    )

    it('Header renders text', () => {
        const text = screen.getByText('An entire library in the palm of your hand...')
        expect(text).toBeInTheDocument()
    })
})