import { Button, ButtonProps } from '@mui/material';

import styles from './customBtn.module.css';

type BtnPropsType = {
	title: string;
	onClick: () => void;
} & ButtonProps;

function CustomBtn(props: BtnPropsType) {
	const onClickHandler = () => {
		props.onClick();
	};
	return (
		<Button {...props} onClick={onClickHandler} className={styles.btn}>
			{props.title}
		</Button>
	);
}

export default CustomBtn;
