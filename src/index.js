import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
/*   <React.StrictMode>
    <App />  //& se quita <React.StrictMode> para que no recargué dos veces y me pueda guardar el estado de los arreglos en el localStorage.
  </React.StrictMode> */
  <App />
);
