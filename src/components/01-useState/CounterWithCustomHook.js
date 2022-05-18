import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, resetear } = useCounter(10)
  return (
    <>
    <div>Counter With Hook {state} </div>
    <hr/>
    <button onClick={ () => increment(2) } className="btn">+1</button>
    <button onClick={ resetear } className="btn">Reset</button>
    <button onClick={ () => decrement(2) } className="btn">-1</button>
    </>
  )
}
