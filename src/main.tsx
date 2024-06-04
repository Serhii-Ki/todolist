import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import App from './App'
import {store} from "./store/store";
import TodoListsPage from "./pages/todoListsPage/TodoListsPage";
import AddNewTodoList from "./pages/addTodoListPage/AddNewTodoList";
import SingleTodoList from "./components/singleTodoList/SingleTodoList";
import './index.css'

const router = createBrowserRouter([
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

ReactDOM.createRoot(document.getElementById('root')!).render(
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
)
