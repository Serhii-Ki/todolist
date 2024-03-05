import { useState } from 'react';
import { v1 } from 'uuid';

type TodoListType = {
	id: string;
	title: string;
};

type TaskType = {
	id: string;
	title: string;
	isDone: boolean;
};

type TasksType = {
	[key: string]: TaskType[];
};

const firstId = v1();
const secondId = v1();

const todoLists: TodoListType[] = [
	{
		id: firstId,
		title: 'What to learn',
	},
	{
		id: secondId,
		title: 'What to buy',
	},
];

const tasks: TasksType = {
	[firstId]: [
		{
			id: v1(),
			title: 'HTML',
			isDone: true,
		},
		{
			id: v1(),
			title: 'CSS',
			isDone: true,
		},
		{
			id: v1(),
			title: 'JavaScript',
			isDone: false,
		},
		{
			id: v1(),
			title: 'React',
			isDone: false,
		},
	],
	[secondId]: [
		{
			id: v1(),
			title: 'Milk',
			isDone: false,
		},
		{
			id: v1(),
			title: 'Bread',
			isDone: true,
		},
		{
			id: v1(),
			title: 'Banana',
			isDone: false,
		},
	],
};

function Main() {
	const [todoList, setTodoList] = useState<TodoListType[]>(todoLists);
	const [task, setTask] = useState<TasksType>(tasks);
	return <div></div>;
}

export default Main;
