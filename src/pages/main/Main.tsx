import { Container } from "@mui/material";
import { useReducer, useState } from "react";
import { v1 } from "uuid";
import AddForm from "../../components/addForm/AddForm";
import TodoList from "../../components/todoList/TodoList";

import styles from "./main.module.css";
import { todolistReducer } from "../../state/todolists-reducer";
import {
  addTaskAC,
  addTodoListAC,
  changeCheckedAC,
  changeFilterAC,
  editTaskAC,
  editTodoAC,
  removeTaskAC,
  removeTodoListAC,
} from "../../state/actions";

export type FilterType = "all" | "active" | "completed";

export type TodoListType = {
  id: string;
  title: string;
  filter: FilterType;
  tasks: TaskType[];
};

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

const todoLists: TodoListType[] = [
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
      {
        id: v1(),
        title: "React",
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
      {
        id: v1(),
        title: "Banana",
        isDone: false,
      },
    ],
  },
];

function Main() {
  // const [todoList, setTodoList] = useState<TodoListType[]>(todoLists);
  const [todoList, dispatch] = useReducer(todolistReducer, todoLists);

  const deleteTodo = (todoId: string) => {
    dispatch(removeTodoListAC(todoId));
  };

  const deleteTask = (todoId: string, taskId: string) => {
    dispatch(removeTaskAC(todoId, taskId));
  };

  const addTodoList = (title: string) => {
    dispatch(addTodoListAC(title));
  };

  const addTask = (todoListId: string, title: string) => {
    dispatch(addTaskAC(todoListId, title));
  };

  const changeChecked = (todoId: string, taskId: string) => {
    dispatch(changeCheckedAC(todoId, taskId));
  };

  const changeFilter = (todoId: string, filter: FilterType) => {
    dispatch(changeFilterAC(todoId, filter));
  };

  const editTodo = (todoId: string, title: string) => {
    dispatch(editTodoAC(todoId, title));
  };

  const editTask = (todoId: string, taskId: string, title: string) => {
    dispatch(editTaskAC(todoId, taskId, title));
  };

  return (
    <Container>
      <div className={styles["main-wrap"]}>
        <h2>Add new todo list</h2>
        <AddForm addItem={addTodoList} placeholder="enter your todo" />
        <div className={styles["todo-wrap"]}>
          {todoList.map((el) => {
            return (
              <TodoList
                key={el.id}
                todoListId={el.id}
                tasks={el.tasks}
                title={el.title}
                filter={el.filter}
                addTask={addTask}
                changeChecked={changeChecked}
                changeFilter={changeFilter}
                deleteTodo={deleteTodo}
                deleteTask={deleteTask}
                editTask={editTask}
                editTodo={editTodo}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default Main;
