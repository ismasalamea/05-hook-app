import React, { useState } from 'react'

export const useCounter = (initialstate = 100) => {
  const [state, setState] = useState(initialstate);
  
  const increment = (factor = 1 ) => {
      setState(state + factor);
  }
  
  const decrement = (factor = 1) => {
      setState(state - factor);
  }
  const resetear = () => {
      setState(initialstate)
  }
  return {
      state,
      increment,
      decrement,
      resetear
  };
}
