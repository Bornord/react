import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';

import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// Ajout de la version 18 JS
const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
    <App />
);


// Beforeimport { render } from 'react-dom';
// const container = document.getElementById('app');
// render(<App tab="home" />, container);

// Afterimport { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<App tab="home" />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
