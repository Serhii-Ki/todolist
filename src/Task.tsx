import { useState } from 'react';
import { TasksType } from './App';
import { Button } from './Button';

export type TaskPropsType = {
	removeTask?: (id: string) => void;
	isCheckedHandler?: (id: string) => void;
	changeTaskTitle?: (id: string, newTitle: string) => void;
} & TasksType;

export function Task({
	title,
	isDone,
	id,
	removeTask,
	isCheckedHandler,
	changeTaskTitle,
}: TaskPropsType) {
	const [inputEditText, setInputEditText] = useState<string>('');
	const [activeInput, setActiveInput] = useState(false);

	return (
		<li>
			<input
				type='checkbox'
				checked={isDone}
				onChange={() => isCheckedHandler && isCheckedHandler(id)}
			/>
			<span className={isDone ? 'task-done' : ''}>{title}</span>
			<input
				className={activeInput ? '' : 'input-edit input-non'}
				type='text'
				value={inputEditText}
				onChange={e => setInputEditText(e.currentTarget.value)}
			/>
			<Button
				className={activeInput ? '' : 'confirm-none'}
				title='confirm'
				onClick={() => {
					changeTaskTitle && changeTaskTitle(id, inputEditText);
					setInputEditText('');
					setActiveInput(false);
				}}
			/>
			<Button
				className={activeInput ? 'edit-none' : ''}
				title='&#9998;'
				onClick={() => {
					setActiveInput(true);
				}}
			/>
			<Button
				onClick={() => removeTask && removeTask(id)}
				title={'✖️'}
			></Button>
		</li>
	);
}
