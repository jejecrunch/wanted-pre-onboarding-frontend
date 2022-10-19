import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './components';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/todo" element={<></>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
