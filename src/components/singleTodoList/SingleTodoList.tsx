import TodoList from "../todoList/TodoList";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import {TodoListType} from "../../utils/types";
import Box from "@mui/material/Box";


function SingleTodoList() {
  const params = useParams();
  const todoLists = useSelector<RootStateType, TodoListType[]>(state => state.todoLists)
  const todoList = todoLists.find(todoList => todoList.id === params.id);
  return (
      <Box display="flex" justifyContent='center' alignItems="center">
        <TodoList todoId={params.id} title={todoList.title} filter={todoList.filter}/>
      </Box>
  );
}

export default SingleTodoList;