type User = {
  email: string | null | undefined;
  password: string | null | undefined;
};

type TodoParam = {
  todo: string;
  isCompleted: boolean;
};

type Todo = {
  id: number;
  userId: number;
} & TodoParam;
