import { FilterType } from "../pages/main/Main";

export type ActionsTodoListType =
  | RemoveTodoList
  | RemoveTaskType
  | AddTodoListType
  | AddTaskType
  | ChangeCheckedType
  | ChangeFilterType
  | EditTodoListType
  | EditTaskType;

type RemoveTodoList = ReturnType<typeof removeTodoListAC>;

export const removeTodoListAC = (todoId: string) => {
  return {
    type: "REMOVE-TODOLIST",
    payload: {
      todoId,
    },
  } as const;
};

type RemoveTaskType = ReturnType<typeof removeTaskAC>;

export const removeTaskAC = (todoId: string, taskId: string) => {
  return {
    type: "REMOVE-TASK",
    payload: {
      todoId,
      taskId,
    },
  } as const;
};

type AddTodoListType = ReturnType<typeof addTodoListAC>;

export const addTodoListAC = (title: string) => {
  return {
    type: "ADD-TODOLIST",
    payload: {
      title,
    },
  } as const;
};

type AddTaskType = ReturnType<typeof addTaskAC>;

export const addTaskAC = (todoId: string, title: string) => {
  return {
    type: "ADD-TASK",
    payload: {
      todoId,
      title,
    },
  } as const;
};

type ChangeCheckedType = ReturnType<typeof changeCheckedAC>;

export const changeCheckedAC = (todoId: string, taskId: string) => {
  return {
    type: "CHANGE-CHECKED",
    payload: {
      todoId,
      taskId,
    },
  } as const;
};

type ChangeFilterType = ReturnType<typeof changeFilterAC>;

export const changeFilterAC = (todoId: string, filter: FilterType) => {
  return {
    type: "CHANGE-FILTER",
    payload: {
      todoId,
      filter,
    },
  } as const;
};

type EditTodoListType = ReturnType<typeof editTodoAC>;

export const editTodoAC = (todoId: string, title: string) => {
  return {
    type: "EDIT-TODOLIST",
    payload: {
      todoId,
      title,
    },
  } as const;
};

type EditTaskType = ReturnType<typeof editTaskAC>;

export const editTaskAC = (todoId: string, taskId: string, title: string) => {
  return {
    type: "EDIT-TASK",
    payload: {
      todoId,
      taskId,
      title,
    },
  } as const;
};
