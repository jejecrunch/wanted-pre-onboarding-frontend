import ReactDOM from 'react-dom/client';
import './index.scss';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Main, Todo } from './components';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/todo" element={<Todo />}></Route>
    </Routes>
  </HashRouter>
);

reportWebVitals();
