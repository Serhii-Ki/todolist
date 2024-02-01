import { useCallback, useEffect, useState } from 'react';
import { AddTaskForm } from './AddTaskForm';
import { Button } from './Button';
import { Task, TaskPropsType } from './Task';
import { ToDoListHeader } from './ToDoListHeader';

type PropsType = {
	title: string;
	tasks: Array<TaskPropsType>;
};

function ToDoList({ tasks, title }: PropsType) {
	const [renderTasks, setRenderTasks] = useState(tasks);
	const [filter, setFilter] = useState('all');

	const removeTask = (id: string) => {
		let filteredTasks = renderTasks.filter(task => task.id !== id);
		setRenderTasks(filteredTasks);
	};

	const filterTasks = (filterTitle: string) => {
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
				<AddTaskForm setRenderTasks={setRenderTasks} />
				<ul>
					{renderTasksElement().map(task => (
						<Task
							key={task.id}
							title={task.title}
							isDone={task.isDone}
							id={task.id}
							removeTask={removeTask}
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
