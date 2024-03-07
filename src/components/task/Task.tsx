import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Checkbox, IconButton } from '@mui/material';
import EditSpan from '../editSpan/EditSpan';

import styles from './task.module.css';

type TaskPropsType = {
	title: string;
};

function Task(props: TaskPropsType) {
	return (
		<li className={styles['task-wrap']}>
			<Checkbox />
			<EditSpan title={props.title} />
			<IconButton aria-label='delete'>
				<DeleteIcon />
			</IconButton>
			<IconButton aria-label='edit'>
				<EditIcon />
			</IconButton>
		</li>
	);
}

export default Task;
