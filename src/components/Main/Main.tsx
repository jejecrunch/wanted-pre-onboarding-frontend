import { useState } from 'react';
import './Main.scss';
import { Login, Signup } from '.';

export default function Main() {
  const [mode, setMode] = useState('login');

  const changeMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
  };

  return mode === 'login' ? (
    <Login changeMode={changeMode} />
  ) : (
    <Signup changeMode={changeMode} />
  );
}
