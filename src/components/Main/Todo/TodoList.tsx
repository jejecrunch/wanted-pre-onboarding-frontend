import { TodoItem } from './TodoItem';

type TodoListParam = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export function TodoList({ todos, setTodos }: TodoListParam) {
  return (
    <div className="todo-list-container">
      <ul className="list-group mb-0">
        {[...todos].map((v, i) => (
          <TodoItem
            todo={v}
            todos={todos}
            index={i}
            key={v.id}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}
