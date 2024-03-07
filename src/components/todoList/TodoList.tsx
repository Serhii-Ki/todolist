import { TaskType } from '../../pages/main/Main';
import AddForm from '../addForm/AddForm';
import CustomBtn from '../customBtn/CustomBtn';
import Task from '../task/Task';

import styles from './todoList.module.css';

type TodoPropsType = {
	tasks: TaskType[];
	todoListId: string;
	title: string;
};

function TodoList(props: TodoPropsType) {
	return (
		<div>
			<h2>{props.title}</h2>
			<AddForm placeholder='enter your task' />
			<div className={styles['btn-wrap']}>
				<CustomBtn variant='contained' title='all' onClick={() => {}} />
				<CustomBtn variant='contained' title='active' onClick={() => {}} />
				<CustomBtn variant='contained' title='completed' onClick={() => {}} />
			</div>
			<ul className={styles['tasks-wrap']}>
				{props.tasks.map(el => {
					return <Task key={el.id} title={el.title} />;
				})}
			</ul>
		</div>
	);
}

export default TodoList;
