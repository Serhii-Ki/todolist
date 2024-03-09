import { useState } from 'react';
import { FilterType, TaskType } from '../../pages/main/Main';
import AddForm from '../addForm/AddForm';
import CustomBtn from '../customBtn/CustomBtn';
import EditSpan from '../editSpan/EditSpan';
import Task, { ModeType } from '../task/Task';

import ConfigMenu from '../configMenu/ConfigMenu';
import styles from './todoList.module.css';

type TodoPropsType = {
	tasks: TaskType[];
	todoListId: string;
	title: string;
	filter: FilterType;
	addTask: (todoId: string, title: string) => void;
	changeChecked: (todoId: string, taskId: string) => void;
	changeFilter: (todoId: string, filter: FilterType) => void;
	deleteTodo: (todoId: string) => void;
	deleteTask: (todoId: string, taskId: string) => void;
	editTask: (todoId: string, taskId: string, title: string) => void;
	editTodo: (todoId: string, title: string) => void;
};

function TodoList(props: TodoPropsType) {
	const [viewMode, setViewMode] = useState<ModeType>('span');
	const [inputValue, setInputValue] = useState<string>('');
	const [errorEdit, setErrorEdit] = useState<boolean>(false);

	const setSpanMode = () => {
		setViewMode('span');
	};

	const setInputMode = () => {
		setViewMode('input');
		setInputValue(props.title);
	};

	const setErrorEditTodo = () => {
		setErrorEdit(true);
	};

	const onChangeInput = (title: string) => {
		setInputValue(title);
		setErrorEdit(false);
	};

	const editTodo = (title: string) => {
		props.editTodo(props.todoListId, title);
	};

	const addTask = (title: string) => {
		props.addTask(props.todoListId, title);
	};

	const changeChecked = (taskId: string) => {
		props.changeChecked(props.todoListId, taskId);
	};

	const changeFilter = (filter: FilterType) => {
		props.changeFilter(props.todoListId, filter);
	};

	const deleteTodo = () => {
		props.deleteTodo(props.todoListId);
	};

	const deleteTask = (taskId: string) => {
		props.deleteTask(props.todoListId, taskId);
	};

	const editTask = (taskId: string, title: string) => {
		props.editTask(props.todoListId, taskId, title);
	};

	const filterTasks = (): TaskType[] => {
		if (props.filter === 'active') {
			return props.tasks.filter(el => !el.isDone);
		}
		if (props.filter === 'completed') {
			return props.tasks.filter(el => el.isDone);
		}
		return props.tasks.sort((a, b) => +a.isDone - +b.isDone);
	};
	return (
		<div>
			<h2 className={styles['todo-title']}>
				<EditSpan
					title={props.title}
					viewMode={viewMode}
					inputValue={inputValue}
					errorEdit={errorEdit}
					setSpanMode={setSpanMode}
					setInputMode={setInputMode}
					setInputValue={onChangeInput}
					setErrorEdit={setErrorEditTodo}
					editItem={editTodo}
				/>
				{viewMode === 'span' && (
					<ConfigMenu deleteItem={deleteTodo} setInputMode={setInputMode} />
				)}
			</h2>
			<AddForm addItem={addTask} placeholder='enter your task' />
			<div className={styles['btn-wrap']}>
				<CustomBtn
					variant='contained'
					title='all'
					onClick={() => {
						changeFilter('all');
					}}
					color={props.filter === 'all' ? 'success' : 'primary'}
				/>
				<CustomBtn
					variant='contained'
					title='active'
					onClick={() => {
						changeFilter('active');
					}}
					color={props.filter === 'active' ? 'success' : 'primary'}
				/>
				<CustomBtn
					variant='contained'
					title='completed'
					onClick={() => {
						changeFilter('completed');
					}}
					color={props.filter === 'completed' ? 'success' : 'primary'}
				/>
			</div>
			<ul className={styles['tasks-wrap']}>
				{filterTasks().map(el => {
					return (
						<Task
							key={el.id}
							title={el.title}
							taskId={el.id}
							isDone={el.isDone}
							changeChecked={changeChecked}
							deleteTask={deleteTask}
							editTask={editTask}
						/>
					);
				})}
			</ul>
		</div>
	);
}

export default TodoList;
