import React, { useState } from 'react'
import styles from './Searchbar.module.scss';
import Select from '../UI/Select/Select';
import googleSortOptions from '../../utils/googleSortOptions.json'
import googleCategoryOptions from '../../utils/googleCategoryOptions.json'
import { setSearchParams } from '../../store/reducers/searchReducer';
import { fetchBooks } from '../../store/actions/books';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { DEFAULT_ROUTE } from '../../utils/consts';

const Searchbar = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [category, setCategory] = useState('all')
    const [sortType, setSortType] = useState('relevance')

    const handleSearch = (e: React.MouseEvent) => {
        try {
            e.preventDefault()
            navigate(DEFAULT_ROUTE)
            dispatch(setSearchParams({searchQuery, category, sortType}))
            dispatch(fetchBooks())
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <form className={styles.searchbar}>
            <div className={styles.searchbar_input}>
                <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder='Try "Clean Code" or "Coders at Work"' 
                />
                <button onClick={handleSearch} />
            </div>
            <div className={styles.searchbar_selects}>
                <div className={styles.searchbar_select}>
                    <div className={styles.searchbar_select__text}>
                        Categories
                    </div>
                    <div className={styles.searchbar_select__input}>
                        <Select
                            options={googleCategoryOptions}
                            selected={category}
                            onChange={setCategory}
                        />
                    </div>
                </div>
                <div className={styles.searchbar_select}>
                    <div className={styles.searchbar_select__text}>
                        Sorting by
                    </div>
                    <div className={styles.searchbar_select__input}>
                        <Select
                            options={googleSortOptions}
                            selected={sortType}
                            onChange={setSortType}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Searchbar;