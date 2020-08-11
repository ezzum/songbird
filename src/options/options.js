import React from 'react';

const Options = ({option, getIdClick}) => {
    const {id, name} = option;
    return (
        <li className='list-group-item'
            onClick = {() => getIdClick(id)}
        >
            <span className='li-btn'></span>
            {name}
        </li>
    );
};

export default Options;