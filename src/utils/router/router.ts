import {createBrowserRouter} from "react-router-dom";
import TodoListsPage from "../../pages/todoListsPage/TodoListsPage";
import App from "../../App";


export const router = createBrowserRouter([
  {
    path: '/',
    element: App
  },
  {
    path: '/todolists',
    element: TodoListsPage
  }
])
