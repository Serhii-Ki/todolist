import {useSelector} from "react-redux";
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import AddItemForm from "../addItemForm/AddItemForm";
import CustomBtn from "../customBtn/CustomBtn";
import EditSpan from "../editSpan/EditSpan";
import Task from "../task/Task";
import {RootStateType} from "../../store/store";
import {FilterType, TasksType, TaskType} from "../../utils/types";
import {useMemo} from "react";
import useTodoList from "../../utils/hooks/useTodoList";

type TodoListPropsType = {
  todoId: string
  title: string
  filter: FilterType
}

function TodoList(props: TodoListPropsType) {
  const tasks = useSelector<RootStateType, TasksType>(state => state.tasks);
  const {removeTodoList, changeFilter} = useTodoList()

  const filteredTasks: TaskType[] = useMemo((): TaskType[] => {
    if(props.filter === 'active') {
      return tasks[props.todoId].filter(task => !task.completed)
    } else if(props.filter === 'completed') {
      return tasks[props.todoId].filter(task => task.completed)
    }
      return tasks[props.todoId]
  }, [props.filter]);

  const onRemoveTodoList = () => {
    removeTodoList(props.todoId)
  }

  const onChangeFilter = (filter: FilterType) => {
    changeFilter(props.todoId, filter)
  }

  return (
    <Paper sx={{ p: '20px' }}>
      <Box display='flex' flexDirection='column' gap='20px'>
        <EditSpan
            type='todoList'
            title={props.title}
            removeItem={onRemoveTodoList}
        />
        <AddItemForm
            inputLabel='add task'
            value=''
            onChange={() => {}}
            addItem={() => {}}
        />
        {filteredTasks.map(task =>
            <Task
              key={task.id}
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