import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
    <App />
  </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);
