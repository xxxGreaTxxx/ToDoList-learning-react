import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todolist'
import inputReducer from './feature/forminput'
import themeReducer from './feature/themeList'
import { loadFromLocalStorage, saveToLocalStorage } from './heplers/storage';

const rootReducer = combineReducers({
	inputValue: inputReducer,
	todoList: todoReducer,
	themeReducer: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
	reducer: rootReducer,
	preloadedState: loadFromLocalStorage() as Partial<RootState>,
})

store.subscribe(() => saveToLocalStorage(store.getState()));

// export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch