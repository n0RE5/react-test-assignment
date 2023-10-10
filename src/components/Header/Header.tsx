import React from 'react'
import styles from './Header.module.scss';
import Searchbar from '../Searchbar/Searchbar';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__text}>
                An entire library in the palm of your hand...
            </div>
            <Searchbar />
        </div>
    );
}

export default Header;