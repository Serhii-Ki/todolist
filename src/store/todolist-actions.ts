import {FilterType} from "../utils/types";

export type TodoListActionsType = AddTodoListActionType | RemoveTodoListActionType | ChangeFilterActionType;

type AddTodoListActionType = ReturnType<typeof AddTodoListAC>

export const AddTodoListAC = (todoId: string, title: string) => {
  return {
    type: 'ADD-TODO-LIST',
    payload: {
      todoId,
      title
    }
  } as const
}

type RemoveTodoListActionType = ReturnType<typeof RemoveTodoListAC>

export const RemoveTodoListAC = (todoId: string) => {
  return {
    type: 'REMOVE-TODO-LIST',
    payload: {
      todoId
    }
  } as const
}

type ChangeFilterActionType = ReturnType<typeof ChangeFilterAC>

export const ChangeFilterAC = (todoId: string, filter: FilterType) => {
  return {
    type: 'CHANGE-FILTER',
    payload: {
      todoId,
      filter
    }
  } as const
}