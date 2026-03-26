import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ToDo } from '../models/todo-item'

export interface ToDoState {
	todos: ToDo[]
}

const initialState: ToDoState = {
	todos: [],
}

export const todoSlice = createSlice({
	name: 'todoList',
	initialState,
	reducers: {
		createAction: (state, action: PayloadAction<string>) => {
			const newToDo: ToDo = {
				id: state.todos.length,
				text: action.payload,
				isDone: false
			};
			state.todos = [...state.todos, newToDo];
		},
		updateAction: (state, action: PayloadAction<ToDo>) => {
			const newTodos = state.todos.map(todo => {
				if (todo.id === action.payload.id) {
					todo.isDone = !todo.isDone
				}
				return todo;
			});
			state.todos = newTodos;
		},
		deleteAction: (state, action: PayloadAction<ToDo>) => {
			state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
		},
	},
})

export const { createAction, updateAction, deleteAction } = todoSlice.actions

export default todoSlice.reducer