import { TasksType } from './App';
import { Button } from './Button';

export type TaskPropsType = {
	removeTask?: (id: string) => void;
	isCheckedHandler?: (id: string) => void;
} & TasksType;

export function Task({
	title,
	isDone,
	id,
	removeTask,
	isCheckedHandler,
}: TaskPropsType) {
	return (
		<li className={isDone ? 'task-done' : ''}>
			<input
				type='checkbox'
				checked={isDone}
				onChange={() => isCheckedHandler && isCheckedHandler(id)}
			/>
			<span>{title}</span>
			<Button
				onClick={() => removeTask && removeTask(id)}
				title={'✖️'}
			></Button>
		</li>
	);
}
