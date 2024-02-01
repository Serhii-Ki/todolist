import { ChangeEvent, useState } from 'react';

import { Button } from './Button';

type AddTasksPropsType = {
	addNewTask: (newTask: string) => void;
};

export function AddTaskForm({ addNewTask }: AddTasksPropsType) {
	const [newTask, setNewTask] = useState<string>('');

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTask(e.currentTarget.value);
	};

	const addInputForm = () => {
		addNewTask(newTask);
		setNewTask('');
	};

	return (
		<div>
			<input value={newTask} onChange={onChangeHandler} />
			<Button title='+' onClick={addInputForm} />
		</div>
	);
}
