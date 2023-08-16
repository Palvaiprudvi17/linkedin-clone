import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Store from '../src/app/Store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>

    <App />
  
  </Provider>
);



// /in the 10mins 13 seconds we are changing the indexjs in public

//11:34 minutes we are applyed the class in the index.css

//15:40 minutes we are install in the react-routerdom and styled components
// after 20 minutes we are building the login components

// 5hrs 39 minutes we are using the react plaer