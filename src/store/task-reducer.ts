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
    case "ADD-TASK":
      return {
       ...state,
        [action.payload.todoId]: [...state[action.payload.todoId],
          {
            id: action.payload.taskId,
            title: action.payload.title,
            completed: false
          }
        ]
      }
    case "REMOVE-TASK":
      return {
       ...state,
        [action.payload.todoId]: state[action.payload.todoId].filter(task => task.id!== action.payload.taskId)
      }
    case "CHANGE-COMPLETED":
      return {
       ...state,
        [action.payload.todoId]: state[action.payload.todoId].map(task =>
          task.id === action.payload.taskId
           ? {...task, completed:!task.completed}
            : task
        )
      }
    case "EDIT-TASK":
      return {
       ...state,
        [action.payload.todoId]: state[action.payload.todoId].map(task =>
          task.id === action.payload.taskId
           ? {...task, title: action.payload.title}
            : task
        )
      }
    default:
      return state
  }
}