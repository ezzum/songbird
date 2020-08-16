import React from 'react';
import Options from './options';
import './options-block.css';

const OptionsBlock = ({data, getIdClick, birdId, levelWin, optionsScore}) => {

    const options = data.data;

    const elements = options.map((elem, idx) => {
        return (
            <Options option={elem} key={elem.id}
                getIdClick = {getIdClick}
                birdId = {birdId}
                levelWin = {levelWin}
                optionsScoreItem = {optionsScore[idx].state}
            />
        );
    })

    return (
        <ul className='options-block item-list list-group'>
            {elements}
        </ul>
    );
}

export default OptionsBlock;