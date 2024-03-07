import { Container } from '@mui/material';
import { useState } from 'react';
import { v1 } from 'uuid';
import AddForm from '../../components/addForm/AddForm';
import TodoList from '../../components/todoList/TodoList';

import styles from './main.module.css';

type FilterType = 'all';

type TodoListType = {
	id: string;
	title: string;
	filter: FilterType;
};

export type TaskType = {
	id: string;
	title: string;
	isDone: boolean;
};

export type TasksType = {
	[key: string]: TaskType[];
};

const firstId = v1();
const secondId = v1();

const todoLists: TodoListType[] = [
	{
		id: firstId,
		title: 'What to learn',
		filter: 'all',
	},
	{
		id: secondId,
		title: 'What to buy',
		filter: 'all',
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

	return (
		<Container>
			<div className={styles['main-wrap']}>
				<h2>Add new todo list</h2>
				<AddForm placeholder='enter your todo' />
				<div className={styles['todo-wrap']}>
					{todoList.map(el => {
						return (
							<TodoList
								key={el.id}
								todoListId={el.id}
								tasks={task[el.id]}
								title={el.title}
							/>
						);
					})}
				</div>
			</div>
		</Container>
	);
}

export default Main;
