import React from 'react'
import '../styles/errorpage.scss'
import { Link } from 'react-router-dom';
import { DEFAULT_ROUTE } from '../utils/consts';

const ErrorPage = () => {
    return (
        <div className='error404'>
            <div className='error404__text'>404!</div>
            <div className='error404__description'>You didn't break the internet, but we can't find what you are looking for...</div>
            <Link to={DEFAULT_ROUTE} className='error404__back'> Take me back to the homepage</Link>
        </div>
    );
}

export default ErrorPage;