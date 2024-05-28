import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App'
import {store} from "./store/store";
import TodoListsPage from "./pages/todoListsPage/TodoListsPage";
import AddNewTodoList from "./pages/addTodoListPage/AddNewTodoList";

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/addtodo',
        element: <AddNewTodoList/>
      },
      {
        path: 'todolists',
        element: <TodoListsPage/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
)
