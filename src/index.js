import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, HashRouter, Router } from 'react-router-dom';
import { HashRouter as router} from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <HashRouter>
    <HashRouter>
      <Route path = "/" element = {<App />} ></Route>
    </HashRouter>
  //</HashRouter>
);

