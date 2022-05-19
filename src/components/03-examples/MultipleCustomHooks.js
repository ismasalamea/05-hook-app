import React from 'react'
import { useFetch } from '../../00-hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {
  
  const state = useFetch('https://www.breakingbadapi.com/api/quotes/1')
  
  return (
    <div>
        <h1>Breaking Bad Quotes</h1>
        <hr/>

        <div className="alert alert-info text-center">
          Loading ...
        </div>
        <blockquote className='blockquote text-right'>
          <p className='mb-0'>Hola Mundo</p>
          
          
        </blockquote>
        <footer className="blockquote-footer">Ismael</footer>
    </div>
  )
}
