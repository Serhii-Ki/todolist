import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import AddItemForm from "../addItemForm/AddItemForm";
import CustomBtn from "../customBtn/CustomBtn";
import EditSpan from "../editSpan/EditSpan";


function TodoList(props) {
  return (
    <Paper sx={{ p: '20px' }}>
      <Box display='flex' flexDirection='column' gap='20px'>
        <EditSpan type='todoList' title='My Todo'/>
        <AddItemForm inputLabel='task'/>
        <Box display='flex' gap='15px'>
          <CustomBtn title='all'/>
          <CustomBtn title='active'/>
          <CustomBtn title='completed'/>
        </Box>
      </Box>
    </Paper>
  );
}

export default TodoList;