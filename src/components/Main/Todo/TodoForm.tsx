import { useInput } from '../../../hooks';
import { Button, Input } from '../../common';
import { addTodo } from '../../services';

type TodoFormParam = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export function TodoForm({ todos, setTodos }: TodoFormParam) {
  const newTodo = useInput({
    initVal: '',
    validation: v => typeof v === 'string',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await addTodo(newTodo.value);

    if (res.status === 201) {
      setTodos([...todos, res.data]);
      newTodo.onReset();
    } else {
      console.log(res);
    }
  };

  return (
    <form
      className="d-flex flex-row justify-content-center align-items-center mb-4"
      onSubmit={handleSubmit}
    >
      <Input
        label=""
        placeholder="할일을 입력해주세요"
        param={{
          value: newTodo.value,
          onChange: newTodo.onChange,
          type: 'text',
          name: 'newTodo',
        }}
        valid={newTodo.valid}
        errMsg=""
      />

      <Button type="todo" onClick={undefined} disabled={false}>
        {' '}
        +{' '}
      </Button>
    </form>
  );
}
