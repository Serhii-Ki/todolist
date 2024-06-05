import type { Meta, StoryObj } from '@storybook/react';
import EditSpan from "./EditSpan";
import {useState} from "react";


const meta: Meta<typeof EditSpan> = {
  component: EditSpan,
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof EditSpan>;

export const TodoListEditSpan: Story = {
  args: {
    type: 'todoList',
    title: 'Todo List'
  },
};

export const TaskEditSpan: Story = {
  args: {
    type: 'task',
    title: 'Task title'
  },
};

export const TaskChang: Story = {
  render: () => {
    const [value, setValue] = useState<string>('Task title');

    const handleChange = (e) => {
      setValue(e.target.value);
    };

    return (
        EditSpan({type:'task',title: value, setNewTitle: handleChange, removeItem: () => {}})
    );
  },
};

