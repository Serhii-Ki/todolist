export type TaskActionsType =
    UpdateTaskActionsType
    | AddTaskActionsType
    | RemoveTaskActionsType
    | ChangeCompletedActionsType
    | EditTaskTitleActionsType;

type UpdateTaskActionsType = ReturnType<typeof UpdateTaskAC>;

export const UpdateTaskAC = (todoId: string) => {
  return {
    type: 'UPDATE-TASK',
    payload: {
      todoId
    }
  } as const
}

type AddTaskActionsType = ReturnType<typeof AddTaskAC>

export const AddTaskAC = (todoId: string, taskId: string, title: string) => {
  return {
    type: 'ADD-TASK',
    payload: {
      todoId,
      taskId,
      title
    }
  } as const
}

type RemoveTaskActionsType = ReturnType<typeof RemoveTaskAC>

export const RemoveTaskAC = (todoId: string, taskId: string) => {
  return {
    type: 'REMOVE-TASK',
    payload: {
      todoId,
      taskId
    }
  } as const
}

type ChangeCompletedActionsType = ReturnType<typeof ChangeCompletedAC>

export const ChangeCompletedAC = (todoId: string, taskId: string) => {
  return {
    type: 'CHANGE-COMPLETED',
    payload: {
      todoId,
      taskId
    }
  } as const
}

type EditTaskTitleActionsType = ReturnType<typeof EditTaskAC>

export const EditTaskAC = (todoId: string, taskId: string, title: string) => {
  return {
    type: 'EDIT-TASK',
    payload: {
      todoId,
      taskId,
      title
    }
  } as const
}