import { expect, test } from 'vitest';
import { v4 as uuidv4 } from 'uuid';
import {TasksType} from "../types";
import {firstId, tasksInitial} from "../initialState";
import {taskReducer} from "../../store/task-reducer";
import {AddTaskAC, ChangeCompletedAC, EditTaskAC, RemoveTaskAC, UpdateTaskAC} from "../../store/task-actions";


const startState: TasksType = tasksInitial;

test('tasks should be updated', () => {
  const todoId = uuidv4();
  const endState = taskReducer(startState, UpdateTaskAC(todoId));

  expect(endState[todoId].length).toBe(0);
  expect(Object.keys(endState).length).toBe(3);
});

test('task should be added', () => {
  const taskId: string = uuidv4();
  const title: string = 'task title';

  const endState = taskReducer(startState, AddTaskAC(firstId, taskId, title));

  expect(endState[firstId].length).toBe(6);
  expect(endState[firstId][5].id).toBe(taskId);
  expect(endState[firstId][5].title).toBe(title);
});

test('task should be removed', () => {
  const endState = taskReducer(startState, RemoveTaskAC(firstId, startState[firstId][0].id));

  expect(endState[firstId].length).toBe(4);
  expect(endState[firstId][0].id).not.toBe(startState[firstId][0].id);
});

test('task completed status should be changed', () => {
  const endState = taskReducer(startState, ChangeCompletedAC(firstId, startState[firstId][0].id));

  expect(endState[firstId][0].completed).toBe(false);
  expect(endState[firstId][1].completed).toBe(false); //don`t change completed
});

test('task title should be changed', () => {
  const newTitle: string = 'New Task Title';
  const endState = taskReducer(startState, EditTaskAC(firstId, startState[firstId][0].id, newTitle));

  expect(endState[firstId][0].title).toBe(newTitle);
  expect(endState[firstId][1].title).not.toBe(newTitle); //don`t change title
})