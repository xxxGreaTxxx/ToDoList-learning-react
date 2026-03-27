import { ToDoListItem } from './ToDoListItem/ToDoListItem';
import type { ToDo } from '../../models/todo-item';
import { ToDoListBlock, ToDoListWrapper } from './ToDoList.style';

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
		<ToDoListWrapper>
			<ToDoListBlock className="failed">
				{uncheckedList()}
			</ToDoListBlock>
			<ToDoListBlock className="completed">
				{checkedList()}
			</ToDoListBlock>
		</ToDoListWrapper>
	);
}