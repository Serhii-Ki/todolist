import AddIcon from '@mui/icons-material/Add';
import CustomBtn from '../customBtn/CustomBtn';
import CustomInput from '../customInput/CustomInput';

import { useState } from 'react';
import styles from './addForm.module.css';

type AddFormType = {
	placeholder?: string;
	addItem: (title: string) => void;
};

function AddForm(props: AddFormType) {
	const [inputValue, setInputValue] = useState('');
	const [errorEnter, setErrorEnter] = useState(false);

	const addItem = () => {
		if (inputValue.trim()) {
			props.addItem(inputValue);
			setInputValue('');
		} else {
			setErrorEnter(true);
			return;
		}
	};

	const OnChangeHandler = (title: string) => {
		setInputValue(title);
		setErrorEnter(false);
	};
	return (
		<div className={styles['add-wrap']}>
			<CustomInput
				setInputValue={OnChangeHandler}
				errorEnter={errorEnter}
				inputValue={inputValue}
				placeholder={props.placeholder}
			/>
			<CustomBtn onClick={addItem} startIcon={<AddIcon />} title='' />
		</div>
	);
}

export default AddForm;
