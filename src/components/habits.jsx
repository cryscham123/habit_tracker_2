import React from 'react';
import Habit from './habit';

const Habits = (props) => {
    const handleIncrement = (habit) => {
        props.onIncre(habit)
    }
    const handleDecrement = (habit) => {
        props.onDecre(habit)
    }
    const handleDelete = (habit) => {
        props.onDelete(habit)
    }
    return (
        <ul className="habits">
            {props.habits.map(habit => (
                <Habit
                    key={habit.id}
                    habits={habit}
                    onIncre={handleIncrement}
                    onDecre={handleDecrement}
                    onDelete={handleDelete}
                />))}
        </ul>
    );
};

export default Habits;