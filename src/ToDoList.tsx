import { useState } from 'react';
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

	function removeTask(id: number) {
		let filteredTasks = tasks.filter(task => task.id !== id);
		setRenderTasks(filteredTasks);
	}

	function filterTasks(filterTitle: string) {
		if (filterTitle === 'active') {
			const tasksForTodoList = tasks.filter(task => !task.isDone);
			setRenderTasks(tasksForTodoList);
		}
		if (filterTitle === 'completed') {
			const tasksForTodoList = tasks.filter(task => task.isDone);
			setRenderTasks(tasksForTodoList);
		}
		if (filterTitle === 'all') {
			setRenderTasks(tasks);
		}
	}

	return (
		<div>
			<div>
				<ToDoListHeader title={title} />
				<AddTaskForm />
				<ul>
					{renderTasks.map(task => (
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
