import React from 'react';
import './nextLevelButton.css';

const NextLevelButton = ({levelWin, nextLevel}) => {
    let className = 'btn next-level';
    if (levelWin) className += ' active';

    return (
        <button className={className}
        onClick = {nextLevel}>
            Next Level
        </button>
    );
}

export default NextLevelButton;