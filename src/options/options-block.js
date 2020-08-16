import React from 'react';
import Options from './options';
import './options-block.css';

const OptionsBlock = ({data, getIdClick, birdId, levelWin}) => {

    const options = data.data;

    const elements = options.map((elem) => {
        return (
            <Options option={elem} key={elem.id}
            getIdClick = {getIdClick}
            birdId = {birdId}
            levelWin = {levelWin}/>
        );
    })

    return (
        <ul className='options-block item-list list-group'>
            {elements}
        </ul>
    );
}

export default OptionsBlock;