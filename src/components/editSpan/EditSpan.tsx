import { useState } from 'react';
import CustomBtn from '../customBtn/CustomBtn';
import CustomInput from '../customInput/CustomInput';

type ModeType = 'span' | 'input';

type EditSpanPropsType = {
	title: string;
};

function EditSpan(props: EditSpanPropsType) {
	const [viewMode, setViewMode] = useState<ModeType>('span');

	const setViewSpan = () => {
		setViewMode('span');
	};

	const setInputMode = () => {
		setViewMode('input');
	};

	return (
		<>
			{viewMode === 'span' ? (
				<span onDoubleClick={setInputMode}>{props.title}</span>
			) : (
				<div>
					<CustomInput />
					<CustomBtn title='cancel' onClick={() => {}} />
					<CustomBtn title='confirm' onClick={() => {}} />
				</div>
			)}
		</>
	);
}

export default EditSpan;
