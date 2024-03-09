import cn from 'classnames';
import CustomBtn from '../customBtn/CustomBtn';
import CustomInput from '../customInput/CustomInput';
import { ModeType } from '../task/Task';

import styles from './editSpan.module.css';

type EditSpanPropsType = {
	title: string;
	isDone?: boolean;
	viewMode: ModeType;
	inputValue: string;
	errorEdit: boolean;
	setInputValue: (title: string) => void;
	setSpanMode: () => void;
	setInputMode: () => void;
	editItem: (title: string) => void;
	setErrorEdit: () => void;
};

function EditSpan(props: EditSpanPropsType) {
	const setViewSpan = () => {
		props.setSpanMode();
	};

	const setInputMode = () => {
		props.setInputMode();
	};

	const editTask = () => {
		if (props.inputValue.trim()) {
			props.editItem(props.inputValue);
			setViewSpan();
		} else {
			props.setErrorEdit();
		}
	};

	const cancelEdit = () => {
		setViewSpan();
		props.setInputValue('');
	};

	const onChangeHandler = (title: string) => {
		props.setInputValue(title);
	};

	return (
		<>
			{props.viewMode === 'span' ? (
				<span
					className={cn({ [styles['done']]: props.isDone })}
					onDoubleClick={setInputMode}
				>
					{props.title}
				</span>
			) : (
				<div>
					<CustomInput
						setInputValue={onChangeHandler}
						inputValue={props.inputValue}
						errorEnter={props.errorEdit}
					/>
					<CustomBtn title='confirm' onClick={editTask} />
					<CustomBtn title='cancel' onClick={cancelEdit} />
				</div>
			)}
		</>
	);
}

export default EditSpan;
