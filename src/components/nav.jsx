import React from 'react';

const Nav = (props) => {
    return (
        <div className="nav">
            <i className="fas fa-leaf"></i>
            <span className="nav__title">Habit Tracker</span>
            <p className="count">{props.count}</p>
        </div>
    );
};

export default Nav;