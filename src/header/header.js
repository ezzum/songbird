import React from 'react';
import './header.css';
import Pagination from './pagination';

const Header = ({items, activeId}) => {

    const score = 0

    const elements = items.map((item) => {
        return (
            <li key={item.id} className='page-item'>
                <Pagination 
                    item = {item}
                    activeId = {activeId}
                />
            </li>
        );
    });

    return (
        <div className='header'>
            <div className='top-head'>
                <div className='logo'></div>
                <h4>Score: {score}</h4>
            </div>
            <ul className="pagination">
                {elements}
            </ul>
        </div>
    )
}

export default Header;