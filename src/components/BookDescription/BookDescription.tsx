import React, { useEffect, useRef } from 'react'
import styles from './BookDescription.module.scss';

interface BookDescriptionProps {
    description: string
}

const BookDescription: React.FC<BookDescriptionProps> = ({ description }) => {
    const ref = useRef<HTMLDivElement>(null); 

    useEffect(() => {
        if(ref?.current) {
            ref.current.innerHTML = description; // Since we get can get html tags with google book api response
        }
    }, [ref, description])

    return (
        <div className={styles.description}>
            <div ref={ref} className={styles.description__text}/>
        </div>
    );
}

export default BookDescription;