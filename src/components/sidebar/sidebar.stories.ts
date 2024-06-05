import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from "./Sidebar";
import {useState} from "react";
import CustomBtn from "../customBtn/CustomBtn";


const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SidebarST: Story = {
  args: {

  }
};