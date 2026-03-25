import { useState } from 'react';
import { Form } from '../components/Form/Form';
import { ToDoList } from '../components/ToDoList/ToDoList';
import type { ToDo } from '../models/todo-item';
import { toast, ToastContainer } from 'react-toastify';

export const ToDoListPage = () => {
	const [todos, setTodos] = useState<ToDo[]>([]);

	const createNewToDo = (text: string) => {
		const newToDo: ToDo = {
			id: todos.length,
			text,
			isDone: false
		};
		setTodos([...todos, newToDo]);
		toast.success('ToDo created successfully!')
	};

	const updateToDo = (toDoItem: ToDo) => {
		const newTodos = todos.map(todo => {
			if (todo.id === toDoItem.id) {
				todo.isDone = !todo.isDone
			}
			return todo;
		});
		setTodos(newTodos);
		toast.success('ToDo updated successfully!')
	};

	const deleteToDo = (toDoItem: ToDo) => {
		const newTodos = todos.filter(todo => todo.id !== toDoItem.id);
		setTodos(newTodos);
		toast.success('ToDo deleted successfully!')
	};

	return (
		<>
			<Form createNewToDo={createNewToDo} />
			<ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
			<ToastContainer position='bottom-right' />
		</>
	);
}