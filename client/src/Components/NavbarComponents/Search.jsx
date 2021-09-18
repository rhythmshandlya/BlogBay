import React from 'react';
import './Stylesheets/search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useHistory} from 'react-router-dom';

const Search = () => {
    let history = useHistory();
    const [state, setstate] = React.useState("");
    const handleClick = () => {
        if (state.length > 0) {
            history.push(`/search/${state}`);
        }
    };
    return (
        <div className="search-box">
            <button onClick={handleClick} className="btn-search"><FontAwesomeIcon icon={faSearch} /></button>
            <input type="text" onChange={() => {
                setstate(document.querySelector('.search-box input').value);
            }} className="input-search" placeholder="Type to Search..." />
        </div>
    );
}
export default Search
