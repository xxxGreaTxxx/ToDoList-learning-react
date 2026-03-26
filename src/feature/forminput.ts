import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface InputState {
	value: string
}

const initialState: InputState = {
	value: '',
}

export const inputSlice = createSlice({
	name: 'inputValue',
	initialState,
	reducers: {
		setInputValue: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
		clearInputValue: (state) => {
			state.value = '';
		},
	},
})

export const { setInputValue, clearInputValue } = inputSlice.actions

export default inputSlice.reducer