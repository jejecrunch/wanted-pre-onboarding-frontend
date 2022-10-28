type User = {
  email: string | null;
  password: string | null;
};

type TodoParam = {
  todo: string;
  isCompleted: boolean;
};

type Todo = {
  id: number;
  userId: number;
} & TodoParam;
