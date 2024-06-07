import {createBrowserRouter, Navigate} from "react-router-dom";
import TodoListsPage from "../../pages/todoListsPage/TodoListsPage";
import App from "../../App";
import AddNewTodoList from "../../pages/addTodoListPage/AddNewTodoList";
import SingleTodoList from "../../components/singleTodoList/SingleTodoList";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Navigate to="addtodo" />,
      },
      {
        path: 'addtodo',
        element: <AddNewTodoList/>
      },
      {
        path: 'todolists',
        element: <TodoListsPage/>
      },
      {
        path: 'addtodo/:id',
        element: <SingleTodoList/>
      }
    ]
  },
])
