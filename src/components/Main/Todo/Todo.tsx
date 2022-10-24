import { useEffect, useState } from 'react';

import { getTodos } from '../../services';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoNav } from './TodoNav';

import './Todo.scss';
import storage from '../../services/store';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../common';

async function getTodoList(
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
) {
  const res = await getTodos();

  if (res.status === 200) setTodos(res.data);
}

export default function Todo() {
  const [todos, setTodos] = useState(new Array<Todo>());

  const navigate = useNavigate();

  const token = storage.get('token');

  useEffect(() => {
    if (!token) {
      alert('로그인 되지 않았습니다 !');
      navigate('/');
    } else getTodoList(setTodos);
  }, [token]);

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <Button
                  type="logout"
                  onClick={() => {
                    alert('로그아웃하시겠습니까?');
                    storage.remove('token');
                    navigate('/');
                  }}
                >
                  Logout
                </Button>
                <TodoForm todos={todos} setTodos={setTodos} />
                <TodoNav todos={todos} setTodos={setTodos} />
                <TodoList todos={todos} setTodos={setTodos} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
