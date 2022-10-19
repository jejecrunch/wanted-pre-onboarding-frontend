import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, Todo } from './components';

const container = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

container.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/todo" element={<Todo />}></Route>
    </Routes>
  </BrowserRouter>
);
