export type ActionsTodoListType = RemoveTodoList | RemoveTaskType;

type RemoveTodoList = ReturnType<typeof removeTodoList>;

export const removeTodoList = (todoId: string) => {
  return {
    type: "REMOVE-TODOLIST",
    payload: {
      todoId,
    },
  } as const;
};

type RemoveTaskType = ReturnType<typeof removeTask>;

export const removeTask = (todoId: string, taskId: string) => {
  return {
    type: "REMOVE-TASK",
    payload: {
      todoId,
      taskId,
    },
  };
};
