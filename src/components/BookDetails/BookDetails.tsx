import React from 'react'
import { IBook } from '../../types/books';
import styles from './BookDetails.module.scss';
import BookDescription from '../BookDescription/BookDescription';

interface BookDetailsProps {
    book: IBook
}

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
    return (
        <div className={styles.book}>
            <div className={styles.book_image}>
                <img 
                    src={book.volumeInfo.imageLinks?.thumbnail || ''} 
                    alt={book.volumeInfo.title} 
                />
            </div>
            <div className={styles.book_details}>
                {book.volumeInfo.categories?.length && (
                    <div className={styles.book__categories}>
                        {book.volumeInfo.categories[0]}
                    </div>
                )}
                <div className={styles.book__title}>
                    {book.volumeInfo.title}
                </div>
                <div className={styles.book__authors}>
                    {book.volumeInfo.authors?.join(', ')}
                </div>
                <BookDescription description={book.volumeInfo.description}/>
            </div>
        </div>
    );
}

export default BookDetails;