import * as React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {RootStateType} from "../../store/store";
import {TasksType, TodoListType} from "../../utils/types";


interface Column {
  id: 'name' | 'date' | 'tasks' | 'active' | 'completed';
  label: string;
  minWidth?: number;
  align?: 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Todo lists', minWidth: 140 },
  { id: 'date', label: 'Date', minWidth: 100 },
  {
    id: 'tasks',
    label: 'Tasks count',
    minWidth: 100,
    align: 'center',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'active',
    label: 'Active tasks',
    minWidth: 100,
    align: 'center',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'completed',
    label: 'Completed tasks',
    minWidth: 100,
    align: 'center',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  id: string
  name: string;
  date: string;
  tasks: number;
  active: number;
  completed: number;
}

function createData(
    id: string,
    name: string,
    date: string,
    tasks: number,
    active: number,
    completed: number,
): Data {
  // const density = population / size;
  return {id, name, date, tasks, active, completed };
}

function TodoListTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const todoLists = useSelector<RootStateType, TodoListType[]>(state => state.todoLists);
  const tasks = useSelector<RootStateType, TasksType>(state => state.tasks);
  const navigate = useNavigate();

  const navigateToTodoList = (id: string) => {
    navigate(`${id}`);
  };

  const rows = todoLists.map(todoList => {
    const tasksCount = tasks[todoList.id].length;
    const activeTasksCount = tasks[todoList.id].filter(task =>!task.completed).length;
    const completedTasksCount = tasks[todoList.id].filter(task => task.completed).length;
    const year = todoList.date.getFullYear().toString();
    const month = (todoList.date.getMonth() + 1).toString();
    const day = todoList.date.getDate().toString();
    function addLeadingZero(num) {
      return num < 10 ? '0' + num : num;
    }
    let formattedDate = `${addLeadingZero(day)}.${addLeadingZero(month)}.${year}`;

    return createData(todoList.id, todoList.title, formattedDate, tasksCount, activeTasksCount, completedTasksCount);
  })

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
      <Paper sx={{ width: '70%', overflow: 'hidden', marginTop: '50px'}}>
        <TableContainer sx={{ maxHeight: 450 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                    <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.id} sx={{cursor: 'pointer'}} onClick={() => navigateToTodoList(row.id)}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                              <TableCell key={column.id} align={column.align}>
                                {value}
                              </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
  );
}

export default TodoListTable;