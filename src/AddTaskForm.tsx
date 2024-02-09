import { ChangeEvent, useState } from 'react';

import { Button } from './Button';

type AddTasksPropsType = {
	addNewTask: (newTask: string) => void;
};

export function AddTaskForm({ addNewTask }: AddTasksPropsType) {
	const [newTask, setNewTask] = useState<string>('');
	const [error, setError] = useState<boolean>(false);

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTask(e.currentTarget.value);
		setError(false);
	};

	const addInputForm = () => {
		if (newTask.trim() === '') {
			setError(true);
			return;
		}
		setError(false);
		addNewTask(newTask);
		setNewTask('');
	};

	return (
		<div>
			<input
				value={newTask}
				onChange={onChangeHandler}
				style={error ? { border: '1px solid red' } : {}}
			/>
			<Button title='+' onClick={addInputForm} />
			{error && <div style={{ color: 'red' }}>Error!</div>}
		</div>
	);
}
