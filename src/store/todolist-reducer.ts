import {TodoListType} from "../utils/types";
import {todoListInitial} from "../utils/initialState";

export const todolistReducer = (state: TodoListType[] = todoListInitial, action: any): TodoListType[] => {
  switch (action.type) {
    default:
      return state;
  }
}