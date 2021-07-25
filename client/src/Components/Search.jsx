import React from 'react';
import './../Stylesheets/search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
    return (
        <div class="search-box">
            <button class="btn-search"><FontAwesomeIcon icon={faSearch} size="lg"/></button>
            <input type="text" class="input-search" placeholder="Type to Search..." />
        </div>
    )
}
export default Search
