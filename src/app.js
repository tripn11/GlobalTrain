import "core-js/stable"; //to replace babel/polyfill
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store'
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/style.scss';

import AppRouter from './routers/AppRouter';
import LoadingPage from './components/landing/Loading'


const App = () => { 
  return store.getState().auth.loading ? <LoadingPage /> : (
  <Provider store={store}>
    <AppRouter />  
  </Provider>
  )    
}

const root = createRoot(document.getElementById('app')); 
root.render(<App />)