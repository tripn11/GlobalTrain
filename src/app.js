import "core-js/stable"; //to replace babel/polyfill
import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/style.scss';

import Globaltrain from './components/Globaltrain'


const App = () => (    
  <Globaltrain />  
)

const root = createRoot(document.getElementById('app')); 
root.render(<App />)