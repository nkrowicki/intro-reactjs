import React from 'react';

export default function Search ({onTypeSearch}) {
    return(
        <div>
        <input type="text" id="search" onKeyUp={onTypeSearch} />
        </div>
    );
}