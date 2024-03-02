import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const el= document.getElementById('root');
ReactDOM.createRoot(el).render(
  <BrowserRouter>
      <App />
    </BrowserRouter>
);
