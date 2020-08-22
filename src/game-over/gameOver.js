import React from 'react';
import './gameOver.css'

const GameOver = ({scoreVisible, newGame}) => {
    const maxScore = 30;
    let text = `Вы прошли игру и набрали ${scoreVisible} из 30 возможных баллов`;
    if (scoreVisible === maxScore) {
        text = 'Вы набрали максимальные 30 баллов';
    }
    return (
        <div className='game-over-block'>
            <h1>Поздравляем!</h1>
            <p>{text}</p>
            <button className='btn next-level active'
            onClick = {newGame}>
                Попробовать еще раз!
            </button>
        </div>
    );
}

export default GameOver;