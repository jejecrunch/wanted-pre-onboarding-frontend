import { useState } from 'react';

type TodoNavParam = {
  selected: { prev: string; cur: string };
  setSelected: React.Dispatch<
    React.SetStateAction<{ prev: string; cur: string }>
  >;
};

export default function TodoNav({ selected, setSelected }: TodoNavParam) {
  let pre = 'All';
  const [tabs] = useState([
    {
      name: 'All',
      onClick: () => {
        setSelected({ prev: pre, cur: 'All' });
        pre = 'All';
      },
    },
    {
      name: 'Active',
      onClick: () => {
        setSelected({ prev: pre, cur: 'Active' });
        pre = 'Active';
      },
    },
    {
      name: 'Completed',
      onClick: () => {
        setSelected({ prev: pre, cur: 'Completed' });
        pre = 'Completed';
      },
    },
  ]);

  return (
    <ul className="nav nav-tabs mt-10 mb-4 pb-2">
      {tabs.map(v => (
        <li className="nav-item" key={v.name}>
          <button
            className={selected.cur === v.name ? 'nav-link active' : 'nav-link'}
            onClick={v.onClick}
          >
            {v.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
