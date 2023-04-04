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
        <p>{counter}</p>
        <div className='button__cards' >
            <button onClick={handleIncrement} className='button__cards--plusButton'  >+</button>
            <button onClick={handleDecrement} className='button__cards--minusButton' >-</button>
        </div>    
    </>
    
  )
}

export default Counter