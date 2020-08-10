import React from 'react';
import Header from '../header/header';
import Question from '../question/question';
import birdData from '../data/birdsData';
import './app.css';

const App = () => {

    const itemPagination = [
        {label: 'Разминка', data: birdData[0], active: true, win: false, id: 1},
        {label: 'Воробьиные', data: birdData[1], active: false, win: false, id: 2},
        {label: 'Лесные птицы', data: birdData[2], active: false, win: false, id: 3},
        {label: 'Певчие птицы', data: birdData[3], active: false, win: false, id: 4},
        {label: 'Хищные птицы', data: birdData[4], active: false, win: false, id: 5},
        {label: 'Морские птицы', data: birdData[5], active: false, win: false, id: 6},
    ];

    return(
        <div className='app'>
            <Header items = {itemPagination}/>
            <Question data = {itemPagination.filter((elem) => elem.active)}/>
        </div>
    );
}

export default App;