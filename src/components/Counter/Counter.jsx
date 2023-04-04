import React from 'react'
import { useState } from 'react';
import "./Counter.scss";




const Counter = () => {
    
    const [ counter, setCounter ] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        setCounter(counter - 1);
    };




  return (
    <>
        <h2 className='counter__header'>Counter</h2>
        <p className='counter'>{counter}</p>
        <div className='button__cards' >
            <button onClick={handleDecrement} className='button__cards--button' >-</button>
            <button onClick={handleIncrement} className='button__cards--button'  >+</button>
        </div>    
    </>
    
  )
}

export default Counter