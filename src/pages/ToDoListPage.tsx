import { Form } from '../components/Form/Form';
import { ToDoList } from '../components/ToDoList/ToDoList';
import type { ToDo } from '../models/todo-item';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { createAction, deleteAction, updateAction } from '../feature/todolist';

export const ToDoListPage = () => {
	const todoList = useSelector((state: RootState) => state.todoList.todos);
	const dispatch = useDispatch();

	const createNewToDo = (text: string) => {
		dispatch(createAction(text));
		toast.success('ToDo created successfully!')
	};

	const updateToDo = (toDoItem: ToDo) => {
		dispatch(updateAction(toDoItem));
		toast.success('ToDo updated successfully!')
	};

	const deleteToDo = (toDoItem: ToDo) => {
		dispatch(deleteAction(toDoItem));
		toast.success('ToDo deleted successfully!')
	};

	return (
		<>
			<Form createNewToDo={createNewToDo} />
			<ToDoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo} />
			<ToastContainer position='bottom-right' />
		</>
	);
}