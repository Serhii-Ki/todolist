import { v1 } from "uuid";
import { TodoListType } from "../pages/main/Main";
import {
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

