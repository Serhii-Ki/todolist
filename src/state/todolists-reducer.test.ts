import { v1 } from "uuid";
import { TodoListType } from "../pages/main/Main";
import { todolistReducer } from "./todolists-reducer";
import {
  addTaskAC,
  addTodoListAC,
  changeCheckedAC,
  changeFilterAC,
  editTaskAC,
  editTodoAC,
  removeTaskAC,
  removeTodoListAC,
} from "./actions";

const startState: TodoListType[] = [
  {
    id: v1(),
    title: "What to learn",
    filter: "all",
    tasks: [
      {
        id: v1(),
        title: "HTML",
        isDone: false,
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

test("correct todolist should remove", () => {
  const endState = todolistReducer(
    startState,
    removeTodoListAC(startState[0].id)
  );

  expect(endState.length).toBe(1);
  expect(endState[0].id).toBe(startState[1].id);
});

test("correct task should remove", () => {
  const endState = todolistReducer(
    startState,
    removeTaskAC(startState[0].id, startState[0].tasks[0].id)
  );

  expect(endState[0].tasks.length).toBe(2);
  expect(endState.length).toBe(2);
  expect(endState[0].tasks[0].id).toBe(startState[0].tasks[1].id);
});

test("correct todoList should added", () => {
  const newTitle = "new list";

  const endState = todolistReducer(startState, addTodoListAC(newTitle));

  expect(endState.length).toBe(3);
  expect(endState[2].title).toBe(newTitle);
});

test("correct task should added", () => {
  const newTitle = "new task";

  const endState = todolistReducer(
    startState,
    addTaskAC(startState[0].id, newTitle)
  );

  expect(endState[0].tasks.length).toBe(4);
  expect(endState[0].tasks[3].title).toBe(newTitle);
});

test("correct task isDone should true", () => {
  const endState = todolistReducer(
    startState,
    changeCheckedAC(startState[0].id, startState[0].tasks[0].id)
  );

  expect(endState[0].tasks[0].isDone).toBe(true);
});

test("correct filter todoList should change", () => {
  const endState = todolistReducer(
    startState,
    changeFilterAC(startState[0].id, "active")
  );

  expect(endState[0].filter).toBe("active");
});

test("correct title todoList should change", () => {
  const endState = todolistReducer(
    startState,
    editTodoAC(startState[0].id, "new title")
  );

  expect(endState[0].title).toBe("new title");
});

test("correct task title should change", () => {
  const endState = todolistReducer(
    startState,
    editTaskAC(startState[0].id, startState[0].tasks[0].id, "new title")
  );

  expect(endState[0].tasks[0].title).toBe("new title");
});
