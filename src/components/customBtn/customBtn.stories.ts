import type { Meta, StoryObj } from '@storybook/react';
import CustomBtn from './CustomBtn';
import {isAction} from "redux";
import {useState} from "react";

const meta: Meta<typeof CustomBtn> = {
  component: CustomBtn,
};

export default meta;
type Story = StoryObj<typeof CustomBtn>;

export const NotActiveFilterBtn: Story = {
  args: {
    title: 'filter',
  },
};

export const ActiveFilterBtn: Story = {
  args: {
    title: 'active',
    color: 'success',
  },
};

export const ClickBtn: Story = {
  render: () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleClick = () => {
      setIsActive(!isActive);
    };

    return (
        CustomBtn({title: 'click', color: isActive ? 'success' : 'primary', onClick: handleClick})
  );
  },
};