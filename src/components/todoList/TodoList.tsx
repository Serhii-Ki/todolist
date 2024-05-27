import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import AddItemForm from "../addItemForm/AddItemForm";
import CustomBtn from "../customBtn/CustomBtn";
import EditSpan from "../editSpan/EditSpan";
import Task from "../task/Task";
import {useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import {TasksType} from "../../utils/types";

type TodoListPropsType = {
  todoId: string
  title: string;
}

function TodoList(props: TodoListPropsType) {
  const tasks = useSelector<RootStateType, TasksType>(state => state.tasks);

  return (
    <Paper sx={{ p: '20px' }}>
      <Box display='flex' flexDirection='column' gap='20px'>
        <EditSpan type='todoList' title={props.title}/>
        <AddItemForm inputLabel='add task'/>
        {tasks[props.todoId].map(task =>
            <Task
              key={task.id}
              title={task.title}
              completed={task.completed}
            />
        )}
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