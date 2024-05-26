import TextField, {TextFieldProps} from '@mui/material/TextField';

type CustomInputPropsType = {
  label?: string
} & TextFieldProps

function CustomInput(props) {
  return (
      <TextField autoComplete='false' size='small' label={props.label} variant="outlined" />
  );
}

export default CustomInput;