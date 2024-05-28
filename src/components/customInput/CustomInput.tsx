import TextField, {TextFieldProps} from '@mui/material/TextField';

type CustomInputPropsType = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
} & TextFieldProps

function CustomInput(props: CustomInputPropsType) {
  return (
      <TextField
          autoComplete='false'
          size='small'
          label={props.label}
          variant="outlined"
          value={props.value}
          onChange={props.onChange}
          {...props}
      />
  );
}

export default CustomInput;