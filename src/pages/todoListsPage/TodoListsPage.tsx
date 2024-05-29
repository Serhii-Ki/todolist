import TodoList from "../../components/todoList/TodoList";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import {TodoListType} from "../../utils/types";

function TodoListsPage() {
  const todoLists = useSelector<RootStateType, TodoListType[]>(state => state.todoLists);

  return (
    <Box display='flex' gap='40px' flexWrap='wrap'>
      {todoLists.map(todoList =>
          <TodoList
              key={todoList.id}
              title={todoList.title}
              todoId={todoList.id}
              filter={todoList.filter}
          />
      )}
    </Box>
  );
}

export default TodoListsPage;