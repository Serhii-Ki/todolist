import { v1 } from "uuid";
import { TodoListType } from "../pages/main/Main";

export const todolistReducer = (
  state: TodoListType[],
  action: TodoListReducerType
): TodoListType[] => {
  switch (action.type) {
    case "REMOVE-TODOLIST": {
      return state.filter((el) => el.id !== action.payload.todoId);
    }
    case "ADD-TODOLIST": {
      return [
        ...state,
        {
          id: v1(),
          title: action.payload.title,
          filter: "all",
          tasks: [],
        },
      ];
    }
    default:
      return state;
  }
};

type TodoListReducerType = RemoveTodoListType | AddTodoListType;

export type RemoveTodoListType = ReturnType<typeof removeTodoList>;

export const removeTodoList = (todoId: string) => {
  return {
    type: "REMOVE-TODOLIST",
    payload: {
      todoId,
    },
  } as const;
};

export type AddTodoListType = ReturnType<typeof addTodoList>;

export const addTodoList = (title: string) => {
  return {
    type: "ADD-TODOLIST",
    payload: {
      title,
    },
  } as const;
};
