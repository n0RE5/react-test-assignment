import '@testing-library/jest-dom';
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../utils/testUtils'
import { BrowserRouter } from "react-router-dom";
import BookCard from '../BookCard/BookCard';

describe('<BookCard/> Test', () => {
    const bookMoch: any = {
        id: '1',
        volumeInfo: {
            title: 'Testing react components with jest'
        }
    }
    renderWithProviders(
        <BrowserRouter>
            <BookCard book={bookMoch}/>
        </BrowserRouter>
    )

    it('BookCard renders title', () => {
        const text = screen.getByText('Testing react components with jest')
        expect(text).toBeInTheDocument()
    })
})