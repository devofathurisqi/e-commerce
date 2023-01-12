import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"

import { store } from "./redux/store"
import { Provider } from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bulma/css/bulma.css"
import "../node_modules/font-awesome/css/font-awesome.min.css"
import 'react-loading-skeleton/dist/skeleton.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

