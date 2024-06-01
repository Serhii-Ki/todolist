import {useMemo} from "react";
import {useSelector} from "react-redux";
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import AddItemForm from "../addItemForm/AddItemForm";
import CustomBtn from "../customBtn/CustomBtn";
import EditSpan from "../editSpan/EditSpan";
import Task from "../task/Task";
import {RootStateType} from "../../store/store";
import {FilterType, TasksType, TaskType} from "../../utils/types";
import useTodoList from "../../utils/hooks/useTodoList";
import useTask from "../../utils/hooks/useTask";

type TodoListPropsType = {
  todoId: string
  title: string
  filter: FilterType
}

function TodoList(props: TodoListPropsType) {
  const tasks = useSelector<RootStateType, TasksType>(state => state.tasks);
  const {
    removeTodoList,
    changeFilter,
    editTodoList
  } = useTodoList();

  const { addTask } = useTask();

  const filteredTasks: TaskType[] = useMemo((): TaskType[] => {
    if(props.filter === 'active') {
      return tasks[props.todoId].filter(task => !task.completed)
    } else if(props.filter === 'completed') {
      return tasks[props.todoId].filter(task => task.completed)
    }
      return tasks[props.todoId]
  }, [props.filter, tasks]);

  const onRemoveTodoList = () => {
    removeTodoList(props.todoId)
  }

  const onChangeFilter = (filter: FilterType) => {
    changeFilter(props.todoId, filter)
  }

  const setNewTitleTodoList = (title: string) => {
    editTodoList(props.todoId, title);
  }

  const addNewTask = (title: string) => {
    addTask(props.todoId, title)
  }

  return (
    <Paper sx={{ p: '35px' }}>
      <Box display='flex' flexDirection='column' gap='20px'>
        <EditSpan
            type='todoList'
            title={props.title}
            removeItem={onRemoveTodoList}
            setNewTitle={setNewTitleTodoList}
        />
        <AddItemForm
            inputLabel='add task'
            addItem={addNewTask}
        />
        {filteredTasks.map(task =>
            <Task
              key={task.id}
              taskId={task.id}
              todoId={props.todoId}
              title={task.title}
              completed={task.completed}
            />
        )}
        <Box display='flex' gap='15px'>
          <CustomBtn title='all' color={props.filter === 'all' ? 'success' : 'primary'} onClick={() => onChangeFilter('all')}/>
          <CustomBtn title='active' color={props.filter === 'active' ? 'success' : 'primary'} onClick={() => onChangeFilter('active')}/>
          <CustomBtn title='completed' color={props.filter === 'completed' ? 'success' : 'primary'} onClick={() => onChangeFilter('completed')}/>
        </Box>
      </Box>
    </Paper>
  );
}

export default TodoList;