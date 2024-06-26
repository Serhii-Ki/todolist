export type FilterType = 'all' | 'active' | 'completed';

export type TaskType = {
  id: string
  title: string
  completed: boolean
};

export type TasksType = {
  [key: string]: TaskType[]
};

export type TodoListType = {
  id: string
  title: string
  date: Date
  filter: FilterType
}

export type ViewModeType = 'span' | 'input';