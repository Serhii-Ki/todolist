import { v1 } from "uuid";
import { TodoListType } from "../pages/main/Main";
import {
  AddTodoListType,
  RemoveTodoListType,
  todolistReducer,
} from "./todolists-reducer";

const startState: TodoListType[] = [
  {
    id: v1(),
    title: "What to learn",
    filter: "all",
    tasks: [
      {
        id: v1(),
        title: "HTML",
        isDone: true,
      },
      {
        id: v1(),
        title: "CSS",
        isDone: true,
      },
      {
        id: v1(),
        title: "JavaScript",
        isDone: false,
      },
    ],
  },
  {
    id: v1(),
    title: "What to buy",
    filter: "all",
    tasks: [
      {
        id: v1(),
        title: "Milk",
        isDone: false,
      },
      {
        id: v1(),
        title: "Bread",
        isDone: true,
      },
    ],
  },
];

test("correct todolist should be removed", () => {
  const action: RemoveTodoListType = {
    type: "REMOVE-TODOLIST",
    payload: {
      todoId: startState[0].id,
    },
  };

  const endState = todolistReducer(startState, action);

  expect(endState.length).toBe(1);
  expect(endState[0].id).toBe(startState[1].id);
});

test("correct todolist should be added", () => {
  let newTodolist = "new Todo";

  const action: AddTodoListType = {
    type: "ADD-TODOLIST",
    payload: {
      title: newTodolist,
    },
  };

  const endState = todolistReducer(startState, action);

  expect(endState.length).toBe(3);
});
