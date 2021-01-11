import React from 'react';

const Habit = (props) => {
    const handleIncre = () => {
        props.onIncre(props.habits)
    }
    const handleDecre = () => {
        props.onDecre(props.habits)
    }
    const handleDelete = () => {
        props.onDelete(props.habits)
    }
    const {name, count} = props.habits
    return (
        <li className="habit">
            <div className="habit__status">
                <span className="habit__name">{name}</span>
                <p className="count">{count}</p> 
            </div>
            <div className="habit__Btn">
                <button className="controlBtn" onClick={handleIncre}>
                    <i className="fas fa-plus"></i>
                </button>
                <button className="controlBtn" onClick={handleDecre}>
                    <i className="fas fa-minus"></i>
                </button>
                <button className="deleteBtn" onClick={handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </li>
    );
};

export default Habit;