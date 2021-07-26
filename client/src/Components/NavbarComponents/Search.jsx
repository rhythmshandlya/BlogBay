import React from 'react';
import './Stylesheets/search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
    return (
        <div className="search-box">
            <button className="btn-search"><FontAwesomeIcon icon={faSearch}/></button>
            <input type="text" className="input-search" placeholder="Type to Search..." />
        </div>
    )
}
export default Search
