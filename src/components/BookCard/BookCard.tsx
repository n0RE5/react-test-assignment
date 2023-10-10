import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BOOK_ROUTE } from '../../utils/consts';
import { IBook } from '../../types/books';
import styles from './BookCard.module.scss';

interface BookCardProps {
    book: IBook
}

const BookCard: React.FC<BookCardProps> = React.memo(({ book }) => {
    const navigate = useNavigate()
    const handleClick = () => navigate(BOOK_ROUTE + `/${book.id}`)
    
    return (
        <div onClick={handleClick} className={styles.book}>
            <div className={styles.book__thumbnail}>
                <img 
                    src={book.volumeInfo.imageLinks?.thumbnail || ''} 
                    alt={book.volumeInfo.title} 
                />
            </div>
            <div className={styles.book__categories}>
                {book.volumeInfo.categories
                    ? book.volumeInfo.categories[0]
                    : <br/>
                }
            </div>
            <div className={styles.book__title}>
                {book.volumeInfo.title}
            </div>
            <div className={styles.book__authors}>
                {book.volumeInfo.authors?.join(', ')}
            </div>
        </div>
    );
})

export default BookCard;