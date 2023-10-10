import React from 'react'
import { IBook } from '../../types/books';
import BookCard from '../BookCard/BookCard';
import styles from './BookList.module.scss';

interface bookListProps {
    books: IBook[]
}

const bookList: React.FC<bookListProps> = ({ books }) => {
    return (
        <div className={styles.booklist}>
            <div className={styles.booklist_w}>
                {books.map((book, index) =>
                    <div key={index} className={styles.book_w}>
                        <BookCard book={book} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default bookList;