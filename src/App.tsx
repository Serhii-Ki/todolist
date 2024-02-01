import { v1 } from 'uuid';
import './App.css';
import ToDoList from './ToDoList';

function App() {
	let tasks1 = [
		{ id: v1(), title: 'HTML&CSS', isDone: true },
		{ id: v1(), title: 'JS', isDone: true },
		{ id: v1(), title: 'ReactJS', isDone: false },
		{ id: v1(), title: 'Rest API', isDone: false },
		{ id: v1(), title: 'GraphQL', isDone: false },
	];

	return (
		<div className='App'>
			<ToDoList title='What to learn' tasks={tasks1} />
		</div>
	);
}

export default App;
