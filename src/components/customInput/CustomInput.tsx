import { TextField, TextFieldProps } from '@mui/material';
import { ChangeEvent } from 'react';

type CustomInputPropsType = {
	placeholder?: string;
	inputValue: string;
	errorEnter?: boolean;
	setInputValue: (title: string) => void;
} & TextFieldProps;

function CustomInput(props: CustomInputPropsType) {
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		props.setInputValue(e.currentTarget.value);
	};
	return (
		<TextField
			id='outlined-basic'
			placeholder={props.placeholder || ''}
			variant='outlined'
			size='small'
			error={props.errorEnter}
			value={props.inputValue}
			onChange={onChangeHandler}
		/>
	);
}

export default CustomInput;
