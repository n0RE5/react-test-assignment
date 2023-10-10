import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import BookDetails from '../components/BookDetails/BookDetails';
import Loader from '../components/UI/Loader/Loader';
import { ERROR_ROUTE } from '../utils/consts';
import { IBook } from '../types/books';
import '../styles/bookpage.scss'

const BookPage = () => {
    const id = useParams()
    const navigate = useNavigate()
    const [book, setBook] = useState<IBook | null>(null)

    const [fetchBook, isFetching, error] = useFetching(async () => {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id.id}`)
        setBook(response.data)
    })

    useEffect(() => {
        fetchBook()
    }, [id])

    useEffect(() => {
        if (error) {
            navigate(ERROR_ROUTE)
        } 
    }, [isFetching, error])

    if (isFetching) {
        return (
            <div className='bookpage_loader'>
                <Loader />
            </div>
        )
    }

    return (
        <div className='bookpage'>
            {book !== null && (
                <BookDetails book={book} />
            )}
        </div>
    );
}

export default BookPage;