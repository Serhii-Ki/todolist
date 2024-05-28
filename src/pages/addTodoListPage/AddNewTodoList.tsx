import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddItemForm from "../../components/addItemForm/AddItemForm";
import {useState} from "react";
import useTodoList from "../../utils/hooks/useTodoList";


function AddNewTodoList() {
  const [todoTittle, setTodoTitle] = useState<string>('');

  const {addTodoList} = useTodoList()

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
    console.log(e.target.value);
  }

  const addNewTodoList = () => {
    if(todoTittle.trim()) {
      addTodoList(todoTittle);
      setTodoTitle('');
    }
  }

  return (
      <Box display='flex' flexDirection='column' justifyItems='center' alignItems='center'>
        <Typography variant="h2" gutterBottom>
          Add new Todo List
        </Typography>
        <AddItemForm
            inputLabel='todo list'
            value={todoTittle}
            onChange={onChangeTitle}
            addItem={addNewTodoList}
        />
      </Box>
  );
}

export default AddNewTodoList;