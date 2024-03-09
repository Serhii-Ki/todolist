import { Checkbox } from '@mui/material';
import EditSpan from '../editSpan/EditSpan';

import { useState } from 'react';
import ConfigMenu from '../configMenu/ConfigMenu';
import styles from './task.module.css';

type TaskPropsType = {
	title: string;
	taskId: string;
	isDone: boolean;
	changeChecked: (taskId: string) => void;
	deleteTask: (taskId: string) => void;
	editTask: (taskId: string, title: string) => void;
};

export type ModeType = 'span' | 'input';

function Task(props: TaskPropsType) {
	const [viewMode, setViewMode] = useState<ModeType>('span');
	const [inputValue, setInputValue] = useState<string>('');
	const [errorEdit, setErrorEdit] = useState<boolean>(false);

	const setSpanMode = () => {
		setViewMode('span');
	};

	const setInputMode = () => {
		setViewMode('input');
		setInputValue(props.title);
		setErrorEdit(false);
	};

	const setErrorEditTask = () => {
		setErrorEdit(true);
	};

	const onChangeInput = (title: string) => {
		setInputValue(title);
		setErrorEdit(false);
	};

	const changeChecked = () => {
		props.changeChecked(props.taskId);
	};

	const deleteTask = () => {
		props.deleteTask(props.taskId);
	};

	const editTask = (title: string) => {
		props.editTask(props.taskId, title);
	};
	return (
		<li className={styles['task-wrap']}>
			{viewMode === 'span' && (
				<Checkbox checked={props.isDone} onChange={changeChecked} />
			)}
			<EditSpan
				title={props.title}
				isDone={props.isDone}
				viewMode={viewMode}
				inputValue={inputValue}
				errorEdit={errorEdit}
				setSpanMode={setSpanMode}
				setInputMode={setInputMode}
				setInputValue={onChangeInput}
				setErrorEdit={setErrorEditTask}
				editItem={editTask}
			/>
			{viewMode === 'span' && (
				<ConfigMenu deleteItem={deleteTask} setInputMode={setInputMode} />
			)}
		</li>
	);
}

export default Task;
