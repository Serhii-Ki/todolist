import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddItemForm from "../../components/addItemForm/AddItemForm";
import useTodoList from "../../utils/hooks/useTodoList";
import TodoListTable from "../../components/todoListTable/TodoListTable";


function AddNewTodoList() {

  const {addTodoList} = useTodoList()

  const addNewTodoList = (title: string) => {
    addTodoList(title);
  }

  return (
      <Box display='flex' flexDirection='column' justifyItems='center' alignItems='center'>
        <Typography variant="h2" gutterBottom>
          Add new Todo List
        </Typography>
        <AddItemForm
            inputLabel='todo list'
            addItem={addNewTodoList}
        />
        <TodoListTable/>
      </Box>
  );
}

export default AddNewTodoList;