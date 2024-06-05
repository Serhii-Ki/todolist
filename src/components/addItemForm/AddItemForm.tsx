import {useState} from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CustomInput from "../customInput/CustomInput";

type AddItemFormPropsType = {
  inputLabel: string
  addItem: (title: string) => void
}

function AddItemForm(props: AddItemFormPropsType) {
  const [value, setValue] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsError(false);
  };

  const addNewItem = () => {
    if(value.trim()){
      props.addItem(value);
      setValue('');
    } else {
      setIsError(true)
    }
  };

  return (
      <Box display="flex" alignItems="center" gap={2}>
        <CustomInput
            error={isError}
            label={props.inputLabel}
            value={value}
            onChange={onChange}
        />
        <IconButton aria-label="add" onClick={addNewItem}>
          <AddIcon />
        </IconButton>
      </Box>
  );
}

export default AddItemForm;