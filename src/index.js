import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'; // importing Redux Provided
import store from './store'; // importing the Redux Store
import { positions, transitions, Provider as AlertProvider } from 'react-alert' // importing the alert functions
import AlertTemplate from 'react-alert-template-basic' // importing the alert template

// setting up options for the alert
const options = {
  timeout: 5000,
  position: positions.TOP_CENTER,
  transition: transitions.SCALE
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>
);