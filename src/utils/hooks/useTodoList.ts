import {useDispatch} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {AddTodoListAC, ChangeFilterAC, EditTodoTitleAC, RemoveTodoListAC} from "../../store/todolist-actions";
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

  const editTodoList = (todoId: string, title: string) => {
    dispatch(EditTodoTitleAC(todoId, title))
  }

  return {
    addTodoList,
    removeTodoList,
    changeFilter,
    editTodoList
  }
}

export  default useTodoList