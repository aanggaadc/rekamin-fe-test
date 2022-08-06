import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import Axios from 'axios'
Axios.defaults.baseURL = "https://todos-project-api.herokuapp.com/"
Axios.defaults.headers.common['AUTHORIZATION'] = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0MjgsImV4cCI6MTY2MDE1MzMzOH0.0AydXnd7QfPubzAFrDxkek1JOkBsPkH68KdUWYdrY1k'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

