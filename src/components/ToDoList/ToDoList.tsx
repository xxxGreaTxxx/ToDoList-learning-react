import { ToDoListItem } from './ToDoListItem/ToDoListItem';
import './ToDoList.scss';
import type { ToDo } from '../../models/todo-item';

export const ToDoList = (props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function }) => {
	const checkedList = () => {
		return props.todos
			.filter(todo => todo.isDone)
			.map(todo => {
				return <ToDoListItem
					key={todo.id}
					toDoItem={todo}
					updateToDo={props.updateToDo}
					deleteToDo={props.deleteToDo}
				/>
			});
	}

	const uncheckedList = () => {
		return props.todos
			.filter(todo => !todo.isDone)
			.map(todo => {
				return <ToDoListItem
					key={todo.id}
					toDoItem={todo}
					updateToDo={props.updateToDo}
					deleteToDo={props.deleteToDo}
				/>
			});
	}

	return (
		<div className="todo-container">
			<ul className="todo-list failed">
				{uncheckedList()}
			</ul>
			<ul className="todo-list completed">
				{checkedList()}
			</ul>
		</div>
	);
}