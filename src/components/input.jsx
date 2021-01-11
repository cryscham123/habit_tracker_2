import React, { useRef } from 'react';

const Input = (props) => {
    const formRef = useRef();
    const inputRef = useRef();
    const handleAdd = (event) => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    }
    return (
        <form ref={formRef} onSubmit={handleAdd} className="inputForm">
            <label htmlFor="input__input" className="input__label">Habit</label>
            <input ref={inputRef} id="input__input" type="text" placeholder="10 text limits" maxLength="10"></input>
            <button className="input__Btn">Add</button>
        </form>
    );
};

export default Input;
