import type { ToDo } from '../../models/todo-item';
import classes from './ListItem.module.scss';
import { Link } from 'react-router-dom';

export const ListItem = ({ todo }: { todo: ToDo }) => {
	return (
		<Link
			to={`/list/${todo.id}`}
			className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`}
		>{todo.text}</Link>
	);
}