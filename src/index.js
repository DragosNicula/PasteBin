import React from 'react'
import ReactDOM from 'react-dom/client'
import PasteBin  from './PasteBin'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <br></br>
      <h1>PasteBin Project</h1>
      <PasteBin />
    </BrowserRouter>
)