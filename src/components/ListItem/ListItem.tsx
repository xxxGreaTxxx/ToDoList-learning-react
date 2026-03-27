import type { ToDo } from '../../models/todo-item';
import { ListItemBlock } from './ListItem.style';

export const ListItem = ({ todo }: { todo: ToDo }) => {
	return (
		<ListItemBlock
			href={`/list/${todo.id}`}
			className={`${todo.isDone ? 'done' : 'notDone'}`}
		>{todo.text}</ListItemBlock>
	);
}