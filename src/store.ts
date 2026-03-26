import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todolist'
import inputReducer from './feature/forminput'
import { loadFromLocalStorage, saveToLocalStorage } from './heplers/storage';

export const store = configureStore({
	reducer: {
		todoList: todoReducer,
		inputValue: inputReducer,
	},
	preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch