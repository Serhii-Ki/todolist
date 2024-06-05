import type { Meta, StoryObj } from '@storybook/react';
import CustomInput from "./CustomInput";
import {useState} from "react";


const meta: Meta<typeof CustomInput> = {
  component: CustomInput,
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof CustomInput>;

export const Input: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e) => {
      setValue(e.target.value);
    };

    return (
        CustomInput({label: 'enter text', value: value, onChange: handleChange})
    );
  },
};