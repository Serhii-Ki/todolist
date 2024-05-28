import {useDispatch} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {AddTodoListAC, ChangeFilterAC, RemoveTodoListAC} from "../../store/todolist-actions";
import {UpdateTaskAC} from "../../store/task-actions";
import {FilterType} from "../types";

function useTodoList() {
  const dispatch = useDispatch()

  const addTodoList = (title: string) => {
    const todoId: string = uuidv4();
    dispatch(AddTodoListAC(todoId, title));
    dispatch(UpdateTaskAC(todoId));
  }

  const removeTodoList = (todoId: string) => {
    dispatch(RemoveTodoListAC(todoId));
  }

  const changeFilter = (todoId: string, filter: FilterType) => {
    dispatch(ChangeFilterAC(todoId, filter))
  }

  return {
    addTodoList,
    removeTodoList,
    changeFilter
  }
}

export  default useTodoList