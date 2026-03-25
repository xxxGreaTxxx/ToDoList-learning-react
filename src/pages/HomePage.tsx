import { ListItem } from '../components/ListItem/ListItem';
import type { ToDo } from '../models/todo-item';

interface ComponentProps {
	todos: ToDo[];
}

export const HomePage = ({ todos }: ComponentProps) => {
	return (
		<div className="container">
			{
				todos.map((todo: ToDo) => {
					return (
						<ListItem key={todo.id} todo={todo} />
					);
				})
			}
		</div>
	);
}