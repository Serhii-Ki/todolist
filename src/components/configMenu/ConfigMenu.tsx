import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';

type ConfigMenuPropsType = {
	deleteItem: () => void;
	setInputMode: () => void;
};

function ConfigMenu(props: ConfigMenuPropsType) {
	return (
		<div>
			<IconButton aria-label='edit' onClick={props.setInputMode}>
				<EditIcon />
			</IconButton>
			<IconButton aria-label='delete' onClick={props.deleteItem}>
				<DeleteIcon />
			</IconButton>
		</div>
	);
}

export default ConfigMenu;
