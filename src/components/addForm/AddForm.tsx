import AddIcon from '@mui/icons-material/Add';
import CustomBtn from '../customBtn/CustomBtn';
import CustomInput from '../customInput/CustomInput';

import styles from './addForm.module.css';

type AddFormType = {
	placeholder?: string;
};

function AddForm(props: AddFormType) {
	return (
		<div className={styles['add-wrap']}>
			<CustomInput placeholder={props.placeholder} />
			<CustomBtn startIcon={<AddIcon />} title='' onClick={() => {}} />
		</div>
	);
}

export default AddForm;
