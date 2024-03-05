import { Button } from '@mui/material';

import styles from './customBtn.module.css';

type BtnPropsType = {
	title: string;
	onClick: () => void;
};

function CustomBtn(props: BtnPropsType) {
	return (
		<Button onClick={props.onClick} variant='text' className={styles.btn}>
			{props.title}
		</Button>
	);
}

export default CustomBtn;
