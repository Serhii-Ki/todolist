import {TasksType} from "../utils/types";
import {tasksInitial} from "../utils/initialState";
import {TaskActionsType} from "./task-actions";

export const taskReducer = (state: TasksType = tasksInitial, action: TaskActionsType): TasksType => {
  switch (action.type) {
    case "UPDATE-TASK":
      return {
        ...state,
        [action.payload.todoId]: []
      }
    default:
      return state
  }
}