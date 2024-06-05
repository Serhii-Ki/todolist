import type { Meta, StoryObj } from '@storybook/react';
import TodoList from "./TodoList";


const meta: Meta<typeof TodoList> = {
  component: TodoList,
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof TodoList>;

export const Default: Story = {
  args: {
    todoId: 'some-id',
    title: 'Todo List Title',
    filter: 'all',
  },
};