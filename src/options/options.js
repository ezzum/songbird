import React from 'react';
import winSound from '../sound/win.mp3';
import errSound from '../sound/error.mp3';

const Options = ({option, getIdClick, birdId, levelWin, optionsScoreItem}) => {
    const {id, name} = option;
    let className = 'li-btn';

    const clickItem = (id) => {
        const audioWin = new Audio(winSound);
        const audioError = new Audio(errSound);

        getIdClick(id);

        if (birdId === id && !levelWin) {
            audioWin.play();
        }
        if (birdId !== id && !levelWin) {
            audioError.play();
        }
    }

    if (optionsScoreItem > 0) className += ' win-item';
    if (optionsScoreItem < 0) className += ' error-item';

    return (
        <li className='list-group-item'
            onClick = {() => clickItem(id)}>
            <span className={className} id={id}></span>
            {name}
        </li>
    );
    
};

export default Options;