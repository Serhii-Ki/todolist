import {TodoListType} from "../utils/types";
import {todoListInitial} from "../utils/initialState";
import {TodoListActionsType} from "./todolist-actions";

export const todolistReducer = (state: TodoListType[] = todoListInitial, action: TodoListActionsType): TodoListType[] => {
  switch (action.type) {
    case "ADD-TODO-LIST":
      return [
       ...state,
        {
          id: action.payload.todoId,
          title: action.payload.title,
          filter: 'all'
        }
      ];
    case "REMOVE-TODO-LIST":
      return state.filter(todoList => todoList.id!== action.payload.todoId);
    case "CHANGE-FILTER":
      return state.map(todoList =>
          todoList.id === action.payload.todoId
              ? {...todoList, filter: action.payload.filter}
              : todoList);
    default:
      return state;
  }
}