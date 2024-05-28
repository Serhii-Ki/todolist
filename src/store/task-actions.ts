export type TaskActionsType = UpdateTaskActionsType;

type UpdateTaskActionsType = ReturnType<typeof UpdateTaskAC>;

export const UpdateTaskAC = (todoId: string) => {
  return {
    type: 'UPDATE-TASK',
    payload: {
      todoId
    }
  } as const
}