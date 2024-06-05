import type { Meta, StoryObj } from '@storybook/react';
import AddItemForm from "./AddItemForm";
import CustomBtn from "../customBtn/CustomBtn";
import {useState} from "react";



const meta: Meta<typeof AddItemForm> = {
  component: AddItemForm,
  parameters: {
    layout: 'centered'
  },
  args: {
    inputLabel: 'title'
  }
};

export default meta;
type Story = StoryObj<typeof AddItemForm>;

export const AddFormItem: Story = {
  render: () => {
    return (
        AddItemForm({inputLabel: 'title', addItem: () => {}})
    );
  },
};