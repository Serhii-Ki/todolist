import AddIcon from '@mui/icons-material/Add';
import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import CustomBtn from './CustomBtn';

const meta: Meta<typeof CustomBtn> = {
	component: CustomBtn,
};
export default meta;

type Story = StoryObj<typeof CustomBtn>;

export const StoryFilterBtn: Story = {
	args: {
		variant: 'contained',
		title: 'filterBtn',
		onClick: () => {},
		color: 'primary' || 'success',
	},
};

export const addBtn = () => {
	return <CustomBtn startIcon={<AddIcon />} title='' onClick={() => {}} />;
};

export const primaryFilterBtn = () => {
	return (
		<CustomBtn
			variant='contained'
			title='primary'
			onClick={() => {}}
			color={'primary'}
		/>
	);
};

export const activeFilterBtn = () => {
	return (
		<CustomBtn
			variant='contained'
			title='active'
			onClick={() => {}}
			color={'success'}
		/>
	);
};

export const changingFilterBtn = () => {
	const [filter, setFilter] = useState(false);

	const onChangeFilter = () => {
		setFilter(!filter);
	};
	return (
		<CustomBtn
			variant='contained'
			title='changing'
			onClick={onChangeFilter}
			color={filter ? 'success' : 'primary'}
		/>
	);
};
