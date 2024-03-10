import { Container } from '@mui/material';
import { useState } from 'react';
import { v1 } from 'uuid';
import AddForm from '../../components/addForm/AddForm';
import TodoList from '../../components/todoList/TodoList';

import styles from './main.module.css';

export type FilterType = 'all' | 'active' | 'completed';

type TodoListType = {
	id: string;
	title: string;
	filter: FilterType;
	tasks: TaskType[];
};

export type TaskType = {
	id: string;
	title: string;
	isDone: boolean;
};

const todoLists: TodoListType[] = [
	{
		id: v1(),
		title: 'What to learn',
		filter: 'all',
		tasks: [
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
	},
	{
		id: v1(),
		title: 'What to buy',
		filter: 'all',
		tasks: [
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
	},
];

function Main() {
	const [todoList, setTodoList] = useState<TodoListType[]>(todoLists);

	const addTask = (todoListId: string, title: string) => {
		const newTask: TaskType = {
			id: v1(),
			title: title,
			isDone: false,
		};

		setTodoList(
			todoList.map(el =>
				el.id === todoListId ? { ...el, tasks: [...el.tasks, newTask] } : el
			)
		);
	};

	const addTodoList = (title: string) => {
		const newTodoLIst: TodoListType = {
			id: v1(),
			title: title,
			filter: 'all',
			tasks: [],
		};
		setTodoList([...todoList, newTodoLIst]);
	};

	const changeChecked = (todoId: string, taskId: string) => {
		setTodoList(
			todoList.map(el =>
				el.id === todoId
					? {
							...el,
							tasks: el.tasks.map(el =>
								el.id === taskId ? { ...el, isDone: !el.isDone } : el
							),
					  }
					: el
			)
		);
	};

	const changeFilter = (todoId: string, filter: FilterType) => {
		setTodoList(
			todoList.map(el => (el.id === todoId ? { ...el, filter: filter } : el))
		);
	};

	const deleteTodo = (todoId: string) => {
		setTodoList(todoList.filter(el => el.id !== todoId));
	};

	const deleteTask = (todoId: string, taskId: string) => {
		setTodoList(
			todoList.map(el =>
				el.id === todoId
					? { ...el, tasks: el.tasks.filter(el => el.id !== taskId) }
					: el
			)
		);
	};

	const editTask = (todoId: string, taskId: string, title: string) => {
		setTodoList(
			todoList.map(el =>
				el.id === todoId
					? {
							...el,
							tasks: el.tasks.map(el =>
								el.id === taskId ? { ...el, title: title } : el
							),
					  }
					: el
			)
		);
	};

	const editTodo = (todoId: string, title: string) => {
		setTodoList(
			todoList.map(el => (el.id === todoId ? { ...el, title: title } : el))
		);
	};

	return (
		<Container>
			<div className={styles['main-wrap']}>
				<h2>Add new todo list</h2>
				<AddForm addItem={addTodoList} placeholder='enter your todo' />
				<div className={styles['todo-wrap']}>
					{todoList.map(el => {
						return (
							<TodoList
								key={el.id}
								todoListId={el.id}
								tasks={el.tasks}
								title={el.title}
								filter={el.filter}
								addTask={addTask}
								changeChecked={changeChecked}
								changeFilter={changeFilter}
								deleteTodo={deleteTodo}
								deleteTask={deleteTask}
								editTask={editTask}
								editTodo={editTodo}
							/>
						);
					})}
				</div>
			</div>
		</Container>
	);
}

export default Main;
