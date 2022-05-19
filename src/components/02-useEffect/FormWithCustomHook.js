import React, { useState } from 'react'
import { useForm } from '../../00-hooks/useForm';
import './effects.css'


export const FormWithCustomHook = () => {

const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
});

const handleSubmit = (e) => {
    e.preventDefault();
    alert('Se guardo');
    console.log(formValues);
} 

const { name, email, password } = formValues;

    return (
        <form onSubmit={ handleSubmit }>
        <h1>FormWithCustomHook</h1>
            <hr />

            <div className="form-group">Nombre:
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">Email:
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">Password:
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="****"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>
            <hr/>
        <button type='submit' className='btn btn-primary'>
            Guardar
        </button>
  

      </form>
    
  )
}
