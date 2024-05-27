import Box from '@mui/material/Box';
import EditSpan from "../editSpan/EditSpan";
import Divider from '@mui/material/Divider';

function Task(props) {
  return (
      <Box>
        <EditSpan type='task' title='my task'/>
        <Divider/>
      </Box>
  );
}

export default Task;