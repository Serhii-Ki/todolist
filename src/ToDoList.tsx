import { useCallback, useEffect, useState } from 'react';
import { v1 } from 'uuid';

import { AddTaskForm } from './AddTaskForm';
import { Button } from './Button';
import { Task, TaskPropsType } from './Task';
import { ToDoListHeader } from './ToDoListHeader';

type PropsType = {
	title: string;
	tasks: Array<TaskPropsType>;
};

type FilterValuesType = 'all' | 'active' | 'completed';

function ToDoList({ tasks, title }: PropsType) {
	const [renderTasks, setRenderTasks] = useState<Array<TaskPropsType>>(tasks);
	const [filter, setFilter] = useState<FilterValuesType>('all');

	const removeTask = (id: string) => {
		let filteredTasks = renderTasks.filter(task => task.id !== id);
		setRenderTasks(filteredTasks);
	};

	const isCheckedHandler = (id: string) => {
		setRenderTasks(prevTasks =>
			prevTasks.map(task =>
				task.id === id ? { ...task, isDone: !task.isDone } : task
			)
		);
	};

	const addNewTask = (newTask: string) => {
		if (newTask) {
			setRenderTasks([
				...renderTasks,
				{
					id: v1(),
					title: newTask,
					isDone: false,
				},
			]);
		}
	};

	const filterTasks = (filterTitle: FilterValuesType) => {
		setFilter(filterTitle);
	};

	const renderTasksElement = useCallback(() => {
		if (filter === 'active') {
			return renderTasks.filter(task => !task.isDone);
		}
		if (filter === 'completed') {
			return renderTasks.filter(task => task.isDone);
		}
		return renderTasks;
	}, [filter, renderTasks]);

	useEffect(() => {
		renderTasksElement();
	}, [filter, renderTasksElement]);

	return (
		<div>
			<div>
				<ToDoListHeader title={title} />
				<AddTaskForm addNewTask={addNewTask} />
				<ul>
					{renderTasksElement().map(task => (
						<Task
							key={task.id}
							title={task.title}
							isDone={task.isDone}
							id={task.id}
							removeTask={removeTask}
							isCheckedHandler={isCheckedHandler}
						/>
					))}
				</ul>
				<div>
					<Button title='All' onClick={() => filterTasks('all')} />
					<Button title='Active' onClick={() => filterTasks('active')} />
					<Button title='Completed' onClick={() => filterTasks('completed')} />
				</div>
			</div>
		</div>
	);
}

export default ToDoList;
