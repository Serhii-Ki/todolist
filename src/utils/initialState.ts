import { v4 as uuidv4 } from 'uuid';
import {TasksType, TodoListType} from "./types";

const firstId: string = uuidv4();
const secondId: string = uuidv4();

export const todoListInitial: TodoListType[] = [
  {
    id: firstId,
    title: 'What to learn',
    date: new Date('2024-05-25'),
    filter: 'all'
  },
  {
    id: secondId,
    title: 'What to buy',
    date: new Date('2024-05-29'),
    filter: 'all'
  },
];

export const tasksInitial: TasksType = {
  [firstId]: [
    {
      id: uuidv4(),
      title: 'HTML',
      completed: true
    },
    {
      id: uuidv4(),
      title: 'CSS',
      completed: false
    },
    {
      id: uuidv4(),
      title: 'JavaScript',
      completed: true
    },
    {
      id: uuidv4(),
      title: 'react',
      completed: false
    },
    {
      id: uuidv4(),
      title: 'Typescript',
      completed: false
    },
  ],
  [secondId]: [
    {
      id: uuidv4(),
      title: 'Milk',
      completed: true
    },
    {
      id: uuidv4(),
      title: 'Bread',
      completed: false
    },
    {
      id: uuidv4(),
      title: 'Egs',
      completed: false
    },
  ]
}
