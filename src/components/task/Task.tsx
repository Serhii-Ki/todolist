import Box from '@mui/material/Box';
import EditSpan from "../editSpan/EditSpan";
import Divider from '@mui/material/Divider';

type TaskPropsType = {
  title: string
  completed: boolean
}

function Task(props: TaskPropsType) {
  return (
      <Box>
        <EditSpan type='task' title={props.title} completed={props.completed}/>
        <Divider/>
      </Box>
  );
}

export default Task;