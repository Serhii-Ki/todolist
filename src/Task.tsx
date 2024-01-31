import { Button } from './Button';

export type TaskPropsType = {
	title: string;
	isDone: boolean;
	id: number;
	removeTask?: (id: number) => void;
};

export function Task({ title, isDone, id, removeTask }: TaskPropsType) {
	return (
		<li>
			<input type='checkbox' checked={isDone} />
			<span>{title}</span>
			<Button
				onClick={() => removeTask && removeTask(id)}
				title={'✖️'}
			></Button>
		</li>
	);
}
