import Box from '@mui/material/Box';
import EditSpan from "../editSpan/EditSpan";
import Divider from '@mui/material/Divider';
import useTask from "../../utils/hooks/useTask";

type TaskPropsType = {
  taskId: string
  todoId: string
  title: string
  completed: boolean
}

function Task(props: TaskPropsType) {
  const {removeTask, changeCompleted, editTask} = useTask();

  const handleRemoveTask = () => {
    removeTask(props.todoId, props.taskId)
  }

  const handleChangeCompleted = () => {
    changeCompleted(props.todoId, props.taskId)
  }

  const handleEditTask = (title: string) => {
    editTask(props.todoId, props.taskId, title)
  }

  return (
      <Box>
        <EditSpan
            type='task'
            title={props.title}
            completed={props.completed}
            removeItem={handleRemoveTask}
            setNewTitle={handleEditTask}
            onChangeCompleted={handleChangeCompleted}
        />
        <Divider/>
      </Box>
  );
}

export default Task;