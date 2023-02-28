import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className="container-search">
            <input 
            className="search-input" 
            type="search" 
            placeholder="search..."
            onChange={searchChange}
            ></input>
        </div>
    )   
}
export default SearchBox;