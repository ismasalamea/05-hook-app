import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { CounterApp } from './components/CounterApp';
//import { HookApp } from './HookApp';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  import { HookApp } from './HookApp';
import { SimpleForm } from './components/02-useEffect/SimpleForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<CounterApp />
//    <CounterWithCustomHook />
        <SimpleForm />
    
);

 