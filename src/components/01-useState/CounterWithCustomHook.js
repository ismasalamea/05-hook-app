import React from 'react';
import { useCounter } from '../../00-hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, resetear } = useCounter(10)
  const valor = 3;
  return (
    <>
    <div>Counter With Hook {state} </div>
    <hr/>
    <button onClick={ () => increment(valor) } className="btn">+1</button>
    <button onClick={ resetear } className="btn">Reset</button>
    <button onClick={ () => decrement(valor) } className="btn">-1</button>
    </>
  )
}
