import { useEffect, useState } from 'react';

import { getTodos } from '../../services';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoNav } from './TodoNav';

import './Todo.scss';
import storage from '../../services/store';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../common';

let base: Todo[] = [];

type getTodoListParam = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  selected: Selected;
};

async function getTodoList({ setTodos, selected }: getTodoListParam) {
  const res = await getTodos();

  if (res.status === 200) {
    switch (selected.cur) {
      case 'Active':
        setTodos([...base].filter(v => !v.isCompleted));
        break;
      case 'Completed':
        setTodos([...base].filter(v => v.isCompleted));
        break;
      default:
        setTodos([...res.data]);
        base = [...res.data];
    }
  }
}

export default function Todo() {
  const [todos, setTodos] = useState(new Array<Todo>());
  const [selected, setSelected] = useState({ prev: 'All', cur: 'All' });

  const navigate = useNavigate();

  const token = storage.get('token');

  useEffect(() => {
    if (!token) {
      alert('로그인 되지 않았습니다 !');
      navigate('/');
    } else {
      getTodoList({ setTodos: setTodos, selected: selected });
    }
  }, [token]);

  useEffect(() => {
    getTodoList({ setTodos: setTodos, selected: selected });
  }, [selected]);

  console.log(todos, base);

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <div className="d-grid gap-2 mt-3 mb-3 justify-content-end">
                  <Button
                    type="logout"
                    onClick={() => {
                      console.log('!!!');
                      confirm('로그아웃하시겠습니까?');
                      storage.remove('token');
                      navigate('/');
                    }}
                    disabled={false}
                  >
                    Logout
                  </Button>
                </div>
                <TodoForm todos={todos} setTodos={setTodos} />
                <TodoNav selected={selected} setSelected={setSelected} />
                <TodoList
                  todos={todos}
                  setTodos={setTodos}
                  selected={selected}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
