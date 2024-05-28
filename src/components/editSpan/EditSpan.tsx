import Box from "@mui/material/Box";
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

type EditSpanPropsType = {
  type: 'todoList' | 'task'
  title: string
  completed?: boolean
  removeItem: () => void
}


function EditSpan(props: EditSpanPropsType) {

  const Span = () => {
    return (
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Box display='flex' gap='5px' alignItems='center'>
            {props.type === 'task' && <Checkbox checked={props.completed}/>}
            <Typography variant={props.type === 'task' ? "subtitle1" : "h4"} display="block">
              {props.title}
            </Typography>
          </Box>
          <Box display='flex' gap='5px' alignItems='center'>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={props.removeItem}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
    );
  }
  return (
      <Span/>
  );
}

export default EditSpan;