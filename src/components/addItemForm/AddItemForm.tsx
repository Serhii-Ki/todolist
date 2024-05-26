import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CustomInput from "../customInput/CustomInput";

type AddItemFormPropsType = {
  inputLabel: string
}

function AddItemForm(props: AddItemFormPropsType) {
  return (
      <Box display="flex" alignItems="center" gap={2}>
        <CustomInput label={props.inputLabel}/>
        <IconButton aria-label="add">
          <AddIcon />
        </IconButton>
      </Box>
  );
}

export default AddItemForm;