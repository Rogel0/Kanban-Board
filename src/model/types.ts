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
