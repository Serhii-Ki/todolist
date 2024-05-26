import TodoList from "../../components/todoList/TodoList";
import Box from "@mui/material/Box";


function TodoListsPage(props) {
  return (
      <Box display='flex' gap='40px' flexWrap='wrap'>
        <TodoList/>
        <TodoList/>
        <TodoList/>
        <TodoList/>
        <TodoList/>
      </Box>
  );
}

export default TodoListsPage;