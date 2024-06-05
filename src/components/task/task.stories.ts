import type { Meta, StoryObj } from '@storybook/react';
import Task from "./Task";

const meta: Meta<typeof Task> = {
  component: Task,
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof Task>;

export const Default: Story = {
  args: {
    title: 'Task Title',
  },
};