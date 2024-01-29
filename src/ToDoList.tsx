import { AddTaskForm } from './AddTaskForm';
import { Button } from './Button';
import { Task } from './Task';
import { ToDoListHeader } from './ToDoListHeader';

type TaskType = {
	id: number;
	title: string;
	isDone: boolean;
};

type PropsType = {
	title: string;
	tasks: Array<TaskType>;
};

function ToDoList({ tasks, title }: PropsType) {
	return (
		<div>
			<div>
				<ToDoListHeader title={title} />
				<AddTaskForm />
				<ul>
					{tasks.map(task => (
						<Task title={task.title} isDone={task.isDone} />
					))}
				</ul>
				<div>
					<Button title='All' />
					<Button title='Active' />
					<Button title='Completed' />
				</div>
			</div>
		</div>
	);
}

export default ToDoList;
