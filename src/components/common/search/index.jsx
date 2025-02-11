import s from './index.module.scss'
import { useState, useEffect } from 'react';

const SearchInput = ({className}) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        console.log(query);
    }, [query]);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className={`${s.Box} ${className}`}>
            <input
                type="text"
                placeholder="Пошук для будь-чого.."
                onChange={handleInputChange}
            />
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.72925 15.625C13.3536 15.625 16.2917 12.6869 16.2917 9.0625C16.2917 5.43813 13.3536 2.5 9.72925 2.5C6.10488 2.5 3.16675 5.43813 3.16675 9.0625C3.16675 12.6869 6.10488 15.625 9.72925 15.625Z"
                    stroke="#191C1F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M14.3699 13.7031L18.1667 17.5"
                    stroke="#191C1F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};

export default SearchInput;
