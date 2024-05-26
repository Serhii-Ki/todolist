import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddItemForm from "../../components/addItemForm/AddItemForm";


function AddNewTodoList(props) {
  return (
      <Box display='flex' flexDirection='column' justifyItems='center' alignItems='center'>
        <Typography variant="h2" gutterBottom>
          Add new Todo List
        </Typography>
        <AddItemForm inputLabel='todo list'/>
      </Box>
  );
}

export default AddNewTodoList;