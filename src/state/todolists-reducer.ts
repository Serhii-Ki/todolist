import { v1 } from "uuid";
import { TaskType, TodoListType } from "../pages/main/Main";
import { ActionsTodoListType } from "./actions";

export const todolistReducer = (
  state: TodoListType[],
  action: ActionsTodoListType
): TodoListType[] => {
  switch (action.type) {
    case "REMOVE-TODOLIST": {
      return state.filter((el) => el.id !== action.payload.todoId);
    }

    case "REMOVE-TASK": {
      return state.map((el) =>
        el.id === action.payload.todoId
          ? {
              ...el,
              tasks: el.tasks.filter((el) => el.id !== action.payload.taskId),
            }
          : el
      );
    }

    case "ADD-TODOLIST": {
      const newTodoList: TodoListType = {
        id: v1(),
        title: action.payload.title,
        filter: "all",
        tasks: [],
      };
      return [...state, newTodoList];
    }

    case "ADD-TASK": {
      const newTask: TaskType = {
        id: v1(),
        title: action.payload.title,
        isDone: false,
      };
      return state.map((el) =>
        el.id === action.payload.todoId
          ? { ...el, tasks: [...el.tasks, newTask] }
          : el
      );
    }

    case "CHANGE-CHECKED": {
      return state.map((el) =>
        el.id === action.payload.todoId
          ? {
              ...el,
              tasks: el.tasks.map((el) =>
                el.id === action.payload.taskId
                  ? { ...el, isDone: !el.isDone }
                  : el
              ),
            }
          : el
      );
    }

    case "CHANGE-FILTER": {
      return state.map((el) =>
        el.id === action.payload.todoId
          ? { ...el, filter: action.payload.filter }
          : el
      );
    }

    case "EDIT-TODOLIST": {
      return state.map((el) =>
        el.id === action.payload.todoId
          ? { ...el, title: action.payload.title }
          : el
      );
    }

    case "EDIT-TASK": {
      return state.map((el) =>
        el.id === action.payload.todoId
          ? {
              ...el,
              tasks: el.tasks.map((el) =>
                el.id === action.payload.taskId
                  ? { ...el, title: action.payload.title }
                  : el
              ),
            }
          : el
      );
    }

    default:
      return state;
  }
};
