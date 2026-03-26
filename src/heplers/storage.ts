import type { RootState } from '../store';

export const saveToLocalStorage = (state: RootState) => {
	try {
		const appState = JSON.stringify(state);
		localStorage.setItem('appState', appState);
	} catch (error) {
		console.warn('Error saving to localStorage', error);
	}
};

export const loadFromLocalStorage = () => {
	try {
		const appState = localStorage.getItem('appState');

		if (appState) {
			return JSON.parse(appState);
		}

		return undefined;
	} catch (error) {
		console.warn('Error loading from localStorage', error);
		return undefined;
	}
};