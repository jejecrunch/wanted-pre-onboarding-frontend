import { useState } from 'react';
import { Button, Input } from '../../common';
import { deleteTodo, updateTodo } from '../../services';

type TodoItemParam = {
  todo: Todo;
  index: number;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export function TodoItem({ todo, index, todos, setTodos }: TodoItemParam) {
  const [newTodo, setNewTodo] = useState(todo);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo({ ...newTodo, isCompleted: e.target.checked });

    await updateTodo(newTodo.id, {
      todo: newTodo.todo,
      isCompleted: e.target.checked,
    });
  };

  const handleUpdate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const res = await updateTodo(newTodo.id, {
      todo: newTodo.todo,
      isCompleted: newTodo.isCompleted,
    });

    if (res.status === 200) {
      todo.todo = newTodo.todo;
      setIsEdit(false);
    }
  };

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const res = await deleteTodo(newTodo.id);

    if (res.status === 204) {
      setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
    }
  };

  return (
    <li
      className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
      style={{ backgroundColor: '#f4f6f7' }}
    >
      <input
        className="form-check-input me-2"
        type="checkbox"
        value=""
        aria-label="..."
        onChange={handleChange}
        checked={newTodo.isCompleted}
      />
      {isEdit ? (
        <>
          <Input
            label=""
            placeholder="할일을 입력해주세요 ..."
            param={{
              value: newTodo.todo,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                const {
                  target: { value },
                } = e;

                setNewTodo({ ...newTodo, todo: value });
              },
              type: 'text',
              name: 'newTodo',
            }}
            valid={newTodo !== null}
            errMsg=""
          />
          <Button
            type="todo cancel"
            onClick={() => setIsEdit(!isEdit)}
            disabled={false}
          >
            취소
          </Button>
          <Button type="todo modify" onClick={handleUpdate} disabled={false}>
            수정
          </Button>
        </>
      ) : (
        <>
          {newTodo.isCompleted ? <s>{newTodo.todo}</s> : newTodo.todo}{' '}
          <Button
            type="todo modify"
            onClick={() => setIsEdit(!isEdit)}
            disabled={false}
          >
            수정
          </Button>
        </>
      )}

      <Button type="todo delete" onClick={handleDelete} disabled={false}>
        삭제
      </Button>
    </li>
  );
}
