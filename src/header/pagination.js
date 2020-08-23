import React from 'react';

const Pagination = ({item, activeId}) => {
    const {id, label} = item;
    let className = 'page-link'

    if (id === activeId) {
        className += ' active';
    }
    return (
        <a className={className} href="/#">
            {label}
        </a>
    )

}

export default Pagination;