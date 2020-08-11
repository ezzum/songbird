import React from 'react';
import Options from './options';
import './options-block.css';

const OptionsBlock = ({data, getIdClick}) => {
    const [level] = data;
    const options = level.data;

    const elements = options.map((elem) => {
        return (
            <Options option={elem} key={elem.id}
            getIdClick = {getIdClick}/>
        );
    })

    return (
        <ul className='options-block item-list list-group'>
            {elements}
        </ul>
    );
}

export default OptionsBlock;