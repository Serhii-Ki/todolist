import { expect, test } from 'vitest'
import { v4 as uuidv4 } from 'uuid';
import {TodoListType} from "../types";
import {firstId, secondId, todoListInitial} from "../initialState";
import {todolistReducer} from "../../store/todolist-reducer";
import {AddTodoListAC, ChangeFilterAC, EditTodoTitleAC, RemoveTodoListAC} from "../../store/todolist-actions";


const startState: TodoListType[] = todoListInitial;

test('todo list should be added', () => {
  const todoId: string = uuidv4();
  const title: string = 'new Todo List';

  const endState = todolistReducer(startState, AddTodoListAC(todoId, title));

  expect(endState.length).toBe(3);
  expect(endState[2].id).toBe(todoId);
  expect(endState[2].title).toBe(title);
});

test('todo list should be removed', () => {
  const endState = todolistReducer(startState, RemoveTodoListAC(firstId));

  expect(endState.length).toBe(1);
  expect(endState[0].id).toBe(secondId);
  expect(endState[0].title).toBe(startState[1].title);
});

test('todo list filter should be changed', () => {
  const endState = todolistReducer(startState, ChangeFilterAC(firstId, 'active'));

  expect(endState[0].filter).toBe('active');
  expect(endState[1].filter).toBe('all');
});

test('todo list title should be changed', () => {
  const newTitle = 'new title';
  const endState = todolistReducer(startState, EditTodoTitleAC(firstId, newTitle));

  expect(endState[0].title).toBe(newTitle);
  expect(endState[1].title).toBe(startState[1].title);
})