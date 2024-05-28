import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CustomInput from "../customInput/CustomInput";

type AddItemFormPropsType = {
  inputLabel: string
  value: string
  addItem: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function AddItemForm(props: AddItemFormPropsType) {
  return (
      <Box display="flex" alignItems="center" gap={2}>
        <CustomInput label={props.inputLabel} value={props.value} onChange={props.onChange}/>
        <IconButton aria-label="add" onClick={props.addItem}>
          <AddIcon />
        </IconButton>
      </Box>
  );
}

export default AddItemForm;