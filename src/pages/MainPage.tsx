import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';
import Loader from '../components/UI/Loader/Loader';
import BookList from '../components/BookList/BookList';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { fetchPaginationBooks } from '../store/actions/books';
import '../styles/mainpage.scss';

const MainPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const { data, isLoading, currentPage, totalPages, totalBooks, error } = useTypedSelector(state => state.booksReducer)
    
    const handleClick = () => {
        dispatch(fetchPaginationBooks())
    }

    return (
        <div className='mainpage'>
            {!error && !data.length && (
                <div className='mainpage_results'>
                    Discover new books you'll love 
                </div>
            )}
            {error && (
                <div className='mainpage_results'>
                    {error}
                </div>
            )}
            {data.length !== 0 && (
                <div className='mainpage_results'>
                    Found {totalBooks} results
                </div>
            )}
            <BookList books={data} />
            {totalPages !== currentPage && (
                <button className='mainpage_loadmore' onClick={handleClick}>
                    Load More
                </button>
            )}
            {isLoading && (
                <div className='mainpage_loader'>
                    <Loader/>
                </div>
            )}
        </div>
    );
}

export default MainPage;