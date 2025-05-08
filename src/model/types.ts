export type Column = {
  id: string;
  name: string;
  tasks: Task[];
};

export type Task = {
  id: string;
  title: string;
  priorityLevel: string;
  taskCategory: string;
};

export type Signup = {
  email: string;
  password: string;
};

export type Login = {
  email: string;
  password: string;
};

export type User = {
  user_id: string;
  email: string;
  password: string;
  created_at: string;
};
