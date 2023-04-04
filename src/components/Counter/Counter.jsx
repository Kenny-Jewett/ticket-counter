import React from 'react'
import { useState } from 'react';




const Counter = (props) => {
    const { counterId } = props;
    const [ counter, setCounter ] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleDecrement = () => {
        setCounter(counter - 1);
    }




  return (
    <>
        <p>{counter}</p>
        <div className='button__cards' key={counterId}>
            <button onClick={handleIncrement} className='button__cards--plusButton' key={counterId} >+</button>
            <button onClick={handleDecrement} className='button__cards--minusButton' key={counterId}>-</button>
        </div>    
    </>
    
  )
}

export default Counter