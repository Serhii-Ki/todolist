import { TextField, TextFieldProps } from '@mui/material';

type CustomInputPropsType = {
	placeholder?: string;
} & TextFieldProps;

function CustomInput(props: CustomInputPropsType) {
	return (
		<TextField
			id='outlined-basic'
			placeholder={props.placeholder || ''}
			variant='outlined'
			size='small'
		/>
	);
}

export default CustomInput;
