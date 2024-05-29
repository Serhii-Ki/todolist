import {useDispatch} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {AddTaskAC, ChangeCompletedAC, EditTaskAC, RemoveTaskAC} from "../../store/task-actions";


function useTask() {
  const dispatch = useDispatch();

  const addTask = (todoId: string, title: string) => {
    const taskId: string = uuidv4();
    dispatch(AddTaskAC(todoId, taskId, title))
  }

  const removeTask = (todoId: string, taskId: string) => {
    dispatch(RemoveTaskAC(todoId, taskId))
  }

  const changeCompleted = (todoId: string, taskId: string) => {
    dispatch(ChangeCompletedAC(todoId, taskId))
  }

  const editTask = (todoId: string, taskId: string, title: string) => {
    dispatch(EditTaskAC(todoId, taskId, title))
  }

  return {
    addTask,
    removeTask,
    changeCompleted,
    editTask
  }
}

export default useTask;