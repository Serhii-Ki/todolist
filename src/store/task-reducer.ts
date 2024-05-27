import {TasksType} from "../utils/types";
import {tasksInitial} from "../utils/initialState";

export const taskReducer = (state: TasksType = tasksInitial, action: any): TasksType => {
  switch (action.type) {
    default:
      return state
  }
}