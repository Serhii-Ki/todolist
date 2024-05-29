import Box from "@mui/material/Box";
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {ViewModeType} from "../../utils/types";
import CustomInput from "../customInput/CustomInput";
import {useState} from "react";
import CustomBtn from "../customBtn/CustomBtn";

type EditSpanPropsType = {
  type: 'todoList' | 'task'
  title: string
  completed?: boolean
  removeItem: () => void
  setNewTitle: (title: string) => void
  onChangeCompleted?: () => void
}


function EditSpan(props: EditSpanPropsType) {
  const [viewMod, setViewMode] = useState<ViewModeType>('span');
  const [title, setTitle] = useState<string>(props.title);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  const setSpanMode = () => {
    setViewMode('span');
    setTitle(props.title)
  }

  const setInputMode = () => {
    setViewMode('input');
  }

  const setNewTitle = () => {
    if(title.trim()){
      props.setNewTitle(title)
      setSpanMode()
    }
  }

  const SpanMode = () => {
    return (
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Box display='flex' gap='5px' alignItems='center'>
            {props.type === 'task' && <Checkbox checked={props.completed} onChange={props.onChangeCompleted}/>}
            <Typography
                variant={props.type === 'task' ? "subtitle1" : "h4"}
                display="block"
                onDoubleClick={setInputMode}
            >
              {props.title}
            </Typography>
          </Box>
          <Box display='flex' gap='5px' alignItems='center'>
            <IconButton aria-label="edit" onClick={setInputMode}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={props.removeItem}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
    );
  }

  const InputMode = () => {
    return (
        <Box display='flex' flexDirection='column' gap='10px' justifyContent='center' width='90%'>
          <CustomInput value={title} onChange={onChangeTitle} autoFocus={true}/>
          <Box display='flex' justifyContent='space-around'>
            <CustomBtn title='confirm' onClick={setNewTitle}/>
            <CustomBtn title='cancel' onClick={setSpanMode}/>
          </Box>
        </Box>
    )
  }

  return (
      viewMod === 'span'
       ? <SpanMode/>
       : <InputMode/>
  )
}

export default EditSpan;