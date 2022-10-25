import { useState } from 'react';

type TodoNavParam = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export function TodoNav({ todos, setTodos }: TodoNavParam) {
  const base = [...todos];

  const [tabs] = useState([
    {
      name: 'All',
      onClick: () => {
        setTodos(base);
        tabs[0].active = !tabs[0].active;

        if (tabs[0].active) {
          tabs[1].active = false;
          tabs[2].active = false;
        }
      },
      active: true,
    },
    {
      name: 'Active',
      onClick: () => {
        setTodos(base.filter(v => !v.isCompleted));
        tabs[1].active = !tabs[1].active;

        if (tabs[1].active) {
          tabs[0].active = false;
          tabs[2].active = false;
        }
      },
      active: false,
    },
    {
      name: 'Completed',
      onClick: () => {
        setTodos(base.filter(v => v.isCompleted));
        tabs[2].active = !tabs[2].active;

        if (tabs[2].active) {
          tabs[0].active = false;
          tabs[1].active = false;
        }
      },
      active: false,
    },
  ]);

  return (
    <ul className="nav nav-tabs mt-10 mb-4 pb-2">
      {tabs.map(v => (
        <li className="nav-item" key={v.name}>
          <button
            className={v.active ? 'nav-link active' : 'nav-link'}
            onClick={v.onClick}
          >
            {v.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
