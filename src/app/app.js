import React from 'react';
import Header from '../header/header';
import './app.css';

const App = () => {

    const itemPagination = [
        {label: 'Разминка', active: true, id: 1},
        {label: 'Воробьиные', active: false, id: 2},
        {label: 'Лесные птицы', active: false, id: 3},
        {label: 'Певчие птицы', active: false, id: 4},
        {label: 'Хищные птицы', active: false, id: 5},
        {label: 'Морские птицы', active: false, id: 6},
    ];

    return(
        <div className='app'>
            <Header items = {itemPagination}/>
        </div>
    );
}

export default App;