import { TextField } from '@mui/material';

type CustomInputPropsType = {
	label?: string;
};

function CustomInput(props: CustomInputPropsType) {
	return (
		<TextField
			id='outlined-basic'
			label={props.label || ''}
			variant='outlined'
		/>
	);
}

export default CustomInput;
