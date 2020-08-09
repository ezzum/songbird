import React from 'react';
import './header.css';
import Pagination from './pagination';

const Header = ({items}) => {

    const score = 0

    const elements = items.map((item) => {
        return (
            <li key={item.id} className='page-item'>
                <Pagination {...item}/>
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
              {/* <li className="page-item"><a className="page-link active" href="/#">Разминка</a></li>
              <li className="page-item"><a className="page-link" href="/#">Воробьиные</a></li>
              <li className="page-item"><a className="page-link" href="/#">Лесные птицы</a></li>
              <li className="page-item"><a className="page-link" href="/#">Певчие птицы</a></li>
              <li className="page-item"><a className="page-link" href="/#">Хищные птицы</a></li>
              <li className="page-item"><a className="page-link" href="/#">Морские птицы</a></li> */}
            </ul>
        </div>
    )
}

export default Header;