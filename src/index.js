import React from 'react';
import ReactDOM from 'react-dom/client';
//import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
//import { CounterApp } from './components/CounterApp';
//import { HookApp } from './HookApp';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  import { HookApp } from './HookApp';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//      <CounterApp />
//      <CounterWithCustomHook />
//      <FormWithCustomHook />
        <MultipleCustomHooks />
    
);

 