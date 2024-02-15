import { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import ToDoList from './ToDoList';

export type TasksType = {
	title: string;
	isDone: boolean;
	id: string;
};

type TodoListType = {
	id: string;
	title: string;
};

type TasksListType = {
	[key: string]: TasksType[];
};

function App() {
	const todolistId1 = v1();
	const todolistId2 = v1();

	const [todoLists, setTodoLists] = useState<TodoListType[]>([
		{
			id: todolistId1,
			title: 'what to learn',
		},
		{
			id: todolistId2,
			title: 'what to buy',
		},
	]);

	const [allTasks, setAllTasks] = useState<TasksListType>({
		[todolistId1]: [
			{ id: v1(), title: 'HTML&CSS', isDone: true },
			{ id: v1(), title: 'JS', isDone: true },
			{ id: v1(), title: 'ReactJS', isDone: false },
			{ id: v1(), title: 'Rest API', isDone: false },
			{ id: v1(), title: 'GraphQL', isDone: false },
		],
		[todolistId2]: [
			{ id: v1(), title: 'Bread', isDone: true },
			{ id: v1(), title: 'Apple', isDone: true },
			{ id: v1(), title: 'Banana', isDone: false },
		],
	});

	return (
		<div className='App'>
			{todoLists.map(list => (
				<ToDoList key={list.id} title={list.title} tasks={allTasks[list.id]} />
			))}
		</div>
	);
}

export default App;
