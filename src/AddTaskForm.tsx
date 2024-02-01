import { Dispatch, SetStateAction, useState } from 'react';
import { v1 } from 'uuid';

import { Button } from './Button';
import { TaskPropsType } from './Task';

type TasksPropsType = {
	setRenderTasks: Dispatch<SetStateAction<TaskPropsType[]>>;
};

export function AddTaskForm({ setRenderTasks }: TasksPropsType) {
	const [newTask, setNewTask] = useState<TaskPropsType>({
		id: v1(),
		title: '',
		isDone: false,
	});

	const setInputTask = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewTask({
			...newTask,
			title: e.target.value,
		});
	};

	const addNewTask = () => {
		if (newTask.title) {
			setRenderTasks((prevTasks: TaskPropsType[]) => [...prevTasks, newTask]);
		}
	};

	return (
		<div>
			<input value={newTask.title} onChange={e => setInputTask(e)} />
			<Button title='+' onClick={addNewTask} />
		</div>
	);
}
